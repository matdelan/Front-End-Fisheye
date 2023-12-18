export function display(modal){
    const main = document.getElementById('main')
    modal.style.display = "flex"
    modal.setAttribute("aria-hidden","false")
    main.setAttribute("aria-hidden","true")
    if(modal.id == "contact_modal"){
        main.classList.toggle("opacity")
        document.getElementsByTagName('header')[0].classList.toggle("opacity")
    }
    modal.focus()
}
export function close(modal){
    const main = document.getElementById('main')
    modal.style.display = "none"
    modal.setAttribute("aria-hidden","true")
    main.setAttribute("aria-hidden","false")
    if(modal.id == "contact_modal"){
        main.classList.toggle("opacity")
        document.getElementsByTagName('header')[0].classList.toggle("opacity")
    } else {
        modal.remove()
    }
    main.focus()
}