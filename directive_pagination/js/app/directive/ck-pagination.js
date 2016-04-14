testApp.directive('ckPagination', [function(){
	return{
		restrict: 'E',
		scope:{
			curPage: "=?",
			itemsCnt: "=",
			sizePerpage: "=?"
		},
		template: '<div class="fll"><ul class="pagination pagination-sm">'
					+ '<li ng-class="preDisabled"><a ng-click="firstPage()">'+'<<'+'</a></li>'
                    + '<li ng-class="preDisabled"><a ng-click="prevPage()">'+'<'+'</a></li>'
                    + '<li ng-class="curActive(pageNo)" ng-repeat="pageNo in pageNos" ng-if="showPage(pageNo)"><a ng-click="clickPage(pageNo)">{{pageNo}}</a></li>'
                    + '<li ng-class="nextDisabled"><a ng-click="nextPage()">'+'>'+'</a></li>'
                    + '<li ng-class="nextDisabled"><a ng-click="lastPage()">'+'>>'+'</a></li>'
                    + '</ul></div>'
                    + '<div class="ms-stdtext layout-paging" style="float:right">Displaying items  {{(curPage-1)*sizePerpage+1}}-{{(curPage*sizePerpage) > itemsCnt? itemsCnt: (curPage*sizePerpage)}} of {{itemsCnt}}</div>',
		link: function(scope, element, attr){
			scope.curPage = scope.curPage || 1;
			scope.sizePerpage = scope.sizePerpage || 5;
			scope.pageInterval = 5;

			scope.pageNos = [];
			scope.pageCnt = 0;
		
            scope.preDisabled = "";
            scope.nextDisabled = "";

			scope.$watch("itemsCnt", function (newValue, oldValue) {
                scope.pageNos =[];
                scope.pageCnt = parseInt((newValue + scope.sizePerpage - 1) / scope.sizePerpage);

                for (var i = 1; i <= scope.pageCnt; ++i) {
                    scope.pageNos.push(i);
                }
                scope.disablePreNext();

            });

            scope.showPage = function(pageNo){
            	if(scope.pageCnt - scope.curPage + 1 < scope.pageInterval){
            		return pageNo > scope.pageCnt - scope.pageInterval;
            	}

            	return pageNo >= scope.curPage && pageNo < scope.curPage + scope.pageInterval;
            };

            scope.firstPage = function(){
				scope.curPage = 1;
				scope.disablePreNext();	
            };

            scope.lastPage = function(){
            	scope.curPage = scope.pageCnt;
				scope.disablePreNext();	
            };

			scope.nextPage = function(){
				scope.curPage ++;
				scope.disablePreNext();			
			
			};
			scope.prevPage = function(){
				scope.curPage --;
				scope.disablePreNext();
			};
			scope.clickPage = function(pageNo){
				scope.curPage = pageNo;
				scope.disablePreNext();
			};

			scope.curActive = function(pageNo) {
                if (scope.curPage == pageNo) {
                    return "active";
                }
                return "";
            };
            scope.disablePreNext = function() {
                scope.preDisabled = scope.curPage == 1 ? "disabled" : "";
                scope.nextDisabled = scope.curPage == scope.pageCnt ? "disabled" : "";
            };

		}
	}
}]);
/*
1. controller先运行，link后运行，link和compile不兼容。compile改变dom,link事件的触发和绑定
2. ng-if vs ng-show： ng-if会移除dom，生成dom，而ng-show只是改变其display属性。
*/