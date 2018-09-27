
cc.Class({
    extends: cc.Component,

    properties: {
        _pool:null,
        audio:{
            type:cc.AudioClip,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.reuse();
    },

    start () {

    },
    unuse:function(){

    },
    reuse:function(){
        var aid = cc.audioEngine.play(this.audio,false,0.6);
    },
    onCollisionEnter:function(other,self){
        this.node.destroy();
    },
    // update (dt) {},
});
