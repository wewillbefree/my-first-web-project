const buttonPlus = document.querySelector(".card__button_plus");
const buttonMinus = document.querySelector(".card__button_minus");
const cardText = document.querySelector(".card__text")

const state = {
    value: 0,
    min: 0,
    max: 20,
    step: 1
}


const updateUi = () => {
   buttonPlus.classList.toggle('card__button_disabled', state.value === state.max)
   buttonMinus.classList.toggle('card__button_disabled', state.value === state.min)
   cardText.classList.toggle('card__text-red', state.value >= 10)
   cardText.textContent = `Value: ${state.value}`;
}

const setValue = (newValue) => {
    state.value = Math.max(state.min, Math.min(state.max, newValue))
    updateUi()
}

buttonPlus.addEventListener('click', () => {
    setValue(state.value + state.step)
})

buttonMinus.addEventListener('click', () => {
     setValue(state.value - state.step)
})

updateUi()

