export function display(modal){
    console.log("debut")
    const main = document.getElementById("main")
    modal.style.display = "flex"
    modal.setAttribute("aria-hidden","false")
    main.setAttribute("aria-hidden","true")
    /* Desable tabindex on main + header*/
    const domItemTabIndex = main.querySelectorAll("[tabindex]")
    const domItemLogo = document.querySelector(".logo")
    console.log(domItemTabIndex)
    domItemTabIndex.forEach(function(domItem){
        domItem.setAttribute("data-tabindex", domItem.getAttribute("tabindex"))
        domItem.setAttribute("tabindex","-1")
    })
    console.log(domItemLogo)
    domItemLogo.setAttribute("data-tabindex", domItemLogo.getAttribute("tabindex"))
    domItemLogo.setAttribute("tabindex","-1")
    if(modal.id == "contact_modal"){
        main.classList.toggle("opacity")
        document.getElementsByTagName('header')[0].classList.toggle("opacity")
        document.getElementById("first").focus()
        
    }   
    
}
export function close(modal){
    const main = document.getElementById('main')
    modal.style.display = "none"
    modal.setAttribute("aria-hidden","true")
    main.setAttribute("aria-hidden","false")
    /* Enable tabindex on main*/
    const domItemTabIndex = main.querySelectorAll("[tabindex]")
    const domItemLogo = document.querySelector(".logo")
    domItemTabIndex.forEach(function(domItem){
        domItem.setAttribute("tabindex",domItem.getAttribute("data-tabindex"))
    })
    domItemLogo.setAttribute("tabindex",domItemLogo.getAttribute("data-tabindex"))
    domItemLogo.focus()
    if(modal.id == "contact_modal"){
        main.classList.toggle("opacity")
        document.getElementsByTagName('header')[0].classList.toggle("opacity")
    } else {
        modal.remove()
    }
}