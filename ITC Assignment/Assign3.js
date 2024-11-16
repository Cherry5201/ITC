function calculate() {
    const nlimit = document.getElementById("nlimit").value;
    if (nlimit === "" || nlimit <= 0) {
        alert("Please enter a positive number!");
        return;
    }

    let factorial = 1, sum = 0, total = 0, average = 0;

    // Calculate factorial using a while loop
    let i = 1;
    while (i <= nlimit) {
        factorial *= i;
        i++;
    }

    // Calculate sum using a do-while loop
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= nlimit);

    // Calculate average using a for loop
    for (let k = 1; k <= nlimit; k++) {
        total += k;
    }
    average = total / nlimit;

    // Display results with animations
    document.getElementById("resultTitle").innerHTML = `Results for n = ${nlimit}:`;
    document.getElementById("factorialResult").innerHTML = `<strong>Factorial</strong>: ${factorial}`;
    document.getElementById("sumResult").innerHTML = `<strong>Sum</strong>: ${sum}`;
    document.getElementById("averageResult").innerHTML = `<strong>Average</strong>: ${average.toFixed(2)}`;

    const resultsDiv = document.getElementById("results");
    resultsDiv.classList.add("visible");
}
