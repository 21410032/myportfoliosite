const styleSwitcherToggler=document.getElementById('style-switcher-toggler')
styleSwitcherToggler.addEventListener('click',()=>{
document.getElementById('style-switcher').classList.toggle('transformed');
})


window.addEventListener('scroll',()=>{
    document.getElementById('style-switcher').classList.add('transformed')
})

const alternateStyle=document.querySelectorAll('.alternate-style');
function setActivestyle(color){
alternateStyle.forEach((element)=>{
    if(color===element.getAttribute('title')){
        element.removeAttribute('disabled');
    }
    else
    element.setAttribute('disabled','true');
})
}

const daynightmode=document.querySelector('.daynightmode');
daynightmode.addEventListener('click',()=>{
    daynightmode.querySelector("i").classList.toggle('fa-sun');
    daynightmode.querySelector("i").classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        daynightmode.querySelector("i").classList.toggle('fa-sun');
    }
    else
    daynightmode.querySelector("i").classList.toggle('fa-moon');
})