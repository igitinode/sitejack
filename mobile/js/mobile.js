/**
 * 基础javascript函数
 * @authors jonnyF (fuhuixiang@jonnyf.com)
 * @date    2015-08-06 20:36:06
 * @version 1.0
 */

var sitejack = (function(window, document){
    "use strict";

    function _init(){

        //移动端上触发音乐播放事件
        document.getElementsByTagName('body')[0].addEventListener('touchstart', _loadMusic, false);
    }

    function _loadMusic(){
        document.getElementById('audio').load();
        _playMusic();
        document.getElementsByTagName('body')[0].removeEventListener('touchstart', _loadMusic, false);
        document.getElementById('music').addEventListener('click', _playMusic, false);
    }

    function _playMusic(){
        var audio = document.getElementById('audio'),
            music = document.getElementById('music');

        if(audio.paused){
            music.className = 'music-bg anim';
            audio.play();
        }else{
            music.className = 'music-bg';
            audio.pause();
        }
    }

    _init();
})(window, document);
