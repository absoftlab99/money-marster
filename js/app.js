function fieldValues(id){
    const fieldValue = document.getElementById(id);
    const fieldValueString = fieldValue.value;
    const fieldValueNum = parseFloat(fieldValueString);
    return fieldValueNum;
}

document.getElementById('calculate').addEventListener('click', function(){
    const food = fieldValues('food');
    const rent = fieldValues('rent');
    const cloths = fieldValues('cloths');
    const income = fieldValues('income');

    const totalExpence = food + rent + cloths;
    if(totalExpence <= income){
        const valueTotal = document.getElementById('totoal-expence');
        valueTotal.innerText = totalExpence;

        const remainBalance = income - totalExpence;
        const remainBalanceText = document.getElementById('balance');
        remainBalanceText.innerText = remainBalance;
    }
    else{
        alert('You not abale to expence over the income ammounts')
    }
})

document.getElementById('save').addEventListener('click', function(){
    const saving = fieldValues('saving');
    const income = fieldValues('income');
    const saveAmmount = (income * saving) / 100;
    
    const saveAmmountShow = document.getElementById('saving-ammount');
    saveAmmountShow.innerText = saveAmmount;

    const remainingBalance = document.getElementById('balance');
    const currentRemainBalance = remainingBalance.innerText;

    const finalRemain = currentRemainBalance - saveAmmount;
    const finalRemainShow = document.getElementById('remaining-balance');
    finalRemainShow.innerText = finalRemain;

})