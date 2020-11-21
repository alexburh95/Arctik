'use strict'
let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 150,
    mobile: true,
    live: true,
})
wow.init()
const popularButton = document.querySelector(`.popular_button.story`)
const header_button = document.querySelector(`.story`)
const header_popup = document.querySelector(`.form_OS_header`)
const button = document.querySelector(`.nagrada_link`)
const forma = document.querySelector(`.form_OS`)
const krest = forma.querySelector('.close')

const krest2 = header_popup.querySelector(`.close`)

const hideMessage = (evt, message) => {
    if (!message.isEqualNode(evt.target)) {
        message.classList.add('hidden')
    }
}
button.addEventListener('click', evt => {
    evt.preventDefault()
    forma.classList.toggle(`hidden`)
    const knopka = forma.querySelector('input[type=submit]')
    const check = forma.querySelector(`input[type=checkbox]`)
    knopka.disabled = true
    check.addEventListener('click', () => {
        if (check.checked == false) {
            knopka.disabled = true
        }
        if (check.checked == true) {
            knopka.disabled = false
        }
    })
})
popularButton.addEventListener('click', evt => {
    console.log('cerf')
    evt.preventDefault()
    header_popup.classList.toggle(`hidden`)
    const knopka = header_popup.querySelector('input[type=submit]')
    const check = header_popup.querySelector(`input[type=checkbox]`)
    knopka.disabled = true
    check.addEventListener('click', () => {
        if (check.checked == false) {
            knopka.disabled = true
        }
        if (check.checked == true) {
            knopka.disabled = false
        }
    })
})
krest.addEventListener('click', () => {
    forma.classList.add(`hidden`)
})
krest2.addEventListener('click', () => {
    header_popup.classList.add(`hidden`)
})

const buttons = document.querySelectorAll(`.more`)

buttons.forEach(item => {

    item.addEventListener('click', () => {
        const selector = item.dataset.tab
        const content = document.getElementById(selector)
        const overlay = content.parentNode
        const opisanie = content.querySelector(`.opisanie`)
        const sostav = content.querySelector(`.sostav`)
   
        overlay.classList.remove(`hidden`)
        content.classList.remove('hidden')

        const close = content.querySelector('.close')
        const obolochka = content.querySelector('.obolochka')
        const nazvanie = content.querySelectorAll('.nazvanie')

        nazvanie.forEach(item => {
            const selector = item.dataset.tab
            item.addEventListener('click', () => {
                if (selector === 'sostav') {
                    obolochka.style = 'justify-content:flex-end'
                    opisanie.classList.add('hidden')
                    sostav.classList.remove('hidden')
                } else {
                    obolochka.style = 'justify-content:flex-start'
                    opisanie.classList.remove('hidden')
                    sostav.classList.add('hidden')
                }
            })
        })
        close.addEventListener('click', () => {
            content.classList.add('hidden')
            overlay.classList.add(`hidden`)
        })
        
        document.addEventListener(`click`, (evt) => {
            if (evt.target.isEqualNode(overlay)) {
                overlay.classList.add(`hidden`)
                content.classList.add(`hidden`)
            }
        })
    })
})




// window.onload = function(){
//     var popup = document.getElementById('popup');
//     var overlay = document.getElementById('backgroundOverlay');
//     var openButton = document.getElementById('openOverlay');
//     document.onclick = function(e){
//         if(e.target.id == 'backgroundOverlay'){
//             popup.style.display = 'none';
//             overlay.style.display = 'none';
//         }
//         if(e.target === openButton){
//              popup.style.display = 'block';
//             overlay.style.display = 'block';
//         }
//     };
// };