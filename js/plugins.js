// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TorigoyaMZ_FrameTween","status":true,"description":"[鳥小屋.txt ベースプラグイン] Tweenアニメーション (v.2.2.1)","parameters":{}},
{"name":"PluginCommonBase","status":true,"description":"パラメータ解析を提供する共通基盤です","parameters":{}},
{"name":"LL_MenuScreenBase","status":true,"description":"メニュー画面立ち絵設定の共通ベースプラグインです。","parameters":{"menuPictures":"[\"{\\\"actorId\\\":\\\"1\\\",\\\"stateId\\\":\\\"\\\",\\\"switchId\\\":\\\"\\\",\\\"variableCase\\\":\\\"\\\",\\\"hpPercentage\\\":\\\"100\\\",\\\"imageName\\\":\\\"muraare\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\"}\",\"{\\\"actorId\\\":\\\"2\\\",\\\"stateId\\\":\\\"\\\",\\\"switchId\\\":\\\"\\\",\\\"variableCase\\\":\\\"\\\",\\\"hpPercentage\\\":\\\"100\\\",\\\"imageName\\\":\\\"murafi\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\"}\",\"{\\\"actorId\\\":\\\"3\\\",\\\"stateId\\\":\\\"\\\",\\\"switchId\\\":\\\"\\\",\\\"variableCase\\\":\\\"\\\",\\\"hpPercentage\\\":\\\"100\\\",\\\"imageName\\\":\\\"murakeru\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\"}\"]","onSpbPlugin":"","onSpbPluginEnable":"false"}},
{"name":"MultiTilemap","status":true,"description":"複数タイルマップイベント作成プラグイン","parameters":{"RegionDisplay":"false","RegionColor":"#FF000080"}},
{"name":"NRP_ChangeCharacterSpeed","status":false,"description":"v1.01 キャラクターの移動速度を細かく変更します。","parameters":{"DefaultAlwaysDash":"","PlayerSpeed":"","PlusSpeedDash":"","<BasicSpeedRate>":"","PlayerBasicSpeedRate":"200","EventBasicSpeedRate":"100","<Vehicles>":"","BoatSpeed":"","ShipSpeed":"","AirShipSpeed":""}},
{"name":"WindowBackImage","status":true,"description":"ウィンドウ背景画像指定プラグイン","parameters":{"windowImageInfo":"[\"{\\\"WindowClass\\\":\\\"Window_Message\\\",\\\"ImageFile\\\":\\\"tyairo\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"OffsetX\\\":\\\"0\\\",\\\"OffsetY\\\":\\\"0\\\",\\\"ScaleX\\\":\\\"100\\\",\\\"ScaleY\\\":\\\"100\\\",\\\"WindowShow\\\":\\\"false\\\",\\\"SwitchId\\\":\\\"10\\\"}\",\"{\\\"WindowClass\\\":\\\"Window_TitleCommand\\\",\\\"ImageFile\\\":\\\"dekaare\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"OffsetX\\\":\\\"0\\\",\\\"OffsetY\\\":\\\"0\\\",\\\"ScaleX\\\":\\\"100\\\",\\\"ScaleY\\\":\\\"100\\\",\\\"WindowShow\\\":\\\"false\\\",\\\"SwitchId\\\":\\\"0\\\"}\"]"}},
{"name":"WindowSkinSwitcher","status":true,"description":"ウィンドウスキン切り替えプラグイン","parameters":{"SkinInfoList":"[\"{\\\"SkinID\\\":\\\"1\\\",\\\"SkinFileName\\\":\\\"Window01\\\",\\\"BackOpacity\\\":\\\"192\\\"}\",\"{\\\"SkinID\\\":\\\"0\\\",\\\"SkinFileName\\\":\\\"Window\\\",\\\"BackOpacity\\\":\\\"192\\\"}\",\"{\\\"SkinID\\\":\\\"2\\\",\\\"SkinFileName\\\":\\\"Window02\\\",\\\"BackOpacity\\\":\\\"192\\\"}\"]"}},
{"name":"AdvanceTimeSystem","status":true,"description":"時間経過システム","parameters":{"TimezoneVariableID":"1","TimezoneMessageJaVariableID":"2","EnableAdvanceTimeSwitchID":"0","MorningSteps":"90","NoonSteps":"180","EveningSteps":"90","NightSteps":"120","LateNightSteps":"120","DawnSteps":"120","MorningTint":"[-34, -34, 0, 34]","NoonTint":"[0, 0, 0, 0]","EveningTint":"[68, -34, -34, 0]","NightTint":"[-68, -68, 0, 68]","LateNightTint":"[-136, -136, 0, 136]","DawnTint":"[-68, -68, 0, 68]","FadeFrame":"60"}},
{"name":"LL_StandingPicture","status":true,"description":"メッセージウィンドウ表示時に立ち絵を表示します。","parameters":{"sPictures":"[\"{\\\"id\\\":\\\"1\\\",\\\"imageName\\\":\\\"murafi\\\",\\\"origin\\\":\\\"0\\\",\\\"x\\\":\\\"464\\\",\\\"y\\\":\\\"96\\\",\\\"x2\\\":\\\"20\\\",\\\"y2\\\":\\\"96\\\",\\\"x3\\\":\\\"364\\\",\\\"y3\\\":\\\"96\\\",\\\"x4\\\":\\\"120\\\",\\\"y4\\\":\\\"96\\\",\\\"reverse\\\":\\\"1\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"opacity\\\":\\\"255\\\",\\\"blendMode\\\":\\\"0\\\"}\"]","picture1Settings":"","transition":"1","foreFront":"false","picture2Settings":"","transition2":"1","foreFront2":"false","picture3Settings":"","transition3":"1","foreFront3":"false","picture4Settings":"","transition4":"1","foreFront4":"false","focusToneAdjust":"-96","catheBootPicture":"true"}},
{"name":"Keke_AnyTimeFontChange","status":true,"description":"ゲーム中にパッとフォントを変更する","parameters":{"フォント登録リスト":"[\"{\\\"呼び出し名\\\":\\\"dot\\\",\\\"ファイル名\\\":\\\"k8x12S.ttf\\\"}\",\"{\\\"呼び出し名\\\":\\\"osi\\\",\\\"ファイル名\\\":\\\"Oshidashi-M-Gothic.otf\\\"}\",\"{\\\"呼び出し名\\\":\\\"nare\\\",\\\"ファイル名\\\":\\\"Zomzi.TTF\\\"}\"]"}},
{"name":"TorigoyaMZ_NotifyMessage","status":true,"description":"通知メッセージプラグイン (v.1.6.0)","parameters":{"base":"","baseAnimationDirection":"bottomToTop","baseAppearTime":"15","baseViewTime":"90","baseFontSize":"22","basePadding":"4","baseLeftPadding":"0","baseRightPadding":"30","baseItemPadding":"5","baseSound":"{\"name\":\"Item1\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","advanced":"","advancedVisibleSwitch":"0","advancedBackgroundColor1":"rgba(0, 0, 64, 0.6)","advancedBackgroundColor2":"rgba(0, 32, 64, 0)","advancedUiPaddingTop":"5","advancedUiPaddingBottom":"500","advancedAppendScenes":"[]","advancedKeepMessage":"false"}},
{"name":"TorigoyaMZ_NotifyMessage_AddonGetItem","status":true,"description":"通知メッセージアドオン: アイテム獲得表示 (v.1.2.0)","parameters":{"base":"","baseGainSingleMessage":"\\c[2]\\name\\c[0] を手に入れた！","baseGainMultiMessage":"\\c[2]\\name\\c[0] ×\\count を手に入れた！","baseGainMoneyMessage":"\\gold\\c[4]\\G\\c[0] を手に入れた！","baseGainMoneyIcon":"0","advanced":"","advancedSwitch":"0","advancedGainItemSound":"{\"overwrite\":\"false\",\"sound\":\"{\\\"name\\\":\\\"\\\",\\\"volume\\\":\\\"90\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\"}","advancedGainMoneySound":"{\"overwrite\":\"false\",\"sound\":\"{\\\"name\\\":\\\"\\\",\\\"volume\\\":\\\"90\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\"}"}},
{"name":"LL_MenuScreenCustom","status":true,"description":"メニュー画面レイアウトをカスタマイズします。","parameters":{"menuSettings":"","leftInputMode":"false","numVisibleRows":"1","maxCols":"2","currencyWindowPosition":"helpWindowRightBottom","backgroundImages":"[]","layoutSettings":"","actorNameLH":"0","actorNameX":"0","actorLevelLH":"1","actorLevelX":"0","actorIconLH":"2","actorIconX":"0","actorClassLH":"3","actorClassX":"0","actorGaugeLH":"4","actorGaugeX":"0","lvPadding":"84","gaugeWidth":"128","pictureSettings":"","showStandingPicture":"true","menuWindowPictureX":"0","menuWindowPictureY":"0","menuWindowPictureScale":"100","menuHelpSettings":"","menuHelpWindowEnable":"true","menuHelpTexts":"[\"{\\\"symbol\\\":\\\"アイテム\\\",\\\"helpText\\\":\\\"入手したアイテムを使用します。\\\"}\",\"{\\\"symbol\\\":\\\"スキル\\\",\\\"helpText\\\":\\\"習得したスキルを使用します。\\\"}\",\"{\\\"symbol\\\":\\\"装備\\\",\\\"helpText\\\":\\\"装備を変更します。\\\"}\",\"{\\\"symbol\\\":\\\"ステータス\\\",\\\"helpText\\\":\\\"ステータスを確認します。\\\"}\",\"{\\\"symbol\\\":\\\"並び替え\\\",\\\"helpText\\\":\\\"パーティの並び順を変更します。\\\"}\",\"{\\\"symbol\\\":\\\"オプション\\\",\\\"helpText\\\":\\\"オプション画面を開きます。\\\"}\",\"{\\\"symbol\\\":\\\"セーブ\\\",\\\"helpText\\\":\\\"セーブ画面を開きます。\\\"}\",\"{\\\"symbol\\\":\\\"ゲーム終了\\\",\\\"helpText\\\":\\\"ゲームを終了します。\\\"}\"]","leftBlockLabel":"時間帯：","leftBlockValue":"$gameVariables.value(2)","leftBlockAlign":"left","rightBlockLabel":"プレイ時間：","rightBlockValue":"$gameSystem.playtimeText()","rightBlockAlign":"right","rightBottomBlockLabel":"","rightBottomBlockValue":"","rightBottomBlockAlign":"left","leftBottomBlockLabel":"","leftBottomBlockValue":"","leftBottomBlockAlign":"left"}},
{"name":"TorigoyaMZ_CommonMenu","status":true,"description":"メニューからコモンイベント呼び出しプラグイン (v.1.2.0)","parameters":{"base":"","baseItems":"[\"{\\\"name\\\":\\\"仲間と会話\\\",\\\"commonEvent\\\":\\\"1\\\",\\\"switchId\\\":\\\"0\\\",\\\"visibility\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"name\\\":\\\"愛の営み\\\",\\\"commonEvent\\\":\\\"2\\\",\\\"switchId\\\":\\\"0\\\",\\\"visibility\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"name\\\":\\\"好感度\\\",\\\"commonEvent\\\":\\\"4\\\",\\\"switchId\\\":\\\"0\\\",\\\"visibility\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\"]"}},
{"name":"PartyActorRemoveAll","status":true,"description":"パーティメンバー全員解除","parameters":{}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"AlwaysDash":"false","CommandRemember":"false","TouchUi":"true","BgmVolume":"50","BgsVolume":"50","MeVolume":"50","SeVolume":"30","EraseAlwaysDash":"false","EraseCommandRemember":"false","EraseTouchUi":"false","EraseBgmVolume":"false","EraseBgsVolume":"false","EraseMeVolume":"false","EraseSeVolume":"false"}},
{"name":"TorigoyaMZ_SkillCutIn","status":true,"description":"スキル発動前カットイン表示プラグイン (v.1.4.0)","parameters":{"base":"","actorConfig":"[\"{\\\"base\\\":\\\"\\\",\\\"actorId\\\":\\\"1\\\",\\\"skillId\\\":\\\"1\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"katare\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"90\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"base\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"1\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"katkeru\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"90\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"<角度: 90>\\\"}\"]","enemyConfig":"[]","common":"","commonBackImage1":"CutIn_back1","commonBackImage2":"CutIn_back2","commonBorderImage":"CutIn_border","commonBorderBlendMode":"add","commonBorderSpeed":"30","commonSound":"{\"name\":\"Skill2\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","cutInLayer":"foreground","cutInOpenAndCloseTime":"25","cutInStopTime":"10","cutInBottomBaseSizeRatio":"0.25","cutInTopBaseSizeRatio":"0.5","commonActor":"","actorBackColor1":"#000033","actorBackColor2":"#6666ff","actorBackTone":"{\"red\":\"-128\",\"green\":\"-128\",\"blue\":\"128\"}","actorBorderTone":"{\"red\":\"0\",\"green\":\"0\",\"blue\":\"0\"}","commonEnemy":"","enemyBackColor1":"#330000","enemyBackColor2":"#ff6666","enemyBackTone":"{\"red\":\"128\",\"green\":\"-128\",\"blue\":\"-128\"}","enemyBorderTone":"{\"red\":\"0\",\"green\":\"0\",\"blue\":\"0\"}"}},
{"name":"SwitchesInitializeOn","status":true,"description":"スイッチを初期ONにする","parameters":{"TargetSwitchIds":"[1]"}},
{"name":"MessageAlignCenter","status":true,"description":"メッセージの中央揃えプラグイン","parameters":{"escapeCharacterCenter":"ac","escapeCharacterRight":"ar","escapeCharacterVCenter":"vc","escapeCharacterVBottom":"vb"}},
{"name":"BalloonPosition","status":true,"description":"フキダシ位置調整プラグイン","parameters":{"BalloonXNoImage":"0","BalloonYNoImage":"-10","BalloonXPlayer":"0","BalloonYPlayer":"0","BalloonXEvent":"0","BalloonYEvent":"0"}},
{"name":"FilterControllerMZ","status":true,"description":"FilterControllerMZ","parameters":{"decimalVariable":"true","displacementImage":"DisplacementMap","enabledAll-Settings":"","enabledAll-ShowInOptionMenu":"false","enabledAll-Text":"フィルター効果","enabledAll-DefaultValue":"true"}},
{"name":"TorigoyaMZ_EnemyHpBar","status":true,"description":"敵にHPバーを表示プラグイン (v.1.3.2)","parameters":{"base":"","basePosition":"top","basePosX":"0","basePosY":"0","customize":"","customizeCondition":"always","customizeGaugeWidth":"100","customizeGaugeHeight":"10","customizeDrawLabel":"true","customizeLabelWidth":"20","customizeLabelFontSize":"16","customizeValueFontSize":"20","customizeMaskHpValue":"?????"}},
{"name":"ButtonPicture","status":true,"description":"ピクチャをクリック可能にします。","parameters":{}},
{"name":"CursorApplicationToButtonPicture","status":true,"description":"ピクチャボタンにマウスカーソルが重なった時カーソルを表示します。","parameters":{"playCursorSe":"true","useCursorImage":"false","cursorImageName":"Cursor","isCursorXRight":"true","isCursorYDown":"true","borderWidth":"3","isBorderOffset":"true","borderColor":"{\"red\":\"255\",\"green\":\"255\",\"blue\":\"255\",\"alpha\":\"0.5\"}"}},
{"name":"Mano_CurrencyUnit","status":true,"description":"変数やアイテムを消費して購入できるショップが作れます。\r\n競合率・中ぐらい","parameters":{}}
];
