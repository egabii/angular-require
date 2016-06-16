(function () {
    angular.module('ngLoadingSpinner', ['angularSpinner'])
    .directive('usSpinner', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            link: function (scope, elm, attrs) {
                $rootScope.spinnerActive = false;
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (loading) {
                    $rootScope.spinnerActive = loading;
                    if (loading) {
                        elm.removeClass('ng-hide');
                        angular.element(document.querySelector('.popup-overlay')).addClass('popup-overlay-visible');
                    } else {
                        elm.addClass('ng-hide');
                        angular.element(document.querySelector('.popup-overlay')).removeClass('popup-overlay-visible');
                    }
                });

                scope.$on("us-spinner-spin", function (event) {
                    elm.removeClass('ng-hide');
                    angular.element(document.querySelector('.popup-overlay')).addClass('popup-overlay-visible');
                });

                scope.$on("us-spinner-stop", function (event) {
                    elm.addClass('ng-hide');
                    angular.element(document.querySelector('.popup-overlay')).removeClass('popup-overlay-visible');
                });
            }
        };

    }]);
}).call(this);