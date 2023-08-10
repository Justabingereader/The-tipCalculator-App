const calculate = document.querySelector('#calculate');
// const tips = document.querySelectorAll('.tip');
const placeholder = document.querySelector('#footer');


calculate.addEventListener('click', () => {

    const bill = document.getElementById('bill').value;
    const persons = document.getElementById('persons').value;
    const tip = document.getElementById('dropdown').value;
    const calculatedValue = (bill * (tip/100)) / persons;
    const totalReturn = calculatedValue.toFixed(2);
    placeholder.textContent = `Your Tip is: $${totalReturn}.`;
});