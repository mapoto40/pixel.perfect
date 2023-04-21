window.addEventListener('load', () => setTimeout(() => {
    document.querySelector('.loader').style.opacity = "0"
    setTimeout(() => {
        document.querySelector('.loader').remove()
    }, 500)
}, 500));

window.addEventListener('scroll', () => {
    var scrolls = window.scrollY
    if (scrolls >= 50){
        document.querySelector('nav').style.height = "65px"
        document.querySelector('nav').style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.15)"
    }
    else {
        document.querySelector('nav').style.boxShadow = "none"
        document.querySelector('nav').style.height = "100px"
    }
})

var toggle = true

document.querySelector('.openMenu').addEventListener('click', () => {
    if (toggle){
        document.querySelector('.contenerLinksNav').style.boxShadow = "0px 6px 6px rgba(0, 0, 0, 0.15)"
        document.querySelector('.contenerLinksNav').style.height = "550px"
        document.querySelector('.openMenu ion-icon[name= "close-sharp"]').style.display = "block"
        document.querySelector('.openMenu ion-icon[name= "apps-outline"]').style.display = "none"
    } else{
        document.querySelector('.openMenu ion-icon[name= "close-sharp"]').style.display = "none"
        document.querySelector('.openMenu ion-icon[name= "apps-outline"]').style.display = "block"
        document.querySelector('.contenerLinksNav').style.height = "0"
        document.querySelector('.contenerLinksNav').style.boxShadow = "none"
    }
    toggle = !toggle
})