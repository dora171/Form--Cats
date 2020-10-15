/* 
 * #HW8 PartB
 * Dora Tomljenovic
 */

var nameInput = document.myform.name;
//var namePattern = nameInput.pattern; // returns 'undefined' when not supported
var namePattern = nameInput.pattern;
var button = document.getElementById("submit");
var errormsg= true;

window.onload = function(){
button.onclick = function (){
    var valid = true;
    var firstnameInput = document.myform.firstname;
    var lastnameInput = document.myform.lastname;
    var emailInput = document.myform.email;
    var addrInput = document.myform.addr;
    var cityInput = document.myform.city;
    var zipInput = document.myform.zip;
    var dateInput = document.myform.date;
    var genderInput = document.myform.gender;
    var phoneInput = document.myform.phone;
    var amountInput = document.myform.amount;
    var otherInput = document.myform.other;
    var commentsInput = document.myform.comments;
    
    
    validateInput(firstnameInput, "First name");
    validateInput(lastnameInput, "Last name");
    validateInput(emailInput, "Email");
    validateInput(addrInput, "Address");
    validateInput(dateInput, "Date");
    validateInput(cityInput, "City");
    validateInput(zipInput, "Zip");
    validateInput(genderInput, "Gender");
    validateInput(phoneInput, "Phone");
    validateInput(amountInput, "Amount");
    validateInput(otherInput, "Alert");
    validateInput(commentsInput, "Comments");
       
    return valid;
};
};
 
function setFeedback(errormsg, input){
    document.getElementById("feedback").style.display = "block";
    document.getElementById("errormsg").innerHTML += errormsg + "<br>";
    input.focus(); //selects the contents of a text field
};

function validateInput(input, name){
       
    if (input.value === '') { // check required
        setFeedback("The " + name + " field is required, please fill in the data.", input);
        valid = false;
    } else if (!(input.value.search(input.pattern) >= 0)){ // check validity
        input.value = "";
        setFeedback("The "+ name +" input does not match the expected pattern: " + input.pattern, input);
        valid = false;
    } 
    /* error message is not displaying for text Area*/
    var commentsInput= '';
     if (commentsInput.value === '') { // check required
        setFeedback("The " + name + " field is required, please fill in the data.", commentsInput);
        valid = false;
        
         } 
     }
