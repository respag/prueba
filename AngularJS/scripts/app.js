"use strict";
var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/uno.html",
        controller:"ctrl"
    })
    .when("/dos", {
            templateUrl: "views/dos.html",
            controller: "dosCtrl"
        })
    .otherwise({ redirectTo: "/" });
});

app.controller("ctrl", function ($scope) {
    $scope.misDatos = { nombre: "Rubén", apellido: "Spagnuolo", alias: "respag" };
});

app.controller("dosCtrl", function ($scope) {

});

$(document).foundation();

$(document).ready(function () {
    $('#anchoPag').html($(window).innerWidth());
    $(window).resize(function () {
        $('#anchoPag').html($(window).innerWidth());
    })

    $('#altPag').html($(window).innerHeight());
    $(window).resize(function () {
        $('#altPag').html($(window).innerHeight());
    })
});
