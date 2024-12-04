const payrollList = [];
const clearDialog = document.getElementById("clearDialog");
const deleteDialog = document.getElementById("deleteDialog");
const alertDialog = document.getElementById("alertDialog");
const alertMessage = document.getElementById("alertMessage");
const alertOk = document.getElementById("alertOk");
let deleteTarget = null;

function showAlert(message) {
    alertMessage.textContent = message;
    alertDialog.showModal();
}

alertOk.addEventListener("click", () => {
    alertDialog.close();
});

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
        updateTotals();  
    } else {
        showAlert("Please fill out all fields correctly.");
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

function updateTotals() {
    let totalGross = 0;
    let totalDeduction = 0;
    let totalNet = 0;

    payrollList.forEach(entry => {
        totalGross += entry.gross;
        totalDeduction += entry.deduction;
        totalNet += entry.net;
    });

    document.getElementById("totalGross").textContent = totalGross.toFixed(2);
    document.getElementById("totalDeduction").textContent = totalDeduction.toFixed(2);
    document.getElementById("totalNet").textContent = totalNet.toFixed(2);
}

function clearFields() {
    document.getElementById("employee").value = "";
    document.getElementById("dwork").value = "";
    document.getElementById("drate").value = "";
    document.getElementById("damount").value = "";
}

document.getElementById("btnadd").addEventListener("click", addEmployee);

document.getElementById("btnclear").addEventListener("click", () => {
    clearDialog.showModal();
});

document.getElementById("clearConfirm").addEventListener("click", () => {
    clearFields();
    clearDialog.close();
});

document.getElementById("clearCancel").addEventListener("click", () => {
    clearDialog.close();
});

document.getElementById("btndelete").addEventListener("click", () => {
    const lineNo = parseInt(document.getElementById("delitem").value);
    if (lineNo > 0 && lineNo <= payrollList.length) {
        deleteTarget = lineNo;
        document.getElementById("deleteMessage").textContent = `Are you sure you want to delete line ${lineNo}?`;
        deleteDialog.showModal();
    } else {
        showAlert("Invalid line number.");
    }
});

document.getElementById("deleteConfirm").addEventListener("click", () => {
    if (deleteTarget === "all") {
        payrollList.length = 0;
    } else {
        payrollList.splice(deleteTarget - 1, 1);
    }
    displayTable();
    updateTotals(); 
    deleteDialog.close();
});

document.getElementById("deleteCancel").addEventListener("click", () => {
    deleteDialog.close();
});

document.getElementById("btndeleteall").addEventListener("click", () => {
    if (payrollList.length === 0) {
        showAlert("No records to delete.");
        return;
    }
    deleteTarget = "all";
    document.getElementById("deleteMessage").textContent = "All records will be deleted. Are you sure?";
    deleteDialog.showModal();
});
