var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {

  var keyCode = e.keyCode
  var inputValue = quantityInput.val();
  
  if (keyCode == 13) {
    console.log(inputValue.charCodeAt(3))
    

var arrValues = 'This is my string'.split('');
$.each(arrValues, function (intIndex, objValue) {
    alert(objValue);
})

  }
})