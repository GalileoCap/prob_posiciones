const N= 5;
var fin;

function check_options(n, already) {
	var check= [];
	var last= already[already.length-1];

	for (var j= 0; j < n; j++){
		if ([last-1, last, last+1].indexOf(j) == -1 && already.indexOf(j) == -1){
			check.push(j);
		}
	}

	console.log('OPTIONS', already, check);
	return check;
}

fin= 0;
for (var t= 0; t < N; t++){
	var options= check_options(N, [t]);
	for (var i of options) {
		var n_options= check_options(N, [t, i]);
		for (var j of n_options) {
			var n_n_options= check_options(N, [t, i, j]);
			for (var k of n_n_options) {
				var n_n_n_options= check_options(N, [t, i, j, k]);
				for (var l of n_n_n_options) {
					var n_n_n_n_options= check_options(N, [t, i, j, k, l]);

					if (n_n_n_n_options.length == 0) {
						fin++;
						console.log('WORKS');
					}
				}
			}
		}
	}
}

console.log('FIN', fin);
