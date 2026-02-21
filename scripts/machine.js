// Machine Id => Input Value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// Send Balance As Output
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    // console.log()
    return Number(balance);
}

// Machine Value => Set Balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// Machine ID: Hide All and Show ID
function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashout = document.getElementById('cashout')
    const history = document.getElementById('history')

    // Hide All
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    // Only Show Element with ID
    const selected =  document.getElementById(id);
    selected.classList.remove("hidden")

}