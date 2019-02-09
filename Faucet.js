//---------------\\
// CRYPTO FAUCET \\
//   BY DOUGLAS  \\
//---------------\\

var recievingAddress;
var sendingAddress;
var cooldown;
var amount;

function getAddress(){
    recievingAddress = document.getElementById("address");
    //Debugging
    console.log(recievingAddress);
}

function sendCoins(){
    
}

function sentAmount(){
    amount = Math.random() * 5 + 1;
}

getAddress();