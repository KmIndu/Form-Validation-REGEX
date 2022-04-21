function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (!/^[a-zA-Z]+$/.test(name))
    {
        seterror("name", "*First_name: should be alphabetic");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (!/[0-9]{10}/.test(phone)) 
    {
        seterror("phone", "*Phone_no: should be digits with length 10");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (!/^[a-zA-Z0-9]+$/.test(name))
    {
        seterror("pass", "*Password: should be alphanumeric");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (!password.match(cpassword))
    {
        seterror("cpass", "*Conf-password should match with password");
        returnval = false;
    }

    return returnval;
}
