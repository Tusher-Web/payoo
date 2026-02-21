document.getElementById('cashout-btn').addEventListener('click', function(){
    // Step 1: Get the agent number and validate the number length
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Enter a Valid Number");
        return;
    }
    // console.log(cashoutNumber)

    // Step 2: Get the cash out amount, complete validation and convert to number
    const cashoutAmount =  getValueFromInput("cashout-amount");

    // Step 3:  Get the current balance, complete validation and convert to number
    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance)
    const currentBalance = getBalance();

    // Step 4: Calculate New Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance)
    if(newBalance < 0){
        alert("Please Enter a Valid Amount to Withdraw")
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cash out Successfully Completed")
        // document.getElementById("balance").innerText = newBalance;
        setBalance(newBalance)

        // Step 1: Get the History Container
        const history = document.getElementById('history-container');

        // Step 2: Create New Div
        const newHistory = document.createElement('div');

        // Step 3: Inside new div add new html
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Cash out ${cashoutAmount} Taka, Success to ${cashoutNumber} at ${new Date()}
            </div>
        `;
        // Step 4: insert new div inside history container
        history.append(newHistory)

    }else{
        alert("Please Enter a Valid Pin");
        return;
    }

})



// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // Step 1: Get the agent number and validate the number length
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNUmber = cashoutNumberInput.value;
//     console.log(cashoutNUmber)
//     if(cashoutNumber.length != 11){
//         alert("Invaild Agent Number");
//         return;
//     }


//     // Step 2: Get the cash out amount, complete validation and convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)


//     // Step 3:  Get the current balance, complete validation and convert to number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // Step 4: Calculate New Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     if(newBalance < 0){
//         alert("Please Enter a Valid Amount");
//         return;
//     }
//     console.log(newBalance)

//     // Step 5: Get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         alert("Cashout Successful")
//         console.log(newBalance)
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Wrong PIN Number");
//         return;
//     }

//     // Step 5.1: If true: show an alert and set the balance

//     // Step 5.2": Else: Show an error message and return to base
 
// })