var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        cc.spriteFrameCache.addSpriteFrames(res.gamble);
        var sprite = new cc.Sprite();
        sprite.initWithSpriteFrameName("gamble_2.png");

        sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(sprite, 0);

        var listener1 = cc.EventListener.create({       //Creamos el evento y el metodo
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) { // Parametros
                var locationInNode = sprite.convertToNodeSpace(touch.getLocation());
                var s = sprite.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    sprite.setColor(cc.color.MAGENTA);
                    sprite.setRotationX(45);

                    // Creamos que la carta de una rotación
                    var sp1 = cc.RotateBy.create(2, 180);
                    var sp2 = cc.RotateBy.create(2, -180);
                    var mostrar = cc.Sequence.create(sp1, sp2);
                    sprite.runAction(mostrar);
                    return true;
                }
                return false;
            },
            onTouchEnded: function (touch, event) {
                sprite.setColor(cc.color.WHITE);
            }
        });
        cc.eventManager.addListener(listener1, sprite); // Añadimos al controlador de eventos

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

