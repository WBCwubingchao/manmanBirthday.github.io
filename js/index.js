var currentNum=1;
var nextNum=2;
var centerName=".pic0";
var rightName=".pic1";

$(document).ready(function(){
	initIndex();
	// 定时器调用函数，循环进行！！
	setInterval(setCurrentPosition, 2900);
	// setCurrentPosition();

});

function initIndex(){
	var screenWidth=window.screen.width-5;
	var screenHeight= window.screen.height-150;
	// alert(screenHeight);
	$(".swiper_picture").width(screenWidth);
	$(".swiper_picture").height(screenHeight);
}
function setCurrentPosition(){
	$(centerName).removeAttr('id','center_picture');
	$(rightName).removeAttr('id','right_picture');
	// 两张图像位置设置好
	centerName=".pic"+currentNum;
	// alert(centerName);
	// $(".pic0").addClass("center_picture");
	$(centerName).attr('id','center_picture');

	if (currentNum==9){
		nextNum=0;
	}
	else{
		nextNum=currentNum+1;
	}

	rightName=".pic"+nextNum;
	// alert(rightName);
	$(rightName).attr('id','right_picture');

	currentNum=nextNum;
}


function swiperPic(center_pic,right_pic){
	// 移动两张图像
	// center_pic.
	// right_pic.
}