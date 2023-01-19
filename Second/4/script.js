

document.getElementById("login").addEventListener("click", buildLogin);


function buildLogin() {

let pass = document.getElementById("password");
let username = document.getElementById("username")




if (pass.value.length >= 8 && pass.value.length <= 16 && username.value != "" ) {
	let result = "Успешный вход"
	pass.style.background = "rgba(0, 0, 0, 0)";
	document.getElementById("result").innerHTML = result;
}  else  {
	let result = "Пароль не соответсует требованиям"
	document.getElementById("result").innerHTML = result;
	pass.style.background = "rgba(255, 0, 0, 0.4)";
	pass.value = "";
}


}

