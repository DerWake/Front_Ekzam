

document.getElementById("check").addEventListener("click", check);


function check() {

let count = 0;
let right_answers = ['голубого','10','восток','2','зима'];
let answers = [];
answers.push(document.getElementById("answer1"));
answers.push(document.getElementById("answer2"));
answers.push(document.getElementById("answer3"));
answers.push(document.getElementById("answer4"));
answers.push(document.getElementById("answer5"));

for(let i = 0; i < 5; i++){
	if (answers[i].value == right_answers[i]){
		count++;
		answers[i].style.background = "rgba(0,0,0,0)";
	}
	else{
		answers[i].style.background = "rgba(255,0,0,0.8)";
	}
}
if(count != 0){
	document.getElementById("result").innerHTML = `Правильныйх ответов: ${count*20}%`;
}
else {
	document.getElementById("result").innerHTML = `Правильныйх ответов: 0%`;
}


}

