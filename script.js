function calculatePercentage() {
    var displayValue = document.getElementsByName("display")[0].value;
    var result = eval(displayValue) / 100;
    document.getElementsByName("display")[0].value = result;
}