// ------------------------diposit--------------------------
document.getElementById('deposit-btn').addEventListener('click',function(){
const deposit=document.getElementById('input-deposit').value;
let depositAmount;
if (deposit.length==0 || deposit==''){
    alert('Please Enter Deposit Amount');
}else{
 depositAmount=parseFloat(deposit);
 const currentDeposit=document.getElementById('deposit-box').innerText;
const currentDepositAmount=parseFloat(currentDeposit);
const totalDeposit=depositAmount+currentDepositAmount;
document.getElementById('deposit-box').innerText=totalDeposit;
const currentBalance=document.getElementById('balance-box').innerText;
const currentBalanceAmount=parseFloat(currentBalance);
const totalBalance=currentBalanceAmount+depositAmount;
document.getElementById('balance-box').innerText=totalBalance;
document.getElementById('input-deposit').value='';
}})
// ---------------------------------------------------------

// *******************************************************************

// ----------------------withdraw---------------------------
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdraw=document.getElementById('input-withdraw').value;
    let withdrawAmount;
    if (withdraw.length==0 || withdraw==''){
        alert('Please Enter Deposit Amount');
    }else{
        withdrawAmount=parseFloat(withdraw);
        const currentWithdraw=parseFloat(document.getElementById('withdraw-box').innerText);
        const totalWithdraw=withdrawAmount+currentWithdraw;
        const currentBalance=parseFloat(document.getElementById('balance-box').innerText);
        if (currentBalance<withdrawAmount){
            alert('You have not enough money please deposit first');
        }else{
            document.getElementById('withdraw-box').innerText=totalWithdraw;
            document.getElementById('balance-box').innerText=currentBalance-withdrawAmount;
            document.getElementById('input-withdraw').value='';
        }
    }


})
// ---------------------------------------------------------
