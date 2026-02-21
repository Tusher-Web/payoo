document.getElementById("add-money-btn").addEventListener("click", function(){
    // Step 1: Get Bank Account
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }

    // Step 2: Get Bank Account Number
    const accountNumber = getValueFromInput("add-money-number");
    if(accountNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    // Step 3: Get Amount
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount)

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert("Add Money Success");
        setBalance(newBalance)
    } else{
        alert("Invalid Pin Number");
        return;
    }
})