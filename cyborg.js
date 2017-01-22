var main = function(){
	
	var correct = 0;
	
	$("#begin-btn").click(function(){
		$(".datastream").css("visibility","visible");
		$("#box1").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn1").click(function(){
		$(".btn1.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box2").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn2").click(function(){
		$(".btn2.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box3").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn3").click(function(){
		$(".btn3.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box4").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn4").click(function(){
		$(".btn4.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box5").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn5").click(function(){
		$(".btn5.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box6").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn6").click(function(){
		$(".btn6.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box7").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn7").click(function(){
		$(".btn7.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box8").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn8").click(function(){
		$(".btn8.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box9").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn9").click(function(){
		$(".btn9.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#box10").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".btn10").click(function(){
		$(".btn10.correct").css("backgroundColor","green");
		$(".datastream").css("visibility","visible");
		$("#wait-box").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$("#continue-btn").click(function(){
		$("#end-box").append($("<p>You got " + correct + " out of 10 correct!</p>"));
		var result = getResult(correct);
		$("#end-box").append($("<p>" + result + "</p>"));
		
		$(".datastream").css("visibility","visible");
		$("#end-box").show();
		$("#master").animate({
			marginTop: "-=1000px",
		},2000,"swing",function(){
			$(".datastream").css("visibility","hidden");
		});
	});
	
	$(".correct").click(function(){
		correct = correct + 1;
		console.log(correct);
	});
};

function getResult(num){
	if(num <= 3) return "That's ok - it's good to be human!";
	else if(num <= 6) return "Looks like you've got a bit of circuitry in you!";
	else if (num <= 9) return "Are you able to talk to computers?";
	else return "Definitely cyborg.  47 6F 6F 64 6A 6F 62!";
};

$(document).ready(main);
