"use strict";
var app = angular.module("myApp",[]);

app.controller("ctrl", function ($scope) {
   // $scope.persona = { nombre: "Pepe" };
});

$(document).foundation();
$(document).ready(function () {
    $("#inicio").click(function () {
        $(this).toggleClass( "active");
    });
});