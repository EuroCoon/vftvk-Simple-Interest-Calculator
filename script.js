function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    if (principal < "1") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }


    document.getElementById("result").innerHTML =
        "If you deposit  <span class=\"rumena\">" + principal 
        + "</span>,<br\>at an interest rate of <span class=\"rumena\">" + rate 
        + "</span> %. <br\> You will receive an amount of <span class=\"rumena\">" 
        + interest + "</span>,<br\> in the year <span class=\"rumena\">" + year;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

