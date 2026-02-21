console.log("Login JS File is not working");

document.getElementById('login-btn').addEventListener('click', function(){
    // Step 1: Get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNUmber = numberInput.value;
    console.log(contactNUmber)

    // Step 2: Get the Pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin)

    // Step 3: Match Pin and Mobile Number
    if(contactNUmber=="01518962019" && pin == "1234"){
        // Step 3.1: If Pin and Mobile Number matched, directing user to homepage
        alert("Login Successful")
        // window.location.replace("home.html")
        window.location.assign("home.html")
    }else{
        // Step 3.2: Else Return to Home page
        alert("Login Failed")
        return;
    }

})
