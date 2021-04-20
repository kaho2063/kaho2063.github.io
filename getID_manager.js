document.addEventListener('DOMContentLoaded', () => {
  const beforeText = document.getElementById('beforeText');
  const afterText = document.getElementById('afterText');
  const getTextareaArray = (text) => {
    let textArray = text
      .replace(/\{\{(PostingDeck|VotingEndDeck)/g, '{{DeckPage')
      .replace(/OldDeck(Set)?Table/g, 'Deck$1Table')
      .replace(/\|numberOfPassive=\d/g, '|passiveParts=')
      .replace(/\|passive\dCost=\d\n/g, '')
      .replace(/\n(\|passive\d=[^\n]+)/g, '$1')
      .replace(/\|otherPassive=\n?/g, '')
      .replace(/\|numberOfRows=\d/g, '|battleParts=')
      .replace(/\|costOfBattle\d=\d\n/g, '')
      .replace(/\n(\|battle\d=[^\n]+)/g, '$1')
      .replace(/\n\|numberOfBattle\d=([^\n])/g, '×$1')
      .replace(/\|otherBattle=\n?/g, '')
      .replace(/OldDeckSetMemberParts/g, 'DeckSetMemberParts')
      .replace(/colspan="2"\{\{!\}\}/g, '')
      .replace(/<tabber>\n未選択=/g, '')
      .replace(/\n<\/tabber>\n?/g, '')
      .split(/\r?\n/g);

    textArray = textArray.map(text => {
      let returnValue = text;
      if (/deck(Set)?Type=/g.test(text)) {
        returnValue = text
          .replace(/deck(Set)?Type=([^{、・]+)/g, 'deck$1Type={{LinkDeckType|$2}}')
          .replace(/([、・])([^{、・]+)/g, '$1{{LinkDeckType|$2}}');
      }
      if (/corePage=/g.test(text)) {
        returnValue = text
          .replace(/corePage=/g, 'coreParts=')
          .replace(/\[\[([^\]]+のページ[^\]]*)\]\]/g, '{{PopupCorePage‎|$1}}');
      }
      if (/passive\d=/g.test(text)) {
        returnValue = getID_common.getPassiveId(text.replace(/([^（]+)（[^）]+）/g, '$1'))
          .replace(/\|passive\d=(\d+)/g, '{{PopupPassive|$1}}');
      }
      if (/battle\d=/g.test(text)) {
        returnValue = getID_common.getBattleId(text.replace(/([^\(]+)\(コスト\d\)/g, '$1'))
          .replace(/\|battle\d=(\d+)([^×]*)(×[^|]+)/g, '{{PopupBattle|$1|$3}}$2');
      }
      return returnValue;
    });

    let textareaArray = textArray.join("\n").split(/\n(\|-\|\n[^|{}].+=)\n/g);
    textareaArray = textareaArray.sort((a, b) => {
      let commentId_a = a.match(/\n\|commentId=(\d+)/) ?? [null, 0];
      let commentId_b = b.match(/\n\|commentId=(\d+)/) ?? [null, 0];
      if (commentId_a[1] < commentId_b[1]) return -1;
      if (commentId_a[1] > commentId_b[1]) return 1;
      return 0;
    });
    return textareaArray;
  };
  const changeDeckPage = document.getElementById('changeDeckPage');
  changeDeckPage.addEventListener('click', () => {
    let deleteElements = document.querySelectorAll('#afterText ~ *');

    Array.prototype.forEach.call(deleteElements, element => {
      element.remove();
    });

    let textareaArray = getTextareaArray(beforeText.value);

    if (textareaArray.length > 0) {
      textareaArray.forEach(text => {
        let deckNameMatch = text.match(/\n\|deckName=(.+)/);
        if (deckNameMatch === null || deckNameMatch.length < 1)
          return true;

        let linkElement = document.createElement('a');
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.textContent = deckNameMatch[1];
        let baseUrl = 'https://library-of-ruina.fandom.com/ja/wiki/デッキ図書棚/' + (/DeckSetTable/.test(text) ? 'デッキセット/' : 'デッキ/');
        linkElement.href = baseUrl + deckNameMatch[1] + '?veaction=editsource';
        afterText.parentElement.appendChild(linkElement);

        let textareaElement = document.createElement('textarea');
        textareaElement.value = text.replace(/\n\|deckName=.+/g, '');

        textareaElement.value += "\n";
        let corePageArray = text.match(/(\{\{PopupCorePage‎\|[^}]+のページ[^}]*\}\}|司書補)/g);
        if (corePageArray !== null && corePageArray.length > 0) {
          corePageArray.forEach(corePagetext => {
            textareaElement.value += "[[カテゴリ:デッキ/コアページ/" + corePagetext.replace(/\{\{PopupCorePage‎\|([^}]+)のページ([^}]*)\}\}/, '$1$2') + "|{{SUBPAGENAME}}]]";
          });
        }

        textareaElement.value += "\n[[カテゴリ:デッキ/作成可能時期/|{{SUBPAGENAME}}]]";
        textareaElement.value += "\n[[カテゴリ:デッキ/階層/|{{SUBPAGENAME}}]]";
        afterText.parentElement.appendChild(textareaElement);
      });
    }
  });
});
