let btn = document.querySelector('#prueba')

btn.addEventListener('click', e => {
    let btnSRC = btn.getAttribute('class');
    if (btnSRC === "pixel") {
        btn.setAttribute('class','normal')
        btn = ""
        setTimeout(()=>{
            btn = document.querySelector('#prueba')
        },700);
    }else{
        btn.setAttribute('class','pixel')
        btn = ""
        setTimeout(()=>{
            btn = document.querySelector('#prueba')
        },700);
    }

})

///scroll
let info = document.querySelector('#informacion')
let firstPanel = document.querySelector('#first-panel')
window.addEventListener('scroll', e=>{
    ///Scroll 10

    if (window.scrollY >= 10) {
        firstPanel.setAttribute('class','second')
        info.setAttribute('class','info-show')
    } if (window.scrollY <= 9) {
        firstPanel.setAttribute('class','first')
        info.setAttribute('class','info-hidden')
    }
})