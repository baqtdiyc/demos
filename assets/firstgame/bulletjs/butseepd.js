
cc.Class({
    extends: cc.Component,

    properties: {
        seepd:1000,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       
    },

    start () {

    },

    update (dt) {
        this.node.y += this.seepd * dt;
    },
});
