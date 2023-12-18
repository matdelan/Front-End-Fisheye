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
let totalNumberOfLikes =null
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
        
        if(modalContact.getAttribute('aria-hidden') === "false"){
            modal.close(modalContact)
        } else {
            const modalLightbox = document.querySelector(".modal__lightbox")
            modal.close(modalLightbox)
        }
    }
    if(event.key == "Enter"){
        event.preventDefault()
    }
})



const allMedia = photographers.photographerForm(idPhotographer).then((allMedia) => {
    const mediaImg = document.querySelectorAll(".media__img")
    const title = document.querySelector(".title__primary")
    const likes = document.querySelectorAll(".media__content-addLikes")
    refreshLikes()

    /* OVERLAY */
    likes.forEach(like=> like.addEventListener("click", function(){
        //If like a picture doesn't be use = add 1 + referesh()
        if(!like.getAttribute('use')){
            
            like.firstElementChild.textContent = parseInt(like.textContent) + 1 
            like.setAttribute("use","true")
            console.log(like.textContent)
        }
        refreshLikes()
    }))
        
    /** LIGHTBOX */
    mediaImg.forEach((card) => card.addEventListener("click", function(){
        let media = allMedia.find(media => media.idMedia == card.id)
        let modalLightbox = document.querySelector(".modal__lightbox")
        idCard = card.id

        //Initialize modal in dom
        if (modalLightbox == null){
            modalContact.insertAdjacentElement("afterend", media.createModalLightbox())
            main.setAttribute("aria-hidden","true")
            modalLightbox = document.querySelector(".modal__lightbox")
            refreshLikes()
        } else {
            media.switchDisplayMedia()
            modal.display(modalLightbox)
            refreshLikes()
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
    }
    
    function previousCard(){
        let index = allMedia.findIndex(m => m.idMedia == getIndex())
        if((index-=1) == -1)
            index = allMedia.length-1
        allMedia[index].switchDisplayMedia()
    }

    function refreshLikes(){
        let total = 0
        const overlay = document.querySelector(".photographer__overlay-total")

        likes.forEach(function(like){
            let value = parseInt(like.textContent,10)
            if(!isNaN(value))
                total += value
        })

        overlay.textContent = total
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







