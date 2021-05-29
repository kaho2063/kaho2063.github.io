
var getID_common = getID_common || {};
(function (global) {
  var _ = getID_common;
  _.getBattleId = (text) => {
    return text
      .replace('正面回避', '409003')
      .replace('回避攻撃', '100001')
      .replace('回避', '000001')
      .replace('軽い攻撃', '000002')
      .replace('軽い防御', '000003')
      .replace('攻撃と守備', '000004')
      .replace('集中攻撃', '000005')
      .replace('突き刺す', '100002')
      .replace('殴る', '100003')
      .replace('先攻', '100004')
      .replace('素早い足取り', '202008')
      .replace('素早い', '100005')
      .replace('内蔵拾い', '101001')
      .replace('ネズミの生存戦略', '101002')
      .replace('卑劣な一撃', '101003')
      .replace('喰らいつく', '101004')
      .replace('路地突破', '101005')
      .replace('走れ', '101006')
      .replace('先導指揮', '102001')
      .replace('遅い', '102002')
      .replace('奮闘', '102003')
      .replace('試してみるか', '102004')
      .replace('いい感じ', '102005')
      .replace('準備しましょう！', '603005')
      .replace('戦闘準備', '301005')
      .replace('準備', '102006')
      .replace('は爆ぜろ', '103001')
      .replace('じ人生一発', '103002')
      .replace('じゅ充電', '103003')
      .replace('た耐える', '103004')
      .replace('パパサパサ', '103005')
      .replace('せ切断', '103006')
      .replace('圧倒', '104001')
      .replace('お先', '104002')
      .replace('受けてみろ', '104003')
      .replace('狂乱', '104004')
      .replace('追跡', '104005')
      .replace('滅多斬り', '104006')
      .replace('フルボッコ', '200001')
      .replace('連続防御', '200002')
      .replace('連撃', '200003')
      .replace('速攻', '200004')
      .replace('エネルギー強打', '608010')
      .replace('大地強打', '608003')
      .replace('強打', '200005')
      .replace('新鮮に', '201001')
      .replace('食材の下拵え', '201002')
      .replace('何でも料理できるわよ', '201003')
      .replace('料理の支度', '201004')
      .replace('食材狩り', '201005')
      .replace('残酷', '201006')
      .replace('渇き', '201007')
      .replace('弾く', '202001')
      .replace('心構え', '202002')
      .replace('心構え', '202012')
      .replace('燃やす', '202003')
      .replace('ファイヤーバットを喰らえ', '202004')
      .replace('業務処理', '202005')
      .replace('静かな夜', '202006')
      .replace('連続攻撃', '202007')
      .replace('資料集め', '202009')
      .replace('牽制射撃', '602003')
      .replace('牽制', '300001')
      .replace('鋭利な一撃', '300002')
      .replace('後方攻撃', '300003')
      .replace('立ち向かう', '300004')
      .replace('炸裂', '300005')
      .replace('業務処理', '301001')
      .replace('静かな夜', '301002')
      .replace('囲い', '301003')
      .replace('あなたの盾', '301004')
      .replace('回転斬り', '301006')
      .replace('守護者', '301007')
      .replace('迅速な制圧', '608013')
      .replace('制圧', '301008')
      .replace('流し打ち', '301009')
      .replace('逆襲', '301010')
      .replace('治安維持', '301011')
      .replace('猛襲', '302001')
      .replace('待て！', '302002')
      .replace('ギャンブラー', '302003')
      .replace('思い切った判断', '302004')
      .replace('落ち着いて', '302005')
      .replace('迅速歩法', '302006')
      .replace('引き裂く', '302007')
      .replace('くどい！', '303001')
      .replace('乱闘', '303002')
      .replace('これで終わりだ', '303003')
      .replace('軽く', '303004')
      .replace('強烈な一打', '303005')
      .replace('破壊の一撃', '303006')
      .replace('乱入', '303007')
      .replace('潰す', '303008')
      .replace('肩慣らし', '303009')
      .replace('裁断', '401001')
      .replace('食事', '401002')
      .replace('素敵な糸が出ます', '401003')
      .replace('きっと美味しいです？', '401004')
      .replace('指令通り', '401005')
      .replace('奇怪な打撃', '401006')
      .replace('素敵な生地', '401007')
      .replace('一点狙い', '402001')
      .replace('凝視', '402002')
      .replace('無差別射撃', '402003')
      .replace('接近戦は嫌だ', '402004')
      .replace('近寄るな', '402005')
      .replace('発射', '402006')
      .replace('ヘッドショット', '402007')
      .replace('ターゲット捕捉', '402008')
      .replace('人生の終止符', '402009')
      .replace('影の向こう', '402010')
      .replace('明け方', '403001')
      .replace('黎明の閃光', '403002')
      .replace('蝶斬り', '403003')
      .replace('射出', '403004')
      .replace('茜さす剣', '403005')
      .replace('依頼処理', '403006')
      .replace('不吉な烙印', '611002')
      .replace('烙印', '403007')
      .replace('観測', '404001')
      .replace('チャンス到来', '404002')
      .replace('拘束の腕', '404003')
      .replace('メンドクサっ', '404004')
      .replace('バチバチ', '404005')
      .replace('電気ショック', '404006')
      .replace('構造分析', '404007')
      .replace('避けられぬ視線', '404008')
      .replace('幽かな記憶', '405001')
      .replace('苦痛の怒り', '405002')
      .replace('墨塗り', '406001')
      .replace('鋭い刃先', '406002')
      .replace('雲の障壁', '406003')
      .replace('快刀乱麻', '406004')
      .replace('飛び散る剣撃', '406005')
      .replace('静かな霧', '406006')
      .replace('裏路地の掟', '406007')
      .replace('後始末', '406008')
      .replace('黒い雲', '406009')
      .replace('重々しい音', '407001')
      .replace('忘れがたい旋律', '407002')
      .replace('猛練習', '407003')
      .replace('音楽の聖地', '407004')
      .replace('楽しい演奏', '407005')
      .replace('筋の音', '407006')
      .replace('赤い音符', '407007')
      .replace('貫く', '408001')
      .replace('閃光の槍', '408002')
      .replace('激突', '408003')
      .replace('荒れ槍', '408004')
      .replace('快速突き', '408005')
      .replace('後悔', '408006')
      .replace('ギラギラ燃える剣', '408012')
      .replace('羽の盾', '408013')
      .replace('鎖でも食らってみるか？', '409001')
      .replace('ちょろいなぁ', '409002')
      .replace('迂回的攻撃', '409004')
      .replace('今がチャンスだ', '409005')
      .replace('真っ向勝負', '409006')
      .replace('死ね', '409007')
      .replace('武器の手入れ', '410001')
      .replace('刺して割る', '410002')
      .replace('研磨', '410003')
      .replace('製錬', '410004')
      .replace('昼高夜卑', '411101')
      .replace('中継', '411102')
      .replace('盤面返し', '411103')
      .replace('手札混ぜ', '411104')
      .replace('桜花', '411105')
      .replace('死の境界', '501001')
      .replace('極剣', '501002')
      .replace('閃撃', '501003')
      .replace('飛剣', '501004')
      .replace('終わりなき戦い', '501005')
      .replace('懸命の死闘', '501006')
      .replace('危機克服', '501007')
      .replace('自動移動', '502001')
      .replace('操り人形', '502002')
      .replace('抑圧された肉体', '502003')
      .replace('どっしりした一撃', '502004')
      .replace('ギギギッ', '502005')
      .replace('ギシッ', '502006')
      .replace('人形の盾', '502007')
      .replace('鋭利な爪', '503001')
      .replace('サーカスの刃', '503002')
      .replace('ジャグリング', '503003')
      .replace('ワイルドカード', '503004')
      .replace('333..1973', '504001')
      .replace('ゴミ処理', '504002')
      .replace('裏路地掃除', '504003')
      .replace('家族のために', '504004')
      .replace('燃料抽出', '504005')
      .replace('裏路地の夜', '504006')
      .replace('指令の向かう処', '505001')
      .replace('指令遂行', '505002')
      .replace('処刑', '505003')
      .replace('指令の意味', '505004')
      .replace('信心', '505005')
      .replace('目標捕捉', '505006')
      .replace('遂行者の剣', '505007')
      .replace('空間切断', '506001')
      .replace('次元の狭間', '506002')
      .replace('波動', '506003')
      .replace('過充電', '506004')
      .replace('遡行', '506005')
      .replace('跳躍', '506006')
      .replace('エネルギー循環', '506007')
      .replace('深い息遣い', '507001')
      .replace('肉卸し', '507002')
      .replace('煙吹かし', '507003')
      .replace('煙の軌跡', '507004')
      .replace('隠し刃', '507005')
      .replace('煙管', '507006')
      .replace('感覚喪失', '507007')
      .replace('再び燃えたぎる一撃', '704008')
      .replace('燃えたぎる一撃', '508010')
      .replace('猛烈な突進', '508011')
      .replace('アンガジェマン', '511001')
      .replace('リポスト', '511002')
      .replace('フレッシュ', '511003')
      .replace('ムリネ', '511004')
      .replace('アン・ガルド', '511005')
      .replace('抜剣', '512001')
      .replace('刺法', '512002')
      .replace('肉斬', '512003')
      .replace('殺主', '512004')
      .replace('処断', '512005')
      .replace('骨断', '512006')
      .replace('踏みにじる', '513002')
      .replace('詰め込む', '513003')
      .replace('絶妙な瞬間', '513004')
      .replace('内臓溢し', '513005')
      .replace('感情の激動', '601001')
      .replace('内なる熱血', '601002')
      .replace('剣の流れ', '601003')
      .replace('堅固な守り', '601004')
      .replace('速剣', '601005')
      .replace('一網打尽', '601006')
      .replace('正面突破', '601007')
      .replace('押し寄せる愛', '606001')
      .replace('押し寄せる-愛', '606001')
      .replace('押し寄せる-一撃', '601014')
      .replace('押し寄せる一撃', '601014')
      .replace('押し寄せる', '601008')
      .replace('鉄山靠', '601009')
      .replace('疾風脚', '601010')
      .replace('上蹴り', '601011')
      .replace('鉄壁', '601012')
      .replace('全面戦争', '601013')
      .replace('装填', '602001')
      .replace('銃剣術', '602002')
      .replace('衝撃弾', '602004')
      .replace('奇襲射撃', '602005')
      .replace('火力集中', '602006')
      .replace('鉄の防御', '602007')
      .replace('アイアンナックル', '602008')
      .replace('即決審判', '602009')
      .replace('断罪', '602010')
      .replace('規律', '602011')
      .replace('階級と尊重', '602012')
      .replace('徹甲弾', '602020')
      .replace('氷結弾', '602021')
      .replace('火炎弾', '602022')
      .replace('エネルギー光線', '603001')
      .replace('衝撃吸収', '603002')
      .replace('チャンスです！', '603003')
      .replace('破壊連打', '603004')
      .replace('エネルギーシールド', '603006')
      .replace('エネルギー転換', '603007')
      .replace('薄気味悪い一撃', '603008')
      .replace('蒸気', '604001')
      .replace('防御命令', '604002')
      .replace('自動突撃', '604003')
      .replace('奇襲命令', '604004')
      .replace('歯車の導くままに', '604005')
      .replace('剔抉', '605001')
      .replace('刑罰', '605002')
      .replace('斬首', '605003')
      .replace('厳粛なる代行', '605004')
      .replace('殲滅', '605005')
      .replace('鎖縛り', '605006')
      .replace('多重斬り', '605007')
      .replace('多重切り', '605007')
      .replace('解禁Ⅰ', '605008')
      .replace('解禁-Ⅰ', '605008')
      .replace('解禁', '605008')
      .replace('焔龍拳', '606002')
      .replace('燃え上がる感情', '606003')
      .replace('火花の輪舞', '606004')
      .replace('激しい火花', '606005')
      .replace('一点突き', '606006')
      .replace('火炎一閃', '606007')
      .replace('内なる熱情', '606008')
      .replace('縦切り', '607003')
      .replace('縦斬り', '607003')
      .replace('突き', '607004')
      .replace('横切り', '607003')
      .replace('横斬り', '607005')
      .replace('気合い', '607006')
      .replace('サイの突進', '608006')
      .replace('突進', '607007')
      .replace('狂暴な刃', '608001')
      .replace('精神粉砕', '608002')
      .replace('処分', '608004')
      .replace('精神の鞭', '608005')
      .replace('集中射撃', '608007')
      .replace('一点射撃', '608008')
      .replace('戦闘射撃', '608009')
      .replace('重い衝突', '608011')
      .replace('連続切断', '608012')
      .replace('草食み', '608014')
      .replace('集中', '608015')
      .replace('複製', '608016')
      .replace('凶暴化', '608017')
      .replace('蒲牢', '610001')
      .replace('狴犴', '610002')
      .replace('椒図', '610003')
      .replace('贔屓', '610004')
      .replace('狻猊', '610006')
      .replace('螭吻', '610008')
      .replace('火龍斬', '610010')
      .replace('挟撃', '610011')
      .replace('ねじれた剣', '611001')
      .replace('施錠', '611003')
      .replace('不吉な力', '611004')
      .replace('意志の剣', '611005')
      .replace('意思の剣', '611005')
      .replace('盲目的な信念', '611006')
      .replace('都市の意志', '611007')
      .replace('都市の意思', '611007')
      .replace('隙の攻撃', '612001')
      .replace('短剣術 突き', '612002')
      .replace('フェイント', '612003')
      .replace('好機を掴む', '612004')
      .replace('弱点突き', '612005')
      .replace('スティレット', '612006')
      .replace('ハルペー', '613001')
      .replace('砂斬り', '613002')
      .replace('砂打ち', '613003')
      .replace('フルーシーヤ', '613004')
      .replace('ジャマダハル', '613005')
      .replace('ウアジェトの目', '613006')
      .replace('引換え', '614001')
      .replace('保険補償', '614002')
      .replace('等価交換', '614003')
      .replace('分散補償', '614004')
      .replace('仕上げの一撃', '614005')
      .replace('生命保険', '614006')
      .replace('使用テスト', '615001')
      .replace('煙の打撃', '615002')
      .replace('煙の強打', '615003')
      .replace('煙突き', '615004')
      .replace('即席改造', '615005')
      .replace('噴煙', '615006')
      .replace('くさび突き', '616001')
      .replace('横切る', '616002')
      .replace('完璧な打撃', '616003')
      .replace('押し出す', '616004')
      .replace('振り回し打ち', '616005')
      .replace('準備姿勢', '616006')
      .replace('一点突破', '616007')
      .replace('蛇剣術', '609001')
      .replace('紫の剣', '609002')
      .replace('蛇裂き', '609003')
      .replace('蛇の標的', '609004')
      .replace('裂傷', '609005')
      .replace('毒牙', '609006')
      .replace('振り下ろす', '609007')
      .replace('巨大な蛇の衝激', '609008')
      .replace('巨大な蛇の衝撃', '609008')
      .replace('決闘', '609009')
      .replace('蛇の障壁', '609010')
      .replace('受け流し', '609011')
      .replace('弱点看破', '609012')
      .replace('幻影乱舞', '609013')
      .replace('眞-卦', '701001')
      .replace('最後の攻撃', '701002')
      .replace('マッチング', '701003')
      .replace('卦擊', '701004')
      .replace('卦撃', '701004')
      .replace('卦脚', '701005')
      .replace('空の槍', '701006')
      .replace('迅速', '701007')
      .replace('強撃', '701008')
      .replace('残像', '701009')
      .replace('対峙', '701010')
      .replace('進軍', '701011')
      .replace('落ち着ける', '701012')
      .replace('青い軌跡', '704001')
      .replace('材料切り', '704002')
      .replace('止まらない歯車', '704003')
      .replace('怪しい契約書', '704004')
      .replace('楽しく遊んでみましょ～', '704005')
      .replace('クググッ', '704006')
      .replace('ｸググッ', '704006')
      .replace('ｸﾞググッ', '704006')
      .replace('グググッ', '704006')
      .replace('広がる血液', '704007')
      .replace('再び燃え上がる一撃', '704008')
      .replace('打ちのめす', '704009')
      .replace('合唱', '704010')
      .replace('アレグロ', '704011')
      .replace('ラルゴ', '704012')
      .replace('共鳴する鎌', '704013')
      .replace('乱舞', '704014')
      .replace('朱い爪', '704015')
      .replace('過速', '704016')
      .replace('威嚇', '704017')
      .replace('鶏の奇声', '704018')
      .replace('結束：強化', '705002')
      .replace('結束：連携', '705003')
      .replace('結束：守護', '705004')
      .replace('共鳴調節', '705010')
      .replace('クレッシェンド', '705011')
      .replace('大団円', '705012')
      .replace('押し寄せる安息の腕', '705013')
      .replace('永遠なる渇き', '705014')
      .replace('拘束の糸', '705015')
      .replace('漆黒の強撃', '705016')
      .replace('クライマックス～！！！', '705017')
      .replace('タックルマウント', '705018')
      .replace('絶頂の合唱', '705019')
      .replace('考えの歯車：洗礼', '705020')
      .replace('絶望の炎', '705021')
      .replace('炸裂する絶望', '705022')
      .replace('試食', '705031')
      .replace('影の襲撃', '705032')
      .replace('開幕式', '705033');
  };
  _.getPassiveId = (text) => {
    return text
      .replace('ギラギラ燃える剣', '240027')
      .replace('羽の盾', '240127')
      .replace('不安定な激情', '240227')
      .replace('熱血', '250001')
      .replace('臨戦無退', '250002')
      .replace('安如泰山', '250003')
      .replace('安不忘危', '250004')
      .replace('速度3', '10008')
      .replace('速度３', '10008')
      .replace('速度2', '10004')
      .replace('速度２', '10004')
      .replace('速度', '10001')
      .replace('生半可な勇気', '200004')
      .replace('ユンの勘', '200006')
      .replace('防御術', '200005')
      .replace('9級フィクサーの斬撃', '201001')
      .replace('9級フィクサーの打撃', '201002')
      .replace('9級フィクサーの貫通', '201003')
      .replace('電気ショック', '200007')
      .replace('鈎', '200010')
      .replace('即席料理', '210002')
      .replace('非常食', '210001')
      .replace('陰鬱な技量', '250012')
      .replace('技量', '210003')
      .replace('ファイヤーバット', '210006')
      .replace('傷口抉り', '211003')
      .replace('深呼吸', '220010')
      .replace('呼吸', '221001')
      .replace('呼吸t', '240003')
      .replace('冷静', '220001')
      .replace('ツヴァイの剣術1', '220002')
      .replace('ツヴァイの剣術2', '221003')
      .replace('あなたの盾', '220004')
      .replace('最低限の攻撃', '220003')
      .replace('ツヴァイの剣術3', '221004')
      .replace('最善の選択', '220005')
      .replace('マージン', '220006')
      .replace('こんなときこそ！', '220007')
      .replace('休憩', '220008')
      .replace('2段蹴り', '220009')
      .replace('鳩尾殴り', '221005')
      .replace('8級フィクサーの斬撃術', '221007')
      .replace('8級フィクサーの貫通術', '221009')
      .replace('7級フィクサーの斬撃術', '221010')
      .replace('7級フィクサーの貫通術', '221012')
      .replace('斧派の魂', '221013')
      .replace('双斧', '221014')
      .replace('急所打ち', '221006')
      .replace('追慕', '230001')
      .replace('集中', '230004')
      .replace('乱射', '230005')
      .replace('狙撃', '230006')
      .replace('守護者', '230007')
      .replace('暁の火', '230107')
      .replace('スティグマ工房の武器', '230207')
      .replace('孤独なフィクサー', '230008')
      .replace('ビリビリ', '230010')
      .replace('ピリピリ', '230011')
      .replace('不安定な充電', '230012')
      .replace('臨戦', '230018')
      .replace('黒雲道', '230118')
      .replace('抉り出し', '230019')
      .replace('深斬り', '230020')
      .replace('鋭利な一撃', '231001')
      .replace('ミャオミャオ～', '230021')
      .replace('即興乱打', '230121')
      .replace('キィ…キィ…?', '230022')
      .replace('ぶぶぅ！！ぶぅ！！', '230023')
      .replace('不屈', '230024')
      .replace('突き抜く', '230025')
      .replace('楔', '230124')
      .replace('突き抜き揺らし', '230026')
      .replace('速度2', '10004')
      .replace('赤い霧', '10005')
      .replace('過呼吸/疲弊', '240001')
      .replace('受け止める', '240101')
      .replace('死の目/脱力', '240301')
      .replace('死の目', '240301')
      .replace('絆/極限の疲労', '241301')
      .replace('一撃', '240002')
      .replace('加速', '240004')
      .replace('脳震盪', '240005')
      .replace('脳震', '240005')
      .replace('人形の骨', '240006')
      .replace('高難度の曲芸', '240308')
      .replace('獅子の拳', '240408')
      .replace('精神回収', '240015')
      .replace('体力回収', '240016')
      .replace('液化肉体', '241002')
      .replace('死体掃除', '241102')
      .replace('指令の加護', '240018')
      .replace('指令通覧', '240118')
      .replace('量子跳躍', '240019')
      .replace('屈折', '240020')
      .replace('反作用', '240021')
      .replace('次元切断', '240022')
      .replace('煙払い', '240023')
      .replace('煙中毒', '240024')
      .replace('煙覚醒', '240025')
      .replace('もくもく', '240026')
      .replace('弱点把握', '243001')
      .replace('情報把握', '243101')
      .replace('弱点看破', '243201')
      .replace('本国剣術', '243003')
      .replace('傷刻み', '243005')
      .replace('したたか', '243105')
      .replace('傷裂き', '243205')
      .replace('弾丸補給', '250005')
      .replace('命令', '250006')
      .replace('底力', '250106')
      .replace('勝気', '250007')
      .replace('初弾強化', '250008')
      .replace('追加補給', '250009')
      .replace('緊急蘇生', '250010')
      .replace('力場', '250011')
      .replace('充電高調1', '250110')
      .replace('充電高調2', '250210')
      .replace('内燃機関', '250014')
      .replace('肉の歯車', '250114')
      .replace('考えの歯車', '250214')
      .replace('解禁', '250115')
      .replace('激流', '250015')
      .replace('強圧', '250016')
      .replace('熟閑', '250017')
      .replace('火光衝天', '250018')
      .replace('燎原之火', '250020')
      .replace('抱火臥薪', '250021')
      .replace('伝説', '250122')
      .replace('反撃', '250222')
      .replace('最強', '250322')
      .replace('RRRスーツ', '250123')
      .replace('Rabbit施術', '251001')
      .replace('Rhino施術', '251002')
      .replace('Reindeer施術', '251003')
      .replace('指揮', '250023')
      .replace('始末', '250223')
      .replace('刺激圧縮筋力', '251101')
      .replace('生体充電同期化外皮', '251102')
      .replace('脳波充電集束角', '251103')
      .replace('ミョの腕前', '251024')
      .replace('マキシマムクラッシュ', '251025')
      .replace('生還', '251026')
      .replace('有り余る弾丸', '251201')
      .replace('慈悲', '252001')
      .replace('スティレット', '252002')
      .replace('隙を狙う', '252003')
      .replace('手品', '234001')
      .replace('抜き取り', '234002')
      .replace('蜃気楼', '253001')
      .replace('ホルスの目', '253002')
      .replace('砂嵐', '253003')
      .replace('保険補償', '254001')
      .replace('約款同意', '254002')
      .replace('生命保険', '254003')
      .replace('煙過多', '255001')
      .replace('過剰供給', '255002')
      .replace('即席修理', '255003')
      .replace('狂気', '255004')
      .replace('突撃姿勢', '256001')
      .replace('気を集める', '256002')
      .replace('準備姿勢', '256003')
      .replace('一点突破', '256004')
      .replace('確率変動者', '250027')
      .replace('体勢変更', '250127')
      .replace('龍生九子', '250036')
      .replace('覇下', '250336')
      .replace(',D@;Q7Y', '250051')
      .replace('伝令', '250151')
      .replace('昇華', '232001')
      .replace('傷口捻り', '232002')
      .replace('連帯', '233001')
      .replace('四卦', '260001')
      .replace('ハナは皆のために', '260002')
      .replace('皆はハナのために', '260003')
      .replace('12フィクサー', '260004')
      .replace('共鳴', '260005')
      .replace('過熱', '260006')
      .replace('煙熟達', '260007')
      .replace('本格的な料理', '260008')
      .replace('ブレーメン', '260009')
      .replace('ﾋヒィ～ン！キャンｷャン！ｺｯ！', '260009')
      .replace('華麗な公演', '260010')
      .replace('根性', '260011')
      .replace('操り糸', '260012')
      .replace('吸血鬼', '260013')
      .replace('契約', '260014')
      .replace('ヌオーヴォ生地', '1300001')
      .replace('ヌォーヴォ生地', '1300001');
  };
}(this)); //名前空間の終わり
