var sprite2;
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,


    ctor:function () {

        this._super();

        var size = cc.winSize;


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

        var actionScaleTurn = new cc.ScaleTo(1, 0, 1);
        sprite.runAction(actionScaleTurn);
    }


});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

