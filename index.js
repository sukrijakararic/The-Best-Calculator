const getSum = () => {

    // We start but putting the necessary elements into variables so we can refrence them when needed

    // the first two variables store the VALUE of our input text field. NOT the text field itself
  const box1 = document.getElementById("box1").value;
  const box2 = document.getElementById("box2").value;

  // These four variables store the elements pertaining to the operator signs.
  const plus = document.getElementById("+");
  const minus = document.getElementById("-");
  const multiply = document.getElementById("*");
  const divide = document.getElementById("/");



  // This if statement checks which operator has been checked and executes the code block depending on the selected operator
  if (plus.checked) {
    /* this code block declares a variable of the arithmetic operation of our input fields. The VALUES declared above are currently strings. We use the built-in Number() function to convert 
    the strings to actual numbers. If we used value here instead of up there, we would only add the two strings. for ex. instead of (3+1=4), it would be ("3"+"1"="31"). If we didn't use value
    at all, then whatever we type in the input boxes would return [HTML input element][HTML input element]
    
    once the arithmetic operation has been stored in a variable, we then access the DOM to specify where the answer will print the sum variable. In our case, its the paragraph element with the 
    id of "operation" */
    const sum = Number(box1) + Number(box2);
    document.getElementById("operation").innerHTML = sum;
  } else if (minus.checked) {
    const sum = Number(box1) - Number(box2);
    document.getElementById("operation").innerHTML = sum;
  }
  else if (multiply.checked) {
    const sum = Number(box1) * Number(box2);
    document.getElementById("operation").innerHTML = sum;
  }
  else if (divide.checked) {
    const sum = Number(box1) / Number(box2);
    document.getElementById("operation").innerHTML = sum;
  }
};
