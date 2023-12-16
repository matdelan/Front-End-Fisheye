/**IMPORT */
import * as modal from '../assets/js/utility/modal'
import * as validatorFormregistration from '../assets/js/validator/form-registration'
import * as photographers from '../assets/js/pages/photographers'
import {sass} from '../assets/sass/style.sass'

/**Get URL paramemters */
let params = new URL(document.location).searchParams
let idPhotographer = params.get("id")
let idCard = null

/**VARIABLES */
const modalContact = document.getElementById('contact_modal')
const btnContact = document.querySelector(".contact_button")
const btnCloseModal = document.querySelector(".button__close")

/** EVENTS */
btnContact.addEventListener("click", function(){
    modal.display(modalContact)
})
btnCloseModal.addEventListener("click", function(){
    modal.close(modalContact)
})
/**MODAL CONTACT */
modalContact.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("ok")
})

const main = document.getElementById('main')
const allMedia = photographers.photographerForm(idPhotographer).then((allMedia) => {
    const mediaCard = document.querySelectorAll(".media__card")
    const title = document.querySelector(".title__primary")
        
    /** LIGHTBOX */
    mediaCard.forEach((card) => card.addEventListener("click", function(){
        let media = allMedia.find(media => media.idMedia == card.id)
        let modalLightbox = document.querySelector(".modal__lightbox")
        idCard = card.id

        //Initialize modal in dom
            if (modalLightbox == null){
                modalContact.insertAdjacentElement("afterend", media.createModalLightbox())
                modalLightbox = document.querySelector(".modal__lightbox")
                
                main.setAttribute('aria-hidden','true')
            }

            /* Close modal event*/
            const modalClose = document.querySelector(".modal__lightbox-close")
            modalClose.addEventListener("click", function(){
                console.log(modalLightbox)
                modalLightbox.remove()
                main.setAttribute('aria-hidden','false')
            })
            
            let leftArrow = document.querySelector(".modal__lightbox-left")
            leftArrow.addEventListener("click", function(){
                    let index = allMedia.findIndex(m => m.idMedia == getIndex())
                    if((index-=1) == -1)
                        index = allMedia.length-1
    
                    allMedia[index].switchDisplayMedia()
            })

            let rightArrow = document.querySelector(".modal__lightbox-right")
            rightArrow.addEventListener("click", function(){
                let index = allMedia.findIndex(m => m.idMedia == getIndex())
                if((index+=1)==allMedia.length)
                    index = 0

                allMedia[index].switchDisplayMedia()
            })
        }))
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







