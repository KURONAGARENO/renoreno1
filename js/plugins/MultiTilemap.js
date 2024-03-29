//=============================================================================
// MultiTilemap.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// Copyright (c) 2024 symsystem
// This plugin is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.2.1 2024/03/21 領域表示機能をON/OFFできるように
// 1.2.0 2024/03/17 テストプレイ中はイベントの領域を表示
// 1.1.0 2024/03/17 \w\h -> ＠右＠下
// 1.0.0 2015/11/18 初版
// ----------------------------------------------------------------------------
// トリアコンタン
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
// ----------------------------------------------------------------------------
// fork: https://github.com/triacontane/RPGMakerMV/blob/mz_master/MultiTilemap.js
//=============================================================================

/*:
@plugindesc 複数タイルマップイベント作成プラグイン
@target MZ
@url https://github.com/KURONAGARENO/renoreno1/blob/main/js/plugins/MultiTilemap.js
@author トリアコンタン, symsystem
@version 1.2.0

@help 複数のタイルマップを一つのイベントで表現できるようになります。
本棚やベッドなどをイベントとして作成する際に有効です。

使用方法：イベントのメモに以下を記述してください。前後に文章があっても問題ありません
 ＠右2＠下2
 - 数字は半角。それ以外は全角
 - 右=右側に何タイル伸ばすか。下=下側に何タイル伸ばすか
   ＠右2の場合、自身のタイルを含めて幅3となります
 - ＠右2 だけ ＠下2 だけでも動作します

エディタ上でタイルマップを指定する際は、
「一番左上のタイルマップ」を指定してください。

このプラグインにはプラグインコマンドはありません。

利用規約：
 作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 についても制限はありません。
 このプラグインはもうあなたのものです。

@param RegionDisplay
@text 領域を表示するか
@type boolean
@default true
@desc
領域表示機能を有効にします。ただしテストプレイでない場合は設定を無視して無効になります。

@param RegionColor
@text 領域の色
@type string
@default #FF000080
@desc
領域の色をCSSカラー形式(#RRGGBBAA)で指定します。
*/
(function () {
  "use strict";

  const _pluginName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];
  const _parameters = PluginManager.parameters(_pluginName);
  const RegionDisplay = _parameters.RegionDisplay.toLowerCase() === "true";
  const RegionColor = _parameters.RegionColor;

  const _Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
  Sprite_Character.prototype.initMembers = function () {
    _Sprite_Character_initMembers.call(this);
    if (RegionDisplay && $gameTemp.isPlaytest()) {
      this._regionBitmap = null;
      this._regionSprite = null;
    }
  };

  const _Sprite_Character_updateBitmap = Sprite_Character.prototype.updateBitmap;
  Sprite_Character.prototype.updateBitmap = function () {
    _Sprite_Character_updateBitmap.call(this);
    if (RegionDisplay && $gameTemp.isPlaytest()) {
      if (this._character instanceof Game_Event && this.parent) {
        const event = this._character;
        // 設定した幅・高さを考慮した塗つぶし画像を用意してスプライトを作成
        const tileWidth = $gameMap.tileWidth();
        const tileHeight = $gameMap.tileHeight();
        const widthPixel = (1 + event._addSizeRight) * tileWidth;
        const heightPixel = (1 + event._addSizeDown) * tileHeight;
        if (!this._regionBitmap) {
          this._regionBitmap = new Bitmap(widthPixel, heightPixel);
          this._regionBitmap.fillAll(RegionColor);
        }
        if (!this._regionSprite) {
          this._regionSprite = new Sprite(this._regionBitmap);
        }
        // 表示はイベントの左上のピクセルから開始
        // マップスクロールに対応するため随時更新
        const displayX = $gameMap.displayX();
        const displayY = $gameMap.displayY();
        const relativeEventX = event.x - displayX;
        const relativeEventY = event.y - displayY;
        this._regionSprite.move(relativeEventX * tileWidth, relativeEventY * tileHeight);
        // イベントにスプライトが設定されているかどうかに関わらず描画したいので親であるマップ全体の子に追加する
        this.parent.addChild(this._regionSprite);
      }
    }
  };

  const _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function () {
    _Game_CharacterBase_initMembers.call(this);
    this._addSizeDown = 0;
    this._addSizeRight = 0;
  };

  const _Game_CharacterBase_pos = Game_CharacterBase.prototype.pos;
  Game_CharacterBase.prototype.pos = function (x, y) {
    if (this._addSizeDown === 0 && this._addSizeRight === 0) {
      // このプラグインの値を使う必要がない場合は既存の処理を尊重
      return _Game_CharacterBase_pos.call(this, x, y);
    } else {
      // プラグインで設定した範囲を考慮して判定を返す
      return this.x <= x && x <= this.x + this._addSizeRight && this.y <= y && y <= this.y + this._addSizeDown;
    }
  };

  const _Game_Event_refresh = Game_Event.prototype.refresh;
  Game_Event.prototype.refresh = function () {
    _Game_Event_refresh.call(this);
    const note = this.event().note;
    if (note) {
      const parseNote = (note, regexp) => {
        const m = note.toLowerCase().match(regexp);
        if (!m || m.length < 2) return 0;
        else return Number(m[1]);
      };
      this._addSizeDown = parseNote(note, /＠下(\d+)/);
      this._addSizeRight = parseNote(note, /＠右(\d+)/);
    }
  };
})();
