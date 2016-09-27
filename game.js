var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {

  var keyCode = e.keyCode
  console.log (e.keyCode)
  var inputValue = quantityInput.val();
 

  if (keyCode == 72) {	
    console.log ("H");
  }
})
