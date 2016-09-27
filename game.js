var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {
  console.log e.keyCode
  var keyCode = e.keyCode
  var inputValue = quantityInput.val();

  if (keyCode == 13) {	    
   console.log (inputValue);
  }
})