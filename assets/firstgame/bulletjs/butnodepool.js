
cc.Class({
    extends: cc.Component,

    properties: {
        prefabs:cc.Prefab,
        seepd:0.5,
        audio:{
            type:cc.AudioClip,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(this.addnode,this.seepd);
        this._pool = new cc.NodePool('bultpool');
        
    },
    addnode:function(){
        var bullet = this._pool.get(this);
        if(!bullet){
            bullet = cc.instantiate(this.prefabs);
            bullet.addComponent('butseepd');
            bullet.addComponent('bultpool');
            bullet.getComponent('bultpool').audio = this.audio;
            bullet.x = this.node.getChildByName('RH_01').x;
            bullet.y = this.node.getChildByName('RH_01').y;
        }
        this.node.addChild(bullet,-1);
    },
    start () {

    },

    // update (dt) {},
});
