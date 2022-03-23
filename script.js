//passwordgenerator

function generatePassword() {
    /* make the length equal to the the input with the id="length", not a static input like 10. This way it
        will update as the user interacts with the UI*/
    var length =  document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var symbols = document.getElementById("symbols").checked;
    var numbers = document.getElementById("numbers").checked;

    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+‑/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        let val = charset.charAt(Math.floor(Math.random() * n));
        if((!uppercase && isUpper(val)) || (!symbols && isSymbol(val)) || (!numbers && isNumber(val))){
            i--;
        }
        else{
            retVal += val;
        }
    }

    document.getElementById("result").innerText = retVal

    return retVal;
}

function isSymbol(sym){
    return /[~‑`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(sym);
   }

function isNumber(i) {
    return (i >= '0' && i <= '9');
}

function isUpper(str){
    return str == str.toUpperCase();
}

/*No need for the console print... this was also automatically calling the function everytime the page is opened.
You only want the function called when the button is pressed. That's why i added the onclick event to the generate
password button*/