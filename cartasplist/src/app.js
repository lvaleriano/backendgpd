
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        cc.spriteFrameCache.addSpriteFrames(res.gamble);
        var sprite = new cc.Sprite();
        sprite.initWithSpriteFrameName("2D.png");

        sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });

        this.addChild(sprite, 0);

        return true;
    }
});

    var FlipXTest = HelloWorldLayer.extend({
    title:function () {
        return "FlipX3D";
    },
    code:function () {
        return "a = cc.flipX3D(duration )";
    },
    getEffect:function(duration) {
        var a = cc.flipX3D.create(2);
        var delay = cc.delayTime.create(2);
        var r = a.reverse();
        return cc.sequence.create( a, delay, r );
    }
});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

