//passwordgenerator

function generatePassword() {
    var input = document.getElementById("length");
    console.log(input.value);
    var length =  input.value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+‑/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("result").innerText = retVal

    return retVal;
}