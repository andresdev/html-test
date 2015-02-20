angular.
module("app",[]).
controller("hola",PruebaController);

           
function message(){
    alert("Hola");
}
  
function PruebaController($scope) {
  $scope.mensaje="Hola Mundo";
}
