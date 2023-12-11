//Mettre le code JavaScript lié à la page photographer.html
/**IMPORT */
import * as modal from '../assets/js/utility/modal'
import * as photographers from '../assets/js/pages/photographers'
import {sass} from '../assets/sass/style.sass'


/**VARIABLES */
const modalForm = document.getElementById('contact_modal')
const btnContact = document.querySelector(".contact_button")
const btnCloseModal = document.querySelector(".button__close")
let params = new URL(document.location).searchParams
let id = params.get("id")

/** EVENTS */
/**UTILISER ARIA-HIDDEN ??????????????????????  */
btnContact.addEventListener("click", function(){
    modal.display(modalForm)
})
btnCloseModal.addEventListener("click", function(){
    modal.close(modalForm)
})
/*
form.addEventListener("submit", (event) => {
    event.preventDefault()
    //console.log()
})*/

/** Generate page */
photographers.photographerForm(id)






