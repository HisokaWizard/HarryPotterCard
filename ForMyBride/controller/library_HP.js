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

    _public.HPCS_flag = false;
    _public.HPCS = function(){
        if(_public.HPCS_flag){
            return _public.HPCS_flag = false;
        }
        else{
            return _public.HPCS_flag = true;
        }
    };

    _public.HPCA_flag = false;
    _public.HPCA = function(){
        if(_public.HPCA_flag){
            return _public.HPCA_flag = false;
        }
        else{
            return _public.HPCA_flag = true;
        }
    };

    _public.HPGF_flag = false;
    _public.HPGF = function(){
        if(_public.HPGF_flag){
            return _public.HPGF_flag = false;
        }
        else{
            return _public.HPGF_flag = true;
        }
    };

    _public.HPOP_flag = false;
    _public.HPOP = function(){
        if(_public.HPOP_flag){
            return _public.HPOP_flag = false;
        }
        else{
            return _public.HPOP_flag = true;
        }
    };

    _public.HPHBP_flag = false;
    _public.HPHBP = function(){
        if(_public.HPHBP_flag){
            return _public.HPHBP_flag = false;
        }
        else{
            return _public.HPHBP_flag = true;
        }
    };

    _public.HPDH_flag = false;
    _public.HPDH = function(){
        if(_public.HPDH_flag){
            return _public.HPDH_flag = false;
        }
        else{
            return _public.HPDH_flag = true;
        }
    };

    _public.FBWFT_flag = false;
    _public.FBWFT = function(){
        if(_public.FBWFT_flag){
            return _public.FBWFT_flag = false;
        }
        else{
            return _public.FBWFT_flag = true;
        }
    };

    _public.HPCC_flag = false;
    _public.HPCC = function(){
        if(_public.HPCC_flag){
            return _public.HPCC_flag = false;
        }
        else{
            return _public.HPCC_flag = true;
        }
    };

    _public.ToMain = function(){
        $location.path("/");
    };

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