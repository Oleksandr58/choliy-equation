function Result() {
	var a2 = document.querySelector('#three').value;
	var a3 = document.querySelector('#two').value;
	var a4 = document.querySelector('#one').value;
	var a5 = document.querySelector('#zero').value;
	var sol = document.querySelector('.answer');
		if (a2 == 0) {
			if (a3 == 0) {
				if (a4 == 0) {
					sol.innerHTML = "Don't joke with me, famous mathematician!";
					sol.innerHTML += " </br>";
					sol.innerHTML += "Change the condition!";
				}
				else {
					sol.innerHTML = "X = " + (-a5/a4);
				}
			}
			else {
				square_equation(a3, a4, a5, sol);
			}
		}
		else {
			cubic_equationt(a2, a3, a4, a5, sol);	
		}
}

function square_equation(a3, a4, a5, sol) {
  var d = a4 * a4 - 4 * a3 * a5;
	console.log(d);
	var string;
  if ( d < 0 ) {
    sol.innerHTML = "X = " + (-a4 / ( 2 * a3 )) + " + i (" + (Math.sqrt( - d ) / ( 2 * a3 )) + ")";
	sol.innerHTML += " </br> ";
	sol.innerHTML += "X = " + (-a4 / ( 2 * a3 )) + " - i (" + (Math.sqrt( - d ) / ( 2 * a3 )) + ")";
  } else {
      if ( d == 0 ) {
        sol.innerHTML = "X = " + (-a4 / ( 2 * a3 ) );
      } else {
        sol.innerHTML = "X = " + (-a4 / ( 2 * a3 ) - Math.sqrt( d ) / ( 2 * a3 ));
		sol.innerHTML += " </br> ";
		sol.innerHTML += "X = " + (-a4 / ( 2 * a3 ) + Math.sqrt( d ) / ( 2 * a3 )); 
      }
  }
}

function cubic_equationt(a2, a3, a4, a5, sol){ 
	if (a5 == 0){
			square_equation(a2, a3, a4, sol) ;
			sol.innerHTML += " </br> ";
			sol.innerHTML += "X = 0";
	}
	else {
		var p;
		var q;
		var S;
		var F;
		p = (3 * a2 * a4 - a3 * a3)/(3 * a2 * a2);
		q = (2 * a3 * a3 * a3 - 9 * a2 * a3 * a4 + 27 * a2 * a2 * a5)/(27 * a2 * a2 * a2);
		S = (q * q)/4 + (p * p * p)/27;
		if (S > 0) {
			sol.innerHTML = "X = " + (Math.cbrt(-q/2 + Math.sqrt((q * q)/4 + (p * p * p)/27)) + Math.cbrt(-q/2 - Math.sqrt((q * q)/4 + (p * p * p)/27)) - a3/(3 * a2));
			sol.innerHTML += " </br> ";
			sol.innerHTML += "X = " + (-(1/2) * (Math.cbrt(-q/2 + Math.sqrt((q * q)/4 + (p * p * p)/27)) + Math.cbrt(-q/2 - Math.sqrt((q * q)/4 + (p * p * p)/27)))  - a3/(3 * a2)) + " + i (" + ((Math.sqrt(3)/2) * (Math.cbrt(-q/2 + Math.sqrt((q * q)/4 + (p * p * p)/27)) - Math.cbrt(-q/2 - Math.sqrt((q * q)/4 + (p * p * p)/27)))) + ")";
			sol.innerHTML += " </br> ";
			sol.innerHTML += "X = " + (-(1/2) * (Math.cbrt(-q/2 + Math.sqrt((q * q)/4 + (p * p * p)/27)) + Math.cbrt(-q/2 - Math.sqrt((q * q)/4 + (p * p * p)/27)))  - a3/(3 * a2)) + " - i (" + ((Math.sqrt(3)/2) * (Math.cbrt(-q/2 + Math.sqrt((q * q)/4 + (p * p * p)/27)) - Math.cbrt(-q/2 - Math.sqrt((q * q)/4 + (p * p * p)/27)))) + ")";
		}
		else {
			if (S == 0) {
				sol.innerHTML = "X = " + (2 * Math.cbrt(-q/2) - a3/(3 * a2));
				sol.innerHTML += " </br> ";
				sol.innerHTML += "X = " + (- Math.cbrt(-q/2) - a3/(3 * a2));
			}
			else {
				if (q < 0) {
					F = Math.atan(Math.sqrt(-((q * q)/4 + (p * p * p)/27))/(-q/2));
				}
				else {
					if (q == 0) {
						F = Math.PI/2;
					}
					else {
						F = Math.atan(Math.sqrt(-((q * q)/4 + (p * p * p)/27))/(-q/2)) + Math.PI;
					}
				}
				sol.innerHTML = "X = " + (2 * Math.sqrt(-p/3) * Math.cos(F/3) - a3/(3 * a2));
				sol.innerHTML += " </br> ";
				sol.innerHTML += "X = " + (2 * Math.sqrt(-p/3) * Math.cos(F/3 + (2 * Math.PI)/3) - a3/(3 * a2));
				sol.innerHTML += " </br> ";
				sol.innerHTML += "X = " + (2 * Math.sqrt(-p/3) * Math.cos(F/3 + (4 * Math.PI)/3) - a3/(3 * a2));
			}
		}
	}
}