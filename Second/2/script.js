function load(arr){
	let k = 0;
	for(let i = 0; i < 5; i++){
		for(let j = 0; j < 5; j ++){
			table.tBodies[0].children[i].cells[j].innerHTML = arr[k];
			k++;
		}
	}
}

function random(){
	let randomRows = [];
	let k = 0;
	while(k < 25){
		randomRows[k] = Math.floor(Math.random() * 100).toString();
		k++;
	}
	return randomRows;

}

function sort() {
	let sortedRows = [];
	let k = 0;
	for(let i = 0; i < 5; i++){
		for(let j = 0; j < 5; j ++) {
			sortedRows[k] = table.rows[i].cells[j].innerHTML;
			k++;
		}
	}
	sortedRows.sort(function(a, b) {
  		return a - b;
	});
	load(sortedRows);
}



window.onload = (event) => {
  load(random());

};