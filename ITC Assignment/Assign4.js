const payrollList = [];

function addEmployee() {
    const name = document.getElementById("employee").value.trim();
    const days = parseInt(document.getElementById("dwork").value);
    const rate = parseFloat(document.getElementById("drate").value);
    const deduction = parseFloat(document.getElementById("damount").value);

    if (name && days > 0 && rate > 0 && deduction >= 0) {
        const gross = days * rate;
        const net = gross - deduction;
        payrollList.push({ name, days, rate, gross, deduction, net });
        displayTable();
    } else {
        alert("Please fill out all fields correctly.");
    }
}

function displayTable() {
    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = "";
    payrollList.forEach((entry, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${idx + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.days}</td>
            <td>${entry.rate.toFixed(2)}</td>
            <td>${entry.gross.toFixed(2)}</td>
            <td>${entry.deduction.toFixed(2)}</td>
            <td>${entry.net.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function clearFields() {
    document.getElementById("employee").value = "";
    document.getElementById("dwork").value = "";
    document.getElementById("drate").value = "";
    document.getElementById("damount").value = "";
}

function deleteRecord() {
    const lineNo = parseInt(document.getElementById("delitem").value);
    if (lineNo > 0 && lineNo <= payrollList.length) {
        payrollList.splice(lineNo - 1, 1);
        displayTable();
    } else {
        alert("Invalid line number.");
    }
}

document.getElementById("btnadd").addEventListener("click", addEmployee);
document.getElementById("btnclear").addEventListener("click", clearFields);
document.getElementById("btndelete").addEventListener("click", deleteRecord);
