function doFV() {
    // INPUT
    let p = parseFloat(document.getElementById("principle").value);
    let confirmP = parseFloat(document.getElementById("confirmPrincipal").value);
    let r = parseFloat(document.getElementById("annualrate").value);
    let n = parseInt(document.getElementById("periods").value);
    let y = parseInt(document.getElementById("years").value);

    // VALIDATION
    if (isNaN(p) || isNaN(confirmP) || isNaN(r) || isNaN(n) || isNaN(y)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return; // Detener la ejecución si hay valores NaN
    }

    if (p !== confirmP) {
        alert('Los montos principales no coinciden. Por favor, inténtalo de nuevo.');
        return; // Detener la ejecución si no coinciden
    }

    // PROCESSING
    let output = computeFutureValue(p, r, n, y);
    // OUTPUT con formato
    document.getElementById("output").innerHTML = `$${output.toFixed(2)}`;
}

// compute future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.

function computeFutureValue(p, r, n, y) {
    let er = r / n; // effective rate per period
    let totalperiods = n * y;
    return p * Math.pow(1 + er, totalperiods);
}

// get current year
let thedate = new Date();
document.getElementById("theyear").innerHTML = thedate.getFullYear();

// Agregar el evento de clic al botón
document.getElementById("computeButton").onclick = doFV;
