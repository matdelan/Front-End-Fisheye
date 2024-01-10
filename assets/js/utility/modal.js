/**
 * Displays a modal and handles accessibility adjustments.
 *
 * @param {HTMLElement} modal - The modal element to be displayed.
 */
export function display(modal) {
    if (modal !== null) {
        const main = document.getElementById("main");
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        main.setAttribute("aria-hidden", "true");
        /* Desable tabindex on main + header*/
        const domItemTabIndex = main.querySelectorAll("[tabindex]");
        const domItemLogo = document.querySelector(".logo");
        domItemTabIndex.forEach(function(domItem) {
            if (parseInt(domItem.getAttribute("tabindex")) !== -1) {
                domItem.setAttribute("data-tabindex", domItem.getAttribute("tabindex") );
                domItem.setAttribute("tabindex", "-1");
            }
        });
        domItemLogo.setAttribute("data-tabindex", domItemLogo.getAttribute("tabindex"));
        domItemLogo.setAttribute("tabindex", "-1");
        if (modal.id == "contact_modal") {
            main.classList.toggle("opacity");
            document.getElementsByTagName("header")[0].classList.toggle("opacity");
            document.getElementById("contact").focus();
        } else {
            domItemLogo.style.display = "none";
            document.querySelector("[tabindex='1']").focus();
            document.querySelector(".modal__lightbox-middle").focus();
        }
    }
}
/**
 * Closes a modal and restores the initial state of the page.
 *
 * @param {HTMLElement} modal - The modal element to be closed.
 */
export function close(modal) {
    if (modal !== null) {
        const main = document.getElementById("main");

        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        main.setAttribute("aria-hidden", "false");
        /* Enable tabindex on main*/
        const domItemTabIndex = main.querySelectorAll("[tabindex]");
        const domItemLogo = document.querySelector(".logo");
        domItemTabIndex.forEach(function(domItem) {
            domItem.setAttribute("tabindex", domItem.getAttribute("data-tabindex"));
        });
        domItemLogo.setAttribute("tabindex", domItemLogo.getAttribute("data-tabindex"));

        let media = null;
        if (modal.id == "contact_modal") {
            main.classList.toggle("opacity");
            document.getElementsByTagName("header")[0].classList.toggle("opacity");
            media = document.querySelector("[tabindex='3']");
        } else {
            modal.remove();
            domItemLogo.style.display = "flex";
            media = document.querySelector("[tabindex='9']");
        }
        media.focus();
    }
}
