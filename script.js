function xcalc() {
		  var calculation = document.getElementById("calc").value;
		  calculation = calculation.replace(/pi/u,3.141592);
		  var resultat;
		  for (var div = calculation.split("/").length-1; div >= 0; div--) {
		   var resmul = 1; 
		   for (var mul = calculation.split("/")[div].split("*").length-1; mul >=0; mul--) {
			var resad = 0;
			  for (var ad = calculation.split("/")[div].split("*")[mul].split("+").length-1 ; ad >=0; ad--) {
				 resad += parseFloat(calculation.split("/")[div].split("*")[mul].split("+")[ad]);
			  }
			 resmul *= resad;
			}
		   if (resultat == undefined) { resultat = resmul } else { resultat = resmul / resultat }
		  }
		  if (isNaN(resultat)) { resultat = 0; }
		  document.getElementById("calc").value = resultat;
}
