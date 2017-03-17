"use strict";

app.controller("LibraryCtrl", function($location){
    var _public = this;

    _public.HPPS_flag = false;
    _public.HPPS = function(){
        if(_public.HPPS_flag){
            return _public.HPPS_flag = false;
        }
        else{
            return _public.HPPS_flag = true;
        }
    };

    _public.GoToGidOnlineHPPS = function(){
        //$location.path("http://gidonline.club/2011/07/garri-potter-i-filosofskij-kamen/");

    };
});