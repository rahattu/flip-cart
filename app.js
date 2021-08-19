function updateCase(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + "-number");
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const totalCase = document.getElementById(product + "-mul");//update
    totalCase.innerText = caseNumber * price;
    calculateTotal();
}
//call function 
function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
//add case phone 
function calculateTotal() {

    const phoneTotal = 1278 * getInputValue("phone");
    const caseTotal = 59 * getInputValue("case");
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalprice = subTotal + tax;
    //update subtotal
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total-price").innerText = totalprice;
}
//phone about
document.getElementById("phone-plus").addEventListener("click", function () {
    updateCase("phone", 1234, true);

});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateCase("phone", 1234, false);

});


document.getElementById("case-plus").addEventListener("click", function () {
    updateCase("case", 54, true);

});
document.getElementById("case-minus").addEventListener("click", function () {

    updateCase("case", 54, false);
});
