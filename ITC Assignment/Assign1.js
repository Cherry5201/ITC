function convertFahrenheitToCelsius() {
    const f = document.getElementById("f").value;
    if (f !== "") {
        const c = (f - 32) * (5 / 9);
        document.getElementById("c").value = c.toFixed(2);
    }
}

function convertCelsiusToFahrenheit() {
    const c = document.getElementById("c").value;
    if (c !== "") {
        const f = (c * 1.8) + 32;
        document.getElementById("f").value = f.toFixed(2);
    }
}

function convertMetersToFeet() {
    const m = document.getElementById("m").value;
    if (m !== "") {
        const ft = m * 3.28084;
        document.getElementById("ft").value = ft.toFixed(2);
    }
}

function convertFeetToMeters() {
    const ft = document.getElementById("ft").value;
    if (ft !== "") {
        const m = ft * 0.3048;
        document.getElementById("m").value = m.toFixed(2);
    }
}
