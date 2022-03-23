//passwordgenerator

function generatePassword() {
    /* make the length equal to the the input with the id="length", not a static input like 10. This way it
        will update as the user interacts with the UI*/
    var length =  document.getElementById("length").value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+‑/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("result").innerText = retVal

    return retVal;
}

/*No need for the console print... this was also automatically calling the function everytime the page is opened.
You only want the function called when the button is pressed. That's why i added the onclick event to the generate
password button*/