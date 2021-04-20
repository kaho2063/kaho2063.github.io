document.addEventListener('DOMContentLoaded', () => {
  const beforeText = document.getElementById('beforeText');
  const afterText = document.getElementById('afterText');
  const changeBattleText = document.getElementById('changeBattleText');
  changeBattleText.addEventListener('click', () => {
    let text = getID_common.getBattleId(beforeText.value);
    afterText.value = text
      .replace(/１/g, '1').replace(/２/g, '2').replace(/３/g, '3')
      .replace(/\(コスト\d\)/g, '')
      .replace(/[ 　・：]*(\d+)[ 　:：×]+([^枚\n]+)枚?\n*/g, '{{PopupBattle|$1|×$2}}')
      .replace(/^[ 　・：]*(\d+)\n*/gm, '{{PopupBattle|$1}}');
  });
  const changePassiveText = document.getElementById('changePassiveText');
  changePassiveText.addEventListener('click', () => {
    let text = getID_common.getPassiveId(beforeText.value);
    afterText.value = text
      .replace(/[（(][^)）]+[)）]/g, '')
      .replace(/[：:][0-9０-９]?コスト[0-9０-９]?/g, '')
      .replace(/・?([^、\n・]+)、?\n*/g, '{{PopupPassive|$1}}');
  });
  const changeDeckType = document.getElementById('changeDeckType');
  changeDeckType.addEventListener('click', () => {
    let text = beforeText.value
      .replace(/[\n・]+/g, '・');
    afterText.value = text
      .replace(/([^、・]+)/g, '{{LinkDeckType|$1}}');
  });
});
