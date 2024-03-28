/*:
@target MZ
@plugindesc パーティメンバー全員解除
@author symsystem
@url https://github.com/KURONAGARENO/renoreno1/blob/main/js/plugins/PartyActorRemoveAll.js

@help
「パーティメンバー全員解除」というプラグインコマンドを追加します。
ただし、先頭メンバーは解除しません。

@command PartyActorRemoveAll
@text パーティメンバー全員解除
@desc パーティメンバーを全員解除します
*/

(() => {
  "use strict";

  const _pluginName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];

  PluginManager.registerCommand(_pluginName, "PartyActorRemoveAll", () => {
    // 先頭以外のIDを列挙して削除
    const actorIdsWithoutHead = $gameParty._actors.slice(1);
    for (const id of actorIdsWithoutHead) {
      $gameParty.removeActor(id);
    }
  });
})();
