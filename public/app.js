angular.module('app', ['ngDialog'])
.config(function($locationProvider){
    $locationProvider.html5Mode(true)
})
.controller('ctrl', function($scope, ngDialog){
    $scope.list = [
        {
            title: "First item"
        },
        {
            title: "Second item"
        }
    ];

    $scope.showDialog1 = function($event){
        ngDialog.show({
            width: "960px",
            controller: 'dialog1Controller',
            templateUrl: '/public/dialogTemplates/dialog2content.html',
            locals: {}
        });
    };

    $scope.showDialog2 = function(){
        ngDialog.show({
            type: 'window',
            controller: 'dialog2Controller',
            templateUrl: '/public/dialogTemplates/dialog2content.html',
            locals: {}
        }).then(function(submittedData){
            console.log("Your name: " + submittedData.name + " | Your occupation: " + submittedData.occupation);
        });
    };

    $scope.showDialog3 = function(){
        ngDialog.show({
            type: 'sticky-top',
            controller: 'dialog2Controller',
            templateUrl: '/public/dialogTemplates/dialog2content.html',
            locals: {}
        }).then(function(submittedData){
            console.log("Your name: " + submittedData.name + " | Your occupation: " + submittedData.occupation);
        });
    };

    $scope.showDialog4 = function($event){
        ngDialog.show({
            type: 'full-screen',
            controller: 'dialog1Controller',
            templateUrl: '/public/dialogTemplates/dialog1content.html',
            locals: {}
        });
    };

    $scope.showDialog5 = function($event){
        ngDialog.show({
            type: 'slide-right',
            controller: 'dialog1Controller',
            templateUrl: '/public/dialogTemplates/dialog1content.html',
            locals: {}
        });
    };
})

angular.module('app')
.controller('dialog1Controller', function($scope, ngDialog){
    $scope.close = function(){
        ngDialog.cancel();
    };
})
.controller('dialog2Controller', function($scope, ngDialog){
    var user = $scope.user = {};
    $scope.submitDetails = function(){
        ngDialog.hide(user);
    };
});
