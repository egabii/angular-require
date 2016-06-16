define(['angular'], function(angular){
	var HomeCtrl = function($scope) {
		$scope.vm = this;
		this.title = 'hola mundo';

		this.message = 'this is a message from Resistencia city';
	}

	HomeCtrl.$inject = ['$scope'];
	
	return HomeCtrl;
})