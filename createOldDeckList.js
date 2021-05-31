((d) => {
  const copyTextToClipboard = (textVal) => {
    // テキストエリアを用意する
    const copyFrom = d.createElement("textarea");
    // テキストエリアへ値をセット
    copyFrom.textContent = textVal;

    // 子要素にテキストエリアを配置
    d.body.appendChild(copyFrom);
    // テキストエリアの値を選択
    copyFrom.select();
    // コピーコマンド発行
    d.execCommand('copy');
    // 追加テキストエリアを削除
    d.body.removeChild(copyFrom);
  };
  const hierarchyValues = {
    '特になし': '0',
    '[[歴史の階]]': '1',
    '[[技術科学の階]]': '2',
    '[[文学の階]]': '3',
    '[[芸術の階]]': '4',
    '[[自然科学の階]]': '5',
    '[[言語の階]]': '6',
    '[[社会科学の階]]': '7',
    '[[哲学の階]]': '8',
    '[[宗教の階]]': '9',
    '[[総記の階]]': '10',
  };
  const timingForCreateValues = {
    '都市怪談': '2',
    '都市伝説': '3',
    '都市疾病 1段目': '4-1',
    '都市疾病 2段目': '4-2',
    '都市悪夢 1段目': '5-1',
    '都市悪夢 2段目': '5-2',
    '都市の星 1段目': '6-1',
    '都市の星 2段目': '6-2',
    '都市の星 3段目': '6-3',
    '不純物 1段目': '7-1',
    '不純物 2段目': '7-2',
    '不純物 3,4段目': '7-3'
  };
  const getDeckRecordText = (deckData, commentId) => {
    let deckName = deckData['deckName'];
    let deckTypes = deckData['deckTypes'];
    let corePages = deckData['corePages'];
    let timingForCreate = deckData['timingForCreate'];
    let hierarchies = deckData['hierarchies'];
    let videoLinks = deckData['videoLinks'];

    let timingForCreateValue = timingForCreateValues[timingForCreate];
    let hierarchyValue = hierarchies.length === 1 ? hierarchyValues[hierarchies[0]] : '0';

    let text = '{{!-}}data-comment-id="' + commentId + '"\n';
    text += '{{!}}data-sort-value="' + deckName + '"{{!}}' + deckName + '\n';
    text += '{{!}}' + corePages.map(corePage => '[[' + corePage + 'のページ]]').join('/') + '\n';
    text += '{{!}}data-sort-value="' + timingForCreateValue + '" style="white-space: nowrap;"{{!}}[[招待#' + timingForCreate.replace(/ [\d,]+段目/, '') + '|' + timingForCreate.replace(' ', '<br>') + ']]\n';
    text += '{{!}}data-sort-value="' + hierarchyValue + '"{{!}}' + hierarchies.join('/') + '\n';
    text += '{{!}}' + videoLinks.join('/') + '\n';
    text += '{{!-}}\n';
    text += '{{!}}data-sort-value="' + deckName + '" colspan="2"{{!}}\n';
    text += '{{VotingEndDeck\n';
    text += '|deckName=' + deckName + '\n';
    text += '}}\n';
    text += '{{!}}data-sort-value="' + timingForCreateValue + '" style="display: none;"{{!}}\n';
    text += '{{!}}data-sort-value="' + hierarchyValue + '" colspan="2" style="display: none;"{{!}}\n';
    text += '{{!-}}\n';
    return text;
  };
  const getDeckData = (d, deckFilter) => {
    const deckName = d.title.match(deckFilter)[1];
    const deckTypes = [];
    const corePages = [];
    let timingForCreate = null;
    const hierarchies = [];
    Array.prototype.forEach.call(d.querySelectorAll('.categories .category'), element => {
      if (/デッキ\/タイプ\/(.+)/.test(element.dataset.name)) {
        deckTypes.push(element.dataset.name.match('デッキ/タイプ/(.+)')[1]);
        return true;
      }
      if (/デッキ\/コアページ\/(.+)/.test(element.dataset.name)) {
        corePages.push(element.dataset.name.match('デッキ/コアページ/(.+)')[1]);
        return true;
      }
      if (/デッキ\/作成可能時期\/(.+)/.test(element.dataset.name)) {
        timingForCreate = element.dataset.name.match('デッキ/作成可能時期/(.+)')[1].replace(/( )?クリア後/, '');
        return true;
      }
      if (/デッキ\/階層\/(.+)/.test(element.dataset.name)) {
        let hierarchy = element.dataset.name.match('デッキ/階層/(.+)')[1];
        if (!(hierarchy in hierarchyValues))
          hierarchy = '[[' + hierarchy + ']]';

        hierarchies.push(hierarchy);
        return true;
      }
    });

    const videoLinks = [];

    let videoLinkElements = d.querySelectorAll('[href*="https://youtu.be/"]');
    Array.prototype.forEach.call(videoLinkElements, (linkElement) => {
      videoLinks.push('[' + linkElement.href + ' ▶]');
    });

    videoLinkElements = d.querySelectorAll('[href*="https://www.youtube.com/"]');
    Array.prototype.forEach.call(videoLinkElements, (linkElement) => {
      videoLinks.push('[' + linkElement.href + ' ▶]');
    });

    const returnValue = {
      'deckName': deckName,
      'deckTypes': deckTypes,
      'corePages': corePages,
      'timingForCreate': timingForCreate,
      'hierarchies': hierarchies,
      'videoLinks': videoLinks
    };
    return returnValue;
  };
  if (/デッキセット\/([^|]+) \| /.test(d.title)) {
    const commentId = Object.values(d.querySelectorAll('a[href*="commentId"]')).find(e => e.text === '投稿時コメント').href.match(/commentId=(\d+)/)[1];
    const deckData = getDeckData(d, new RegExp(/デッキセット\/([^|]+) \| /));
    copyTextToClipboard(getDeckRecordText(deckData, commentId));
    alert('デッキセットデータをコピーしました。');
  } else if (/デッキ\/([^|]+) \| /.test(d.title)) {
    const commentId = Object.values(d.querySelectorAll('a[href*="commentId"]')).find(e => e.text === '投稿時コメント').href.match(/commentId=(\d+)/)[1];
    const deckData = getDeckData(d, new RegExp(/デッキ\/([^|]+) \| /));
    copyTextToClipboard(getDeckRecordText(deckData, commentId));
    alert('デッキデータをコピーしました。');
  } else {
    alert('デッキかデッキセットのページで実行してください。');
  }
})(document);
