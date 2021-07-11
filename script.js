function compute() {
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;
    var interest = amount * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years)

    if(amount < "1") {
        alert("Please enter a positive number");
        document.getElementById("amount").focus();
        return;
    }

    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " +  "<span class='high'>" + amount + "</span>" + 
    ",<br> at an interest rate of " + "<span class='high'>" + rate + "</span>" +
    ".<br> You will receive an amount of " + "<span class='high'>" + interest + "</span>" +
    ",<br> in the year" + "<span class='high'>" + year + "</span>.";


}

function updaterate() {
var change_range = document.getElementById("rate").value;
document.getElementById("rate_display").innerText = change_range + " %";
}

