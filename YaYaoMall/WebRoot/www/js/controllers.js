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
	$scope.haveImg=false;
	$scope.user={};
	 $scope.user.userimg='http://www.runoob.com/try/demo_source/venkman.jpg';
	 $scope.user.username='聂跃';
	 $scope.user.usersignature='快乐知足常乐！';
	 $scope.user.useremail='278076304@qq.com';
	 
	console.log($scope.user.userimg);
	
	function showModal(urli){
		$ionicModal.fromTemplateUrl(urli, {
		    scope: $scope,
		    animation: 'silde-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		    $scope.modal.show();
	});
	}
	//登录转注册
 $scope.LoginToRegister = function() {
	  var urli="tab-register.html";
	  console.log(urli); 
	  $scope.modal.remove();
	  showModal(urli);
  };
  //登录
  $scope.openLogin = function() {
	  if($scope.modal!=null||$scope.modal!=undefined){
		  console.log($scope.modal);
		  $scope.modal.remove();
		  
	  }
	 var urli="tab-login.html";
	  showModal(urli);
   };
   $scope.openUserInfo=function() {
	   var urli="tab-userinfo.html";
	   showModal(urli);
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
	  
	  $scope.checkText = function () {
		  console.log($scope.text);
	        if (document.querySelector('#email').value.length>5) {
	            //console.log("text is too long2");
	            document.querySelector('#email').value = document.querySelector('#email').value.substr(0, 5);
	        	$scope.emailerrorinfo="最多输入5位数";
	        }else{
	        	$scope.emailerrorinfo='';
	        }
	    };
	    //头像图片上传
	   userimgupload=function(file){
	    	//document.getElementById('#userimg').click();
	    	//console.log(file);
	    	if (file.files && file.files[0])  
	    	 {
	         var reader = new FileReader(); 
	      	reader.onload = function(e){
	      		console.log(e.target.result);
	      		$scope.user.userimg=e.target.result;
	      		$scope.$apply();
	    	}
	      	reader.readAsDataURL(file.files[0]);
	      }else{
	    	  $scope.user.userimg=file.value;
	      		$scope.$apply();
	    	  //console.log(file.value);
	    	  //prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>'; 
	      }
	    };
});