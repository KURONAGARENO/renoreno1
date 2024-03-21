/*:
@target MZ
@plugindesc パーティメンバー全員解除
@author symsystem
@url 

@help
「パーティメンバー全員解除」というプラグインコマンドを追加します

@command RemoveActorAll
@text パーティメンバー全員解除
@desc パーティメンバーを全員解除します
*/

(() => {
  "use strict";

  const _pluginName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];

  PluginManager.registerCommand(_pluginName, "RemoveActorAll", () => {
    const actorIdsWithoutHead = $gameParty._actors.slice(1);
    for (const id of actorIdsWithoutHead) {
      $gameParty.removeActor(id);
    }
  });
})();
