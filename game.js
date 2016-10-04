var valueseason = $('#dropDownId:selected').val();
console.log (valueseason)



var quantityInput = $(".element-quantity-input")
quantityInput.keydown(function(e) {
  var keyCode = e.keyCode
  var inputValue = quantityInput.val();
  
  if (keyCode == 13) {
    console.log(inputValue.charCodeAt(1))
    
var arrValues = inputValue.split('');
var sum = 0;     
$.each(arrValues, function (intIndex, char) {
    console.log (char.charCodeAt(0));
 sum = sum + char.charCodeAt(0); 
})

console.log (sum);
    
    sum = sum /40
    console.log (sum);

  
  }
})