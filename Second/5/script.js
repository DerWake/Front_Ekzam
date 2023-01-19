function showTime(){
	time = document.getElementById("time").value;
	timer = document.getElementById("timer");
	timer.innerHTML = `${~~(time/60)}:${time%60}`
}

function startTimer(){
	time = document.getElementById("time");
	timer = document.getElementById("timer");
	setTimeout(() => { alert('Время истекло'); timer.innerHTML = "00:00"; time.value = 0; }, time.value*1000);



}