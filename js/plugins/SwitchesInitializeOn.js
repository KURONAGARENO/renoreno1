/*:
@target MZ
@plugindesc スイッチを初期ONにする
@author symsystem
@url https://github.com/KURONAGARENO/renoreno1/blob/main/js/plugins/SwitchesInitializeOn.js

@help
任意のスイッチを初期ONにします。デフォルトでは 0001 が ON になります

@param TargetSwitchIds
@type number[]
@default [1]
@desc 常時ONにしたいスイッチID。
0001 を常時ONにしたい場合は 1 と入力してください
*/

(() => {
  "use strict";

  const _pluginName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];
  const _parameters = PluginManager.parameters(_pluginName);
  const TargetSwitchIds = JSON.parse(_parameters["TargetSwitchIds"]);

  const _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function (mapId) {
    _Game_Map_setup.call(this, mapId);
    for (const id of TargetSwitchIds) {
      $gameSwitches.setValue(id, true);
    }
  };
})();
