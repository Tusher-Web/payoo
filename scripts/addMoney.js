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
        alert(`Add Money Success From
            ${bankAccount} at ${new Date()}
        `);
        setBalance(newBalance)

        // Step 1: Get the History Container
        const history = document.getElementById('history-container');

        // Step 2: Create New Div
        const newHistory = document.createElement('div');

        // Step 3: Inside new div add new html
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Add Money Success From ${bankAccount}, Account No ${accountNumber} at ${new Date()}
            </div>
        `;
        // Step 4: insert new div inside history container
        history.append(newHistory)
    } else{
        alert("Invalid Pin Number");
        return;
    }
})