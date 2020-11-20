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
const header_button = document.querySelector(`.header_link`);
const header_popup = document.querySelector(`.form_OS_header`);
const button = document.querySelector(`.nagrada_link`);
const forma = document.querySelector(`.form_OS`)
const krest = forma.querySelector('.close');

 const krest2 = header_popup.querySelector(`.close`);

popularButton.addEventListener('click',(evt)=>{
   
    evt.preventDefault();
    forma.classList.toggle(`hidden`);
})

button.addEventListener('click',(evt)=>{
    evt.preventDefault();
    forma.classList.toggle(`hidden`);
    const knopka= forma.querySelector('input[type=submit]');
    const check = forma.querySelector(`input[type=checkbox]`);
    knopka.disabled=true;
 check.addEventListener('click',()=>{
     if(check.checked==false){
         knopka.disabled=true;
     }
    if(check.checked==true){
         knopka.disabled=false
     }
})
})
// header_button.addEventListener('click',(evt)=>{
//     evt.preventDefault();
//    header_popup.classList.toggle(`hidden`);
//    const knopka= header_popup.querySelector('input[type=submit]');
//    const check = header_popup.querySelector(`input[type=checkbox]`);
//    knopka.disabled=true;
// check.addEventListener('click',()=>{
//     if(check.checked==false){
//         knopka.disabled=true;
//     }
//    if(check.checked==true){
//         knopka.disabled=false
//     }
// })
  
  
// })
krest.addEventListener('click',()=>{
    forma.classList.add(`hidden`);
  
})
krest2.addEventListener('click',()=>{

    header_popup.classList.add(`hidden`);
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