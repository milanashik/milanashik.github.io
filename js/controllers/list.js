// JavaScript source code
(function () {
    angular
	.module("resumeList")
	.controller("listCtrl", ListController);
    ListController.$inject = ['dataService'];
    function ListController(dataService) {
        var vm = this;
        vm.data = dataService;//get list from dataService by injecting
        vm.search = "";
    }
  
})();