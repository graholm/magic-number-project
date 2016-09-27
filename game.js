var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {

  var keyCode = e.keyCode
  var inputValue = quantityInput.val();
 
  if (keyCode == 13) {	
    console.log ("H");
  } 
  if (keyCode == 81) {	
    console.log ("");
  }
  if (keyCode == 13) {	
    console.log (inputValue);
  }
  if (keyCode == 13) {	
    console.log (inputValue);
  }
})

