const buttonPlus = document.querySelector(".card__button_plus");
const buttonMinus = document.querySelector(".card__button_minus");
const cardText = document.querySelector(".card__text")

const state = {
    value: 0

}


const updateUi = () => {
   buttonMinus.classList.toggle('card__button_disabled', state.value === 0)
   cardText.classList.toggle('card__text-red', state.value >= 10)
}

buttonPlus.addEventListener('click', () => {
    state.value++;
    cardText.textContent = `Value: ${state.value}`;
    updateUi()
})

buttonMinus.addEventListener('click', () => {
    if (state.value === 0) return
    state.value--
    cardText.textContent = `Value: ${state.value}`;
    updateUi()

})

updateUi()



// button.addEventListener('click', () => {
// button.classList.add('card__button_active');
//     if (button.classList.contains('card__button_active')) {
//         button.textContent = 'Enabled';
//     }
// })


