var PlayScreen = me.ScreenObject.extend({
  onDestroyEvent: function() {
    me.gamestat.reset("coins");
  },  
  onResetEvent: function() {
      me.levelDirector.loadLevel("playlevel");
      me.input.bindKey(me.input.KEY.LEFT, "left");
      me.input.bindKey(me.input.KEY.RIGHT, "right");
      me.input.bindKey(me.input.KEY.SPACE, "jump");
    }
  });

var TitleScreen = me.ScreenObject.extend({
  init: function() {
    this.parent(true);
    me.input.bindKey(me.input.KEY.SPACE, "jump", true);
  },
  onResetEvent: function() {
    if (this.title == null) {
      this.title = me.loader.getImage("titleScreen");
    }
  },
  update: function() {
    if (me.input.isKeyPressed('jump')) {
      me.state.change(me.state.USER);
    }
    return true;
  },
  draw: function(context){
    context.drawImage(this.title, 0, 0);
  }
});
var InstructionScreen = me.ScreenObject.extend({
  init: function() {
    this.parent(true);
    me.input.bindKey(me.input.KEY.SPACE, "jump", true);
  },
  onResetEvent: function() {
    if (this.title == null) {
      this.title = me.loader.getImage("instructions");
    }
  },
  update: function() {
    if (me.input.isKeyPressed('jump')) {
      me.state.change(me.state.PLAY);
    }
    return true;
  },
  draw: function(context){
    context.drawImage(this.title, 0, 0);
  }
});

var WinScreen = me.ScreenObject.extend({
  init: function() {
    this.parent(true);
    me.input.bindKey(me.input.KEY.SPACE, "jump", true);
  },
  onResetEvent: function() {
    if (this.title == null) {
      this.title = me.loader.getImage("winScreen");
    }
  },
  update: function() {
    if (me.input.isKeyPressed('jump')) {
      me.state.change(me.state.USER);
    }
    return true;
  },
  draw: function(context){
    context.drawImage(this.title, 0, 0);
  }
});
