
cc.Class({
    extends: cc.Component,

    properties: {
        bg_map:[cc.Node],
        seepdx:3,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.bg_move(this.bg_map,this.seepdx);
    },
    bg_move:function(bg_list,seepd){
        for(var index = 0; index < bg_list.length; index++){
            bg_list[index].y -= seepd;
            if(bg_list[index].y <= 0 - bg_list[index].height){
                bg_list[index].y = 960;
            }
        }
    }
});
