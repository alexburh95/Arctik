"use strict";
let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 150,
    mobile: true,
    live: true
})
wow.init();
const popularButton = document.querySelector(`.popular_button.story`);

const button = document.querySelector(`.nagrada_link`);
const forma = document.querySelector(`.form_OS`)
const krest = forma.querySelector('.close');

popularButton.addEventListener('click',(evt)=>{
   
    evt.preventDefault();
    forma.classList.toggle(`hidden`);
})

button.addEventListener('click',(evt)=>{
    evt.preventDefault();
    forma.classList.toggle(`hidden`);
})

krest.addEventListener('click',()=>{
    forma.classList.add(`hidden`);
})



const buttons = document.querySelectorAll(`.more`);

buttons.forEach(item => {
item.addEventListener('click',()=>{
    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const opisanie = content.querySelector(`.opisanie`);
    const sostav = content.querySelector(`.sostav`);
    
    console.log(content);

    content.classList.remove("hidden");

   const close= content.querySelector('.close')
const obolochka = content.querySelector('.obolochka');
const nazvanie = content.querySelectorAll('.nazvanie')

nazvanie.forEach(item=>{
   const selector = item.dataset.tab;
   item.addEventListener('click',()=>{
if(selector==='sostav'){
    obolochka.style='justify-content:flex-end';
    opisanie.classList.add("hidden");
    sostav.classList.remove("hidden")
}
else{
    obolochka.style='justify-content:flex-start';
    opisanie.classList.remove("hidden");
    sostav.classList.add("hidden")
}

   })
})
   close.addEventListener('click', ()=>{
content.classList.add("hidden");

   })

})

})