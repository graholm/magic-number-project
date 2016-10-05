var valueseason = $("#dropDownId").val();


var quantityInput = $(".element-quantity-input")
quantityInput.keydown(function(e) {
  var keyCode = e.keyCode
  var inputValue = quantityInput.val();
  
  if (keyCode == 13) {
    
var arrValues = inputValue.split('');
var sum = 0;     
$.each(arrValues, function (intIndex, char) {
 sum = sum + char.charCodeAt(0); 
})

console.log (sum);
    
    sum = Math.round(sum /40)
    
    console.log (sum);
    
    document.write(sum)
  }
})