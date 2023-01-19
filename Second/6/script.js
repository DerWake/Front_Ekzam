let meter = document.getElementById('load')

const timer = ms => new Promise(res => setTimeout(res, ms))

async function min(){
	for(i = 100; i >= 0; i--){
		 meter.value -=1;
		 await timer(100);
	}
}

async function max(){
	for(i = 0; i <= 100; i++){
		 meter.value +=1;
		 await timer(100);
	}
}