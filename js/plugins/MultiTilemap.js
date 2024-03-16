//=============================================================================
// MultiTilemap.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This plugin is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2015/11/18 初版
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc 複数タイルマップイベント作成プラグイン
 * @target MZ @url https://github.com/triacontane/RPGMakerMV/tree/mz_master @author トリアコンタン
 * @version 1.00 2015/11/03 初版
 *
 * @help 複数のタイルマップを一つのイベントで表現できるようになります。
 * 本棚やベッドなどをイベントとして作成する際に有効です。
 *
 * 使用方法：イベントのnoteを以下の通り指定してください。
 *  \w2\h2 (w:横のタイル数 h:縦のタイル数)
 * エディタ上でタイルマップを指定する際は、
 * 「一番左上のタイルマップ」を指定してください。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */
(function () {
  // 既存のオブジェクトに独自プロパティを追加するためnon use strict
  // "use strict";

  // if ($gameTemp.isPlaytest()) {
  //   var i = 0;
  // }

  // const _Sprite_Character_setFrame = Sprite_Character.prototype.setFrame;
  // Sprite_Character.prototype.setFrame = function (x, y, width, height) {
  //   if (
  //     this._character._addSizeUp === 0 &&
  //     this._character._addSizeDown === 0 &&
  //     this._character._addSizeLeft === 0 &&
  //     this._character._addSizeRight === 0
  //   ) {
  //     // このプラグインの値を使う必要がない場合は既存の処理を尊重
  //     _Sprite_Character_setFrame.call(this, x, y, width, height);
  //   } else {
  //     _Sprite_Character_setFrame.call(this, x, y, width * 2, height);
  //   }
  // };

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
      return this.x <= x && x <= this.x + this._addSizeRight && this.y - this._addSizeDown <= y && y <= this.y;
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
      this._addSizeDown = parseNote(note, /@下(\d+)/);
      this._addSizeRight = parseNote(note, /@右(\d+)/);
    }
  };
})();
