
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var hero_action;
        var hero = this.node.getChildByName("RH_01").getComponent(cc.Animation);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){
            var a = e.getDelta();
            var heroXY = this.node.getChildByName("RH_01");
            if (a.x < -1){
                hero_action = 1;
                if(hero_action != 1){
                    hero.play("m_left");
                    hero_action = 1;
                }else{
                    hero.play("b_left");
                    hero_action = 3;
                }
                
            }else if(a.x > 1){
                hero_action = 2;
                if(hero_action != 2){
                    hero.play("m_right");
                    hero_action = 2;
                }else{
                    hero.play("b_right");
                    hero_action = 3;
                }
            };
            var b = a;
            b.x = heroXY.x + b.x;
            b.y = heroXY.y + b.y;
            heroXY.setPosition(b);
        }.bind(this),this);
    
    },
    start () {

    },

    update (dt) {

    },
});
