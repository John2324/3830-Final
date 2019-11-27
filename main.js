var jsApp = {
    onload: function() {
        if (!me.video.init('jsapp', 400, 300, true, 1.75)) {
            alert("html 5 canvas is not supported by this browser.");
            return;
        }
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(resources);
        me.state.change(me.state.LOADING);
        me.gamestat.add("coins", 0);
        me.gamestat.add("totalCoins", 20);
    },
    loaded: function() { 

        //Objects
        me.entityPool.add("player", PlayerEntity);
        me.entityPool.add("coin", CoinEntity);
        me.entityPool.add("EnemyEntity", EnemyEntity);
        me.entityPool.add("thorn", thornEntity);
        me.entityPool.add("thorn2", thornEntity2);

        //Screens
        me.state.set(me.state.PLAY, new PlayScreen());
        me.state.set(me.state.MENU, new TitleScreen());
        me.state.set(me.state.USER, new InstructionScreen());
        me.state.set(me.state.GAME_END, new WinScreen());
        me.state.transition("fade", "#000000", 250);
        me.state.change(me.state.MENU);
    }
};
window.onReady(function() {
    jsApp.onload();
});
