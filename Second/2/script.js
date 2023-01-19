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
	k = 0;
	for(let i = 0; i < 5; i++){
		for(let j = 0; j < 5; j ++){
			table.tBodies[0].children[i].cells[j].innerHTML = sortedRows[k];
			k++;
		}
	}
}