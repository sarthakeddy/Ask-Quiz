// let submit = document.getElementById("sub_btn");
// submit.addEventListener("click", getScore);

$(document).ready(function() {
	console.log("Enter JQuery");
	$("#sub_btn").click(function() {
		console.log("Enter Clicked function");
		$(".ch").show();
		$(".ch").attr("disabled", true);
	});
});

function getScore() {
	console.log("Enter JS");
	document.getElementById('Result').innerHTML="";
	var inp = document.getElementsByTagName("input");
	if( inp.length > 0)
		console.log("Successful"+inp.length);
	else
		console.log("Fail");
	// console.log(inp[0].id);
	let score = 0, totalQues = 0, j=0;
	let ans="";
	for(i=0;i<inp.length;i++) {
		if(inp[i].type == "radio") {
			totalQues += 1;
			if(inp[i].checked) {
				ans = inp[i].value;
				// console.log(ans);
			}
		}
		if(inp[i].type == "button") {
			console.log(ans);
			console.log(inp[i].value);
			if(inp[i].value === ans) {
				score += 1;
				inp[i].style.backgroundColor = "green";
			}
			else
				inp[i].style.backgroundColor = "red";
			inp[i].style.color="white";
		}
	}
	totalQues /= 4;
	document.getElementById('Result').innerHTML+="The score of user is "+score+"/"+totalQues+"<br/>";
	$(document).ready(function() {
	console.log("Enter JQuery");
	$("#sub_btn").click(function() {
		console.log("Enter Clicked function");
		$(".ch").show();
		$(".ch").attr("disabled", true);
	});
});
}

