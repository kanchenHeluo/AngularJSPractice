testApp.directive("ckDatepicker", function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: "=",
            dateOptions: '=?',
            minDate: '=?',
            maxDate: '=?',
            ngReadonly: '=?'
        },
        template: '<p class="input-group">'
            + '<input type="text" class="form-control" datepicker-popup="{{format}}" datepicker-options="dateOptions" min-date="minDate" max-date="maxDate"'
            + 'date-disabled="disabled(date, mode)" ng-model="ngModel" min-date="minDate"  is-open="opened"  close-text="Close" ng-readonly="ngReadonly"/>'
            + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>'
            + '</span></p>',
        controller: function($scope){
            $scope.today = function () {
                $scope.ngModel = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.ngModel = null;
            };
            $scope.disabled = function (date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

            $scope.dateOptions = $scope.dateOptions || {
                formatYear: 'yy',
                startingDay: 1,
                showWeeks: false
            };

            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[1];
        },
        link: function ($scope) {            

            $scope.minDate = $scope.minDate == undefined ? new Date("1/1/2015") : $scope.minDate ;
            $scope.maxDate = $scope.maxDate == undefined ? new Date("12/12/2015") : $scope.maxDate;
            $scope.ngReadonly = $scope.ngReadonly == undefined ? true : $scope.ngReadonly;           
            
        }
    }
});