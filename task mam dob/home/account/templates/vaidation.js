
function validateForm() {

    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var dbirth = document.myform.birth.value;


    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const pregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


    if (!regex.test(email)) {
        document.getElementById("eerror").innerHTML = "please enter valid email";
        return false;
    }

    else {
        document.getElementById("eerror").innerHTML = "";
    }
    
    // password validation
    if (!pregex.test(password)) {
        document.getElementById("passerror").innerHTML = "Strong Password";
        return false;
    }
    else {
        document.getElementById("passerror").innerHTML = "";
    }

    if (dbirth=="") {
        document.getElementById("doberror").innerHTML = "please enter valid date of birth";
        return false;
    }

// dob validation

var userinput = dbirth;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("doberror").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    }

    if (age<=16){
        document.getElementById("doberror").innerHTML = "you are under age";  
        return false; 
    }
    else{
        document.getElementById("doberror").innerHTML = "";  

    }
};