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
function setBalance(){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
    
}