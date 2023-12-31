const calculate = document.querySelector('#calculate');
// const tips = document.querySelectorAll('.tip');
const placeholder = document.querySelector('#footer');


calculate.addEventListener('click', () => {
    
    const bill = document.getElementById('bill').value;
    const persons = document.getElementById('persons').value;
    const tip = document.getElementById('dropdown').value;
     if(persons === '' || persons < 1){
        placeholder.textContent = 'Please Select at least one person'
    }else if(bill === ''){
        placeholder.textContent = 'Please Enter A Valid Bill Amount.'
    }
     else {
    const calculatedValue = (bill * (tip/100)) / persons;
    const totalReturn = Math.round(calculatedValue);
    placeholder.textContent = `Each person should pay: NGN${totalReturn}.`;
    }
});