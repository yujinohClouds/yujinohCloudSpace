function ValidateEmail(inputText){

    var emailformat="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    if(inputText.value.match(mailformat){
        alert("Valid Email Address");
    
    document.form1.text.focus();
    return true;

    }
    else{
        alert("Invalid Email Address");
        return false;
    }
}
console.log(inputText);