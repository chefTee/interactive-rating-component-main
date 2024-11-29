const buttons = document.querySelectorAll('.rate-btn');
const submitBtn = document.querySelector('.submit-btn')
const submitButton = document.getElementById('submit');
const mainPage = document.getElementById('rating-page');
const thankYouPage = document.getElementById('thank-you-page');
const result = document.getElementById('result-content');
let selectedButton = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (selectedButton && selectedButton !== button) {
            selectedButton.style.backgroundColor = "";
            selectedButton.style.color = "";
            selectedButton.style.opacity = "";
            selectedButton.style.fontWeight = "";
        }

       

        button.style.backgroundColor = "#FFF";
        button.style.color = "#000";
        button.style.opacity = 1;
        button.style.fontWeight = 600;

        selectedButton = button;
        console.log(selectedButton);
    });
});

submitButton.addEventListener('click', () => {
    if(selectedButton === null){
        alert('You are yet to select a rating');
    }else{
        mainPage.classList.toggle('hide');
        thankYouPage.classList.toggle('hide');
        let resultValue = selectedButton.value;
        result.textContent = `You selected ${resultValue} out of 5`;
    }
})

