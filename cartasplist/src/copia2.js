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

        var button = new ccui.Button(res.Button_png);
        button.loadTextures();
        button.x = size.width / 6;
        button.y = size.height / 6;
        button.setTouchEnabled(true);
        button.addTouchEventListener(listener1, sprite);
        this.addChild(button);

        var listener1 = cc.EventListener.create({       //Creamos el evento o listener y el metodo
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) { // Parametros

                var locationInNode = sprite.convertToNodeSpace(touch.getLocation());
                var s = sprite.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    //  CREACION DEL EFECTO DEL GIRO DE LA CARTA
                    var actionScaleTurn = new cc.ScaleTo(1, 0, 1);
                    sprite.runAction(actionScaleTurn);
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

