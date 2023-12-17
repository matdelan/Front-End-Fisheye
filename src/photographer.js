/**IMPORT */
import * as modal from '../assets/js/utility/modal'
import * as validatorFormregistration from '../assets/js/validator/form-registration'
import * as photographers from '../assets/js/pages/photographers'
import {sass} from '../assets/sass/style.sass'

/**Get URL paramemters */
let params = new URL(document.location).searchParams
const idPhotographer = params.get("id")
let idCard = null

/**VARIABLES */
const modalContact = document.getElementById('contact_modal')
const btnContact = document.querySelector(".contact_button")
const btnCloseModal = document.querySelector(".button__close")
const main = document.getElementById('main')
//Modal Contact
const form = document.querySelector("form")
const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const comment = document.getElementById('comment')

/** EVENTS */
btnContact.addEventListener("click", function(){
    modal.display(modalContact)
})
btnCloseModal.addEventListener("click", function(){
    modal.close(modalContact)
})

/**MODAL CONTACT VALIDATION */
modalContact.addEventListener("submit", (event) => {
    event.preventDefault()
    validatorFormregistration.validateForm(form)
})

/* ACCES KEYBOARD TOUCH */
document.addEventListener("keydown", function(event){
    if(event.key == "Escape"){
        //Find who is open !
        console.log(modalContact)
        if(modalContact.getAttribute('aria-hidden') === "false"){
            modal.close(modalContact)
        } else {
            const modalLightbox = document.querySelector(".modal__lightbox")
            modal.close(modalLightbox)
        }
    }
})

const allMedia = photographers.photographerForm(idPhotographer).then((allMedia) => {
    const mediaCard = document.querySelectorAll(".media__card")
    const title = document.querySelector(".title__primary")

    /* OVERLAY */

        
    /** LIGHTBOX */
    mediaCard.forEach((card) => card.addEventListener("click", function(){
        let media = allMedia.find(media => media.idMedia == card.id)
        let modalLightbox = document.querySelector(".modal__lightbox")
        idCard = card.id

        //Initialize modal in dom
        if (modalLightbox == null){
            modalContact.insertAdjacentElement("afterend", media.createModalLightbox())
            main.setAttribute("aria-hidden","true")
            modalLightbox = document.querySelector(".modal__lightbox")
        } else {
            media.switchDisplayMedia()
            modal.display(modalLightbox)
        }
        /* LIGHTBOX EVENTS */
        /* Close modal event*/
        const modalClose = document.querySelector(".modal__lightbox-close")
        modalClose.addEventListener("click", function(){
            modal.close(modalLightbox)
        })
            
        let leftArrow = document.querySelector(".modal__lightbox-left")
        leftArrow.addEventListener("click", function(){
            previousCard()
        })

        let rightArrow = document.querySelector(".modal__lightbox-right")
        rightArrow.addEventListener("click", function(){
            nextCard()
        })
        document.addEventListener("keydown", function(event){
            if(event.key == "ArrowRight"){
                if(modalLightbox.getAttribute('aria-hidden') === "false"){
                    nextCard()
                }
            }
            if(event.key == "ArrowLeft"){
                if(modalLightbox.getAttribute('aria-hidden') === "false"){
                    previousCard()
                }
            }
            if(event.key === ' ' || event.key === 'Spacebar'){
                event.preventDefault()
                const video = document.querySelector(".modal__lightbox-mediaVideo")
                if(modalLightbox.getAttribute('aria-hidden') == "false"){
                    if(modalLightbox.getAttribute("scr") !== "undefined"){
                        if (video.paused) {
                            video.play();
                          } else {
                            video.pause();
                          }
                    }
                }
            }
        })
    }))
    function nextCard(){
        let index = allMedia.findIndex(m => m.idMedia == getIndex())
        if((index+=1)==allMedia.length)
            index = 0
        allMedia[index].switchDisplayMedia()
        console.log(index)
    }
    
    function previousCard(){
        let index = allMedia.findIndex(m => m.idMedia == getIndex())
        if((index-=1) == -1)
            index = allMedia.length-1
        allMedia[index].switchDisplayMedia()
        console.log(index)
    }
})


function getIndex(){
    //Check if it's an image or a video displayed
    const mediaImg = document.querySelector(".modal__lightbox-mediaImg")
    const mediaVideo = document.querySelector(".modal__lightbox-mediaVideo")
    //Get id switch media
    if(mediaImg.classList.contains('invisible'))
    {
        idCard = mediaVideo.getAttribute('id')
    } else {
        idCard = mediaImg.getAttribute('id')
    }

    return idCard
}







