var subtotal = document.getElementById("subtotal");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var paid = document.getElementById("paid");
var change = document.getElementById("change");
var pButton = document.getElementById("pButton");
subtotal.min = 100;

subtotal.addEventListener("change", function(){
    if(parseInt(subtotal.value) >= 100 && parseInt(subtotal.value) <= 10000)
    {
        pButton.style.backgroundColor = "green";
        paid.disabled = false;
        pButton.disabled = false;
        tax.value = (subtotal.value * 0.12);
        total.value = parseInt(tax.value) + parseInt(subtotal.value);
        paid.min = total.value;
        paid.value = total.value;
        change.value = parseInt(paid.value) - parseInt(total.value);
    }
    else
    {
        pButton.style.backgroundColor = rgb(192, 192, 192);
        paid.disabled = true;
        pButton.disabled = true;
    }
})

paid.addEventListener("change", function(){
    change.value = parseInt(paid.value) - parseInt(total.value);
    
    if(parseInt(change.value) >= 0)
    {
        pButton.style.backgroundColor = rgb(120, 173, 80)
        pButton.disabled = false;
    }
    else
    {
        pButton.style.backgroundColor = rgb(192, 192, 192);
        pButton.disabled = true;
    }
})