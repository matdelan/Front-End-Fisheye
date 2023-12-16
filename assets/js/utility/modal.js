export function display(modal){
    modal.style.display = "flex"
    modal.setAttribute("aria-hidden","false")
    document.getElementById('main').setAttribute("aria-hidden","true")
}
export function close(modal){
    modal.style.display = "none"
    modal.setAttribute("aria-hidden","true")
    document.getElementById('main').setAttribute("aria-hidden","false")
}