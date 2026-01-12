const button = document.querySelector(".card__button");
const cardText = document.querySelector(".card__text")

let count = 0;

button.addEventListener('click', ()=> {
    count++;
    cardText.textContent = `Clicks: ${count}`;
    
})





// button.addEventListener('click', () => {
// button.classList.add('card__button_active');
//     if (button.classList.contains('card__button_active')) {
//         button.textContent = 'Enabled';
//     }
// })


