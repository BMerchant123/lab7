function init(){
//add your javascrip between these two lines of code

//nameAlert function used to show an alert box with the contents of the text field when the button is clicked and changing the contents of the h2 text below the button to the text that the user inputted
  function nameAlert(){
	  
	//Outputing the alert box with the contents of the text field
	var userInput = document.getElementById('entryinput').value;
    alert("Bilal Merchant: "+ userInput);
	
	//changing the value of the h2 text below the button to display the text that the user inputs
	var alertOutput = document.getElementById('textoutput');
    alertOutput.innerHTML = userInput;
  }
  
  //Calling the nameAlert function when the button is clicked
  var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click',nameAlert);
}
window.addEventListener('load', init);