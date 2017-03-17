"use strict";

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "html/main-page.html"
        })
        .when('/news-info', {
            templateUrl: 'html/news-info.html'
        })
        .when('/love-story', {
            templateUrl: 'html/love-story.html'
        })
        .when('/exam/:id', {
            templateUrl: 'html/exam-sov-begin.html'
        })
        .when('/student', {
            templateUrl: 'html/form-after-exam.html'
        })
        .when('/result', {
            templateUrl: 'html/exam-result.html'
        })
        .when('/lib_HP', {
            templateUrl: 'html/library_HP.html'
        })
});

//app.run(function($rootScope){
//    $rootScope.$on('*', function (event, data) {
//        $rootScope.$broadcast(event, data);
//    });
//});
