let _button1 = document.getElementsByClassName('goToTop')[0]
let _button2 = document.getElementsByClassName('goToTop')[1]

_button1.addEventListener("click" , ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
_button2.addEventListener("click" , ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})