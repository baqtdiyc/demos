// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        var a_start;
        this.node.on(cc.Node.EventType.TOUCH_START,function(e){
            a_start = e.getLocation();
            var v = cc.v2(a_start);
            
            console.log(v.x);

        }.bind(this),this);
        this.node.on(cc.Node.EventType.TOUCH_END,function(e){
            var a_end = e.getLocation();
            var v = cc.v2(a_end);
            v.sub(a_start,v);
            var leabl = this.node.getChildByName("sxzy").getComponent(cc.Label);
            console.log(leabl.string);
            if(Math.abs(v.x)>Math.abs(v.y)){
                if(v.x>0){
                    leabl.string ="右";
                }else if(v.x<0){
                    leabl.string = "左";
                };
            }else{
                if (v.y>0){
                    leabl.string = "上";
                }else if(v.y<0){
                    leabl.string ="下";
                }
            }
            console.log(v.x +","+ v.y);
        }.bind(this),this);
     },

    start () {
        
    },

    // update (dt) {},
});
