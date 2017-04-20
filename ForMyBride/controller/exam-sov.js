"use strict";

app.controller("ExamSOVCtrl", function($http, $location, sumTrueAnswer){
    var _public = this;

    _public.password = "TonyaIsTheBestGirlInTheWord1998";
    _public.question_id = "0";

    _public.GetStudents = function() {
        $http.get("http://localhost:3055/students")
            .success(function (result) {
                console.log("Get Success students", result);
                _public.Student = result;
            })
            .error(function (result) {
                console.log("Get Error students", result);
            });
    };
    _public.GetStudents();

    _public.addStudent = function(student){
        if(undefined == student){
            return;
        }
        $http.post("http://localhost:3055/students", student)
            .success(function(result){
                console.log("Success in student post", result);
                $location.path("/result");
            })
            .error(function(result){
               console.log("Error in student post", result);
            });
    };

    _public.DeleteStudents = function(){
      $http.delete("http://localhost:3055/students")
          .success(function(result){
              console.log("Success in student delete", result);
          })
          .error(function(result){
              console.log("Error in student delete", result);
          });
    };

    _public.flagDeleteResult = false;
    _public.ToDeleteResult = function(){
        if(_public.flagDeleteResult){
            _public.flagDeleteResult = false;
        }
        else{
            _public.flagDeleteResult = true;
        }
    };

    _public.CheckPassword = function(password){
        if(_public.password == password){
            _public.flagDeleteResult = false;
            _public.DeleteStudents();
            _public.GetStudents();
        }
        else{
            _public.flagDeleteResult = false;
        }
    };

    _public.GetResult = function(){
        return sumTrueAnswer.getSum();
    };

    _public.ToMain = function(){
        sumTrueAnswer.setSum(0);
        sumTrueAnswer.counter = 0;
        $location.path("/");
    };

    _public.ToExam = function(){
        sumTrueAnswer.setSum(0);
        sumTrueAnswer.counter = 0;
        _public.question_id="0";
        $location.path("/exam/"+_public.question_id);
    };
});
