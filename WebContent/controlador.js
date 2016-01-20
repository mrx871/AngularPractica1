var modulo = angular.module('MyApp',[]);
modulo.controller('controlador', ['$scope', function($scope){
	
	$scope.lista = [{texto:'Prueba1', sel:false}, 
	                {texto:'Prueba2', sel:true}];
	
	$scope.ingresar = function() {
		$scope.lista.push ({texto:$scope.valor, sel:false});
		$scope.valor = "";
	}
	
	$scope.eliminar = function() {
		var size = $scope.lista.length();
		for (var i = 0; i < size; i++) {
			if ($scope.lista[i].sel) {
				$scope.lista.splice(i,1);
				i--;
				size--;
			}
		}
	}
	
}]);