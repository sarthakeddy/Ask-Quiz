let submit = document.getElementById("submit_answers");
submit.addEventListener("click", getScore);

$(document).ready(function() {
	$("sub_btn").click(function() {
		$(".ch").show();
		$(".ch").attr("disabled", true);
	});
});

function getScore() {
	console.log("Enter");
	document.getElementById(Result).innerHTML="";
	let inp = document.getElementByName('input');
	let score = 0, totalQues = 0;
	for(i=0;i<=e.length();i++) {
		if(e[i].type == "radio") {
			totalQues += 1;
			if(e[i].checked) {

			}
		}
	}
	totalQues /= 4;
	document.getElementById(Result).innerHTML+="The score of user is "+score+"/"+totalQues+"<br/>";
}