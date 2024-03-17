(function () {
  "use strict";

  var _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
  Spriteset_Base.prototype.createUpperLayer = function () {
    _Spriteset_Base_createUpperLayer.apply(this, arguments);
    if (this instanceof Spriteset_Map) {
      this.createDrawSprite();
    }
  };

  Spriteset_Map.prototype.createDrawSprite = function () {
    var sprite = new Sprite();
    sprite.bitmap = this.makeDrawBitmap();
    this.addChild(sprite);
  };

  Spriteset_Map.prototype.makeDrawBitmap = function () {
    var bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
    var context = bitmap._context;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(Graphics.boxWidth / 2, Graphics.boxHeight);
    context.lineTo(Graphics.boxWidth, Graphics.boxHeight / 2);
    context.lineTo(0, 0);
    context.stroke();
    return bitmap;
  };
})();
