angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$interval) {
    $scope.myActiveSlide = 0;
    $scope.downRefresh=false;
  $scope.list=[{id:100,age:30,name:"张三"},{},{}];
	  $scope.downRefresh=true;
	  var setInter=$interval(function(){
		  if($scope.list.length<8){  
	          var obj=[{id:101,age:30,name:"李四"},{},{},{}];
	          console.log(obj);
	        $scope.list.push(obj);
		  }else{
	        	$scope.downRefresh=false;
	        	console.log("没有更多了");
	        	//clearInterval(setInter);
	        	$interval.cancel(setInter);
	        }
	         //$scope.downRefresh=false;
	  },2000);
	
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
    
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('CatCtrl', function($scope) {
 $scope.aaa="sdaf";
 alert("dfdf");
})
.controller('PersonCtrl', function($scope,$ionicModal,$timeout) {
  //alert($ionicModal.modal.show());
  var urlR=["tab-register.html","tab-login.html"];
  var a=3;
  var urli="";
  if(a>2){
    urli=urlR[1];
  }
  console.log(urli);
 $scope.LoginToRegister = function() {
	  urli=urlR[0];
	  console.log(urli); 
	  $scope.modal.remove();
	  $ionicModal.fromTemplateUrl(urli, {
		    scope: $scope,
		    animation: 'silde-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		    $scope.modal.show();
	});
  };
  $scope.openModal = function() {
	  if($scope.modal!=null||$scope.modal!=undefined){
		  console.log($scope.modal);
		  $scope.modal.remove();
		  
	  }
	  urli=urlR[1];
	  $ionicModal.fromTemplateUrl(urli, {
		    scope: $scope,
		    animation: 'silde-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		    $scope.modal.show();
		  });
   };
  $scope.closeModal = function() {
     $scope.modal.hide();
   };

   //当我们用完模型时，清除它！
   $scope.$on('$destroy', function() {
     $scope.modal.remove();
   });
   // 当隐藏模型时执行动作
   $scope.$on('modal.hide', function() {
     // 执行动作
     //$scope.openModal();
     alert('dsf')
   });
   // 当移动模型时执行动作
   $scope.$on('modal.removed', function() {
     // 执行动作
     //alert('removed')
   });
   
   $scope.doRefresh = function() {  
	   $scope.items = ['Item 1', 'Item 2', 'Item 3']; 
	    console.log('Refreshing!');  
	    $timeout( function() {  
	      //simulate async response  
	      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);  
	      console.log($scope.items);
	      //Stop the ion-refresher from spinning  
	      $scope.$broadcast('scroll.refreshComplete');  
	      
	    }, 1000);  
	        
	  };  
});