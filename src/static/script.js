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
		console.log("Successful");
	else
		console.log("Fail");
	console.log(inp[0].type);
	let score = 0, totalQues = 0;
	for(i=0;i<inp.length;i++) {
		if(inp[i].type == "radio") {
			totalQues += 1;
			if(inp[i].checked) {
				score += 1;
			}
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

