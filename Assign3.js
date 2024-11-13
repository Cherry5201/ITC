function calculate() {
    var nlimit = document.getElementById("nlimit").value;
    var factorial = 1, sum = 0, average = 0;

    // 1. Calculate the nth factorial using a While Loop
    var i = 1;
    var factText = "Factorial of " + nlimit + " is : ";
    while (i <= nlimit) {
        factorial *= i;
        i++;
    }

    // 2. Calculate the sum of the first n numbers using a Do While Loop
    var j = 1;
    var sumText = "Sum of the first " + nlimit + " numbers is: ";
    do {
        sum += j;
        j++;
    } while (j <= nlimit);

    // 3. Calculate the average of the first n numbers using a For Loop
    var total = 0;
    var avgText = "Average of the first " + nlimit + " numbers is: ";
    for (var k = 1; k <= nlimit; k++) {
        total += k;
    }
    average = total / nlimit;

    // Display Results
    document.getElementById("resultTitle").innerHTML = "Results for n = " + nlimit + ":";
    document.getElementById("factorialResult").innerHTML = factText + factorial;
    document.getElementById("sumResult").innerHTML = sumText + sum;
    document.getElementById("averageResult").innerHTML = avgText + average.toFixed(2);
}
