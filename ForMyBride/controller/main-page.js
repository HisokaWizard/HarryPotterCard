"use strict";

app.controller("MainPageCtrl", function($location){
    var _public = this;

    _public.exam_id="0";

    _public.ToExam = function(){
        $location.path("/exam/"+_public.exam_id);
    };

    _public.ToNewsInfo = function(){
        $location.path("/news-info");
    };

    _public.ToLoveStory = function(){
        $location.path("/love-story");
    };

    _public.ToExamResult = function(){
        $location.path("/result");
    };

    _public.ToHarryPotter = function(){
        $location.path("/lib_HP");
    };
});