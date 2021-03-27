var subtotal = document.getElementById("subtotal");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var aPaid = document.getElementById("aPaid");
var change = document.getElementById("change");
var submit = document.getElementById("submit");
subtotal.min = 100;

subtotal.addEventListener("change", function(){
    if(parseInt(subtotal.value) >= 100 && parseInt(subtotal.value) <= 10000)
    {
        submit.style.backgroundColor = "green";
        aPaid.disabled = false;
        submit.disabled = false;
        tax.value = (subtotal.value * 0.12);
        total.value = parseInt(tax.value) + parseInt(subtotal.value);
        aPaid.min = total.value;
        aPaid.value = total.value;
        change.value = parseInt(aPaid.value) - parseInt(total.value);
    }
    
    else
    {
        submit.style.backgroundColor = "#8b0000";
        aPaid.disabled = true;
        submit.disabled = true;
    }
})

aPaid.addEventListener("change", function(){
    change.value = parseInt(aPaid.value) - parseInt(total.value);
    
    if(parseInt(change.value) >= 0)
    {
        submit.style.backgroundColor = "green";
        submit.disabled = false;
    }

    else
    {
        submit.style.backgroundColor = "#8b0000";
        submit.disabled = true;
    }
})

