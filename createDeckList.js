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
  const versionValues = {
    '1.0.3.0': '3',
    '1.0.3.1': '4',
    '1.0.3.3': '5',
    '1.0.3.5': '6',
    '1.0.3.6': '7',
    '1.0.3.6c': '8',
    '1.0.3.9': '9',
    '1.0.4.0': '10',
    '1.0.4.2': '11',
    '1.0.4.4b': '12',
    '1.1.0.3': '13',
    '': '14',
  };
  const hierarchyValues = {
    '特になし': '0',
    '歴史の階': '1',
    '科学技術の階': '2',
    '文学の階': '3',
    '芸術の階': '4',
    '自然科学の階': '5',
    '言語の階': '6',
    '社会科学の階': '7',
    '哲学の階': '8',
    '宗教の階': '9',
    '総記の階': '10',
  };
  const timingForCreateValues = {
    '都市怪談 クリア後': '2',
    '都市伝説 クリア後': '3',
    '都市疾病 1段目クリア後': '4-1',
    '都市疾病 2段目クリア後': '4-2',
    '都市悪夢 1段目クリア後': '5-1',
    '都市悪夢 2段目クリア後': '5-2',
    '都市の星 1段目クリア後': '6-1',
    '都市の星 2段目クリア後': '6-2',
    '都市の星 3段目クリア後': '6-3',
    '不純物 1段目クリア後': '7-1',
    '不純物 2段目クリア後': '7-2',
    '不純物 3,4段目クリア後': '7-3'
  };
  const getDeckRecordText = (deckSetFlag, deckData, commentId) => {
    let deckName = deckData['deckName'];
    let deckTypes = deckData['deckTypes'];
    let corePages = deckData['corePages'];
    let timingForCreate = deckData['timingForCreate'];
    let hierarchies = deckData['hierarchies'];
    let version = deckData['version'];
    let videoLinks = deckData['videoLinks'];

    let text = '{{#switch:{{SUBPAGENAME}}|デッキ考察|デッキ図書棚|デッキ' + (deckSetFlag ? 'セット' : '');

    if (deckTypes.length > 0)
      text += '|' + deckTypes.join('|');

    if (corePages.length > 0)
      text += '|' + corePages.join('|');

    text += '|' + timingForCreate;

    if (hierarchies.length > 0)
      text += '|' + hierarchies.join('|');

    text += '=\n';

    text += '{{!-}}data-comment-id="' + commentId + '"\n';
    text += '{{!}}data-sort-value="' + deckName + '"{{!}}[[デッキ図書棚/デッキ' + (deckSetFlag ? 'セット' : '') + '/' + deckName + '|' + deckName + ']]\n';
    text += '{{!}}' + deckTypes.map(deckType => '[[:カテゴリ:デッキ/タイプ/' + deckType + '|' + deckType + ']]').join('/') + '\n';
    text += '{{!}}' + corePages.map(corePage => '[[:カテゴリ:デッキ/コアページ/' + corePage + '|' + corePage + ']]').join('/') + '\n';
    text += '{{!}}data-sort-value="' + timingForCreateValues[timingForCreate] + '" style="white-space: nowrap;"{{!}}[[:カテゴリ:デッキ/作成可能時期/' + timingForCreate + '|' + timingForCreate.replace(/( )?クリア後/, '').replace(' ', '<br>') + ']]\n';
    text += '{{!}}data-sort-value="' + (hierarchies.length === 1 ? hierarchyValues[hierarchies[0]] : '0') + '"{{!}}' + hierarchies.map(hierarchy => '[[:カテゴリ:デッキ/階層/' + hierarchy + '|' + hierarchy + ']]').join('/') + '\n';
    text += '{{!}}data-sort-value="' + versionValues[version] + '" style="white-space: nowrap;"{{!}}' + (version ? version + 'より前\n' : '\n');
    text += '{{!}}' + videoLinks.join('/') + '\n';
    text += '{{!-}}\n';
    text += '}}\n';
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
        timingForCreate = element.dataset.name.match('デッキ/作成可能時期/(.+)')[1];
        return true;
      }
      if (/デッキ\/階層\/(.+)/.test(element.dataset.name)) {
        hierarchies.push(element.dataset.name.match('デッキ/階層/(.+)')[1]);
        return true;
      }
    });

    const versionElement = d.querySelector('h2').nextElementSibling.textContent.match(/ver(.+)より前に/);
    const version = versionElement !== null ? versionElement[1] : '';

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
      'version': version,
      'videoLinks': videoLinks
    };
    return returnValue;
  };
  if (/デッキセット\/([^|]+) \| /.test(d.title)) {
    const commentId = Object.values(d.querySelectorAll('a[href*="commentId"]')).find(e => e.text === '投稿時コメント').href.match(/commentId=(\d+)/)[1];
    const deckData = getDeckData(d, new RegExp(/デッキセット\/([^|]+) \| /));
    copyTextToClipboard(getDeckRecordText(true, deckData, commentId));
    alert('デッキセットデータをコピーしました。');
  } else if (/デッキ\/([^|]+) \| /.test(d.title)) {
    const commentId = Object.values(d.querySelectorAll('a[href*="commentId"]')).find(e => e.text === '投稿時コメント').href.match(/commentId=(\d+)/)[1];
    const deckData = getDeckData(d, new RegExp(/デッキ\/([^|]+) \| /));
    copyTextToClipboard(getDeckRecordText(false, deckData, commentId));
    alert('デッキデータをコピーしました。');
  } else {
    alert('デッキかデッキセットのページで実行してください。');
  }
})(document);
