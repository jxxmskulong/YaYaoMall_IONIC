angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$timeout) {
    $scope.myActiveSlide = 0;
    $scope.downRefresh=false;
  $scope.list=[{id:100,age:30,name:"张三"}];
   $scope.$watch(function(){
   //alert('sh')
        if(document.body.scrollTop+window.screen.height>document.body.scrollHeight)
        {
          //alert('sh')
       /*alert(document.body.scrollTop);
    alert(window.screen.height);
    alert(document.body.scrollHeight); */ 
          $scope.downRefresh=true;
          var obj={id:101,age:30,name:"李四"};
          //alert('bottom');
              $timeout(function(){
         //$scope.list.push(obj);
         $scope.downRefresh=false;
                
              },5000);
      }
    }

    );

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
.controller('PersonCtrl', function($scope,$ionicModal) {
  //alert($ionicModal.modal.show());
  var urlR=["tab-register.html","tab-login.html"];
  var a=3;
  var urli="";
  if(a>2){
    urli=urlR[0];
  }
  console.log(urli);
 $ionicModal.fromTemplateUrl(urli, {
    scope: $scope,
    animation: 'silde-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
     $scope.modal.show();
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
     alert('removed')
   });
});