'use strict';

$(document).ready(function(){
  // 初始化一个MuPlayer的实例。注意，我们默认使用了_mu全局命名空间。
  var player = new _mu.Player({
    // baseDir是必填初始化参数，指向刚才签出的MuPlayer静态资源目录
    baseDir: 'http://mu7.bdstatic.com/cms/app/muplayer/0_9_1/'
  });
  player.add('../media/earth.mp3').play();
})