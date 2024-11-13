function convertFahrenheitToCelsius() {
    let f = document.getElementById("f").value;
    if (f !== "") {
        let c = (f - 32) * (5 / 9);
        document.getElementById("c").value = c.toFixed(2);
    }
}

function convertCelsiusToFahrenheit() {
    let c = document.getElementById("c").value;
    if (c !== "") {
        let f = (c * 1.8) + 32;
        document.getElementById("f").value = f.toFixed(2);
    }
}

function convertMetersToFeet() {
    let m = document.getElementById("m").value;
    if (m !== "") {
        let ft = m * 3.28084;
        document.getElementById("ft").value = ft.toFixed(2);
    }
}

function convertFeetToMeters() {
    let ft = document.getElementById("ft").value;
    if (ft !== "") {
        let m = ft * 0.3048;
        document.getElementById("m").value = m.toFixed(2);
    }
}
