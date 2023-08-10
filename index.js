const calculate = document.querySelector('#calculate');
// const tips = document.querySelectorAll('.tip');
const placeholder = document.querySelector('#footer');


calculate.addEventListener('click', () => {
    
    const bill = document.getElementById('bill').value;
    const persons = document.getElementById('persons').value;
    const tip = document.getElementById('dropdown').value;
    if(isNaN(bill) || isNaN(persons)){
        placeholder.textContent = 'Please Enter A Valid Input.'
    } else if(persons = '' || persons < 1){
        placeholder.textContent = 'Please Select at least one person'
    }  else {
    const calculatedValue = (bill * (tip/100)) / persons;
    const totalReturn = calculatedValue.toFixed(2);
    placeholder.textContent = `Your Tip is: $${totalReturn}.`;
    }
});