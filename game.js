var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {

  var keyCode = e.keyCode
  console.log (e.keyCode)
  var inputValue = quantityInput.val();
 
  if (keyCode == 13) {    
   console.log (inputValue);
  }
  
  if (keyCode == 72) {	    
    console.log ("yay you wrote h");
  }