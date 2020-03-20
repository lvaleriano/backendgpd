
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,

    ctor:function () {

        this._super();

        var size = cc.winSize;

        // CREAMOS EL BOTON Y LLAMAMOS A LA FUNCION PARA EFECTUAR EL EVENTO, PASANDO COMO PARAMETRO UNA FUNCION A IMPLEMENTAR
        var button = new ccui.Button(res.Button_png);
        button.loadTextures();
        button.setTitleText("GIRAR");
        button.setTitleColor(255, 125, 0, 0.7);
        button.setTitleFontSize(16);
        button.setTitleFontName("MarkerFelt.ttf");
        button.x = size.width / 6;
        button.y = size.height / 6;
        button.addTouchEventListener(this.buttonListener.bind(this));
        this.addChild(button);

        return true;
    },
    // FUNCION QUE IMPLEMENTA, QUE CREA EL SPRITE Y REALIZA EL GIRO CUANDO PRESIONAMOS EL BOTON
    buttonListener:function(sender,type)    {
        var size = cc.winSize;
        cc.spriteFrameCache.addSpriteFrames(res.gamble);
        var sprite = new cc.Sprite();
        sprite.initWithSpriteFrameName("2D.png");
        sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(sprite, 0);
        // ACCIÓN PARA REDUCIR EL SPRITE (CARTA)
        var actionScaleZoom = new cc.ScaleTo(0.5,0.5);
        sprite.runAction(actionScaleZoom);

        // ACCIÓN PARA VOLTEAR LA CARTA
        var actionScaleTurn = new cc.rotateBy(2, 0,180);
        sprite.runAction(cc.sequence(cc.delayTime(0.5),actionScaleTurn));
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
