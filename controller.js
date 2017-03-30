(function() {
  'use strict';

  angular
    .module('reactdemo', [])
    .controller('reactDemoController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'reactdemo');

    // React.structureService = structureService;
    ReactDOM.render(
    React.createElement(Hello, {toWhat: $scope.reactdemo.modulescope.name}, null),
    document.getElementById('root'));
    
  }
}());
