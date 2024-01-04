/**IMPORT */
import * as utilityModal from '../assets/js/utility/modal'
import * as validatorFormregistration from '../assets/js/validator/form-registration'
import * as photographers from '../assets/js/pages/photographers'
import * as utilitySelect from '../assets/js/utility/select'
import {sass} from '../assets/sass/style.sass'
import * as utilityLightbox from "../assets/js/utility/lightbox"

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
    utilityModal.display(modalContact)
})
btnCloseModal.addEventListener("click", function(){
    utilityModal.close(modalContact)
})

/**MODAL CONTACT VALIDATION */
modalContact.addEventListener("submit", (event) => {
    event.preventDefault()
    validatorFormregistration.validateForm(form)
})

/* ACCES KEYBOARD TOUCH */
document.addEventListener("keydown", function(event){
    if(event.key == "Escape"){      
        if(modalContact.getAttribute('aria-hidden') === "false"){
            utilityModal.close(modalContact)
        } else {
            const modalLightbox = document.querySelector(".modal__lightbox")
            utilityModal.close(modalLightbox)
        }
    }
    if(event.key == "Enter"){
        event.preventDefault()
    }
    if(event.key === ' ' || event.key === 'Spacebar'){
        //event.preventDefault()
    }
})

/* Build select : one entry give choose to select in the list and become the new entry*/
const listSelect = ["Titre", "Date", "Popularité"]
let select = new utilitySelect.select(".select", listSelect)
const domSelect = document.querySelector(".select")

/* EVENT -> On click open list */
//Parcourir la list est chercher l'order 1
select.domItemList.forEach(domItem => domItem.addEventListener("click", function(){
    if(!select.deploy) {
        select.showSelectList()
    } else if(domItem.style.getPropertyValue("order") == "1"){
        select.closeListItem()
    }
}))
/* Click event document */
document.addEventListener("click", function(event){
    if(!domSelect.contains(event.target)){
        if(select.deploy){
            select.closeListItem()
        }
    }
})


/* Build media miniature */
photographers.photographerForm(idPhotographer).then( allMedia => {
    
    const mediaImg = document.querySelectorAll(".media__img")
    const likes = document.querySelectorAll(".media__content-addLikes")
    const cards = document.querySelectorAll(".media__card")
    
    allMediaSort("0")
    refreshLikes()

    /* OVERLAY */
    likes.forEach(like=> like.addEventListener("click", function(){
        //If like a picture doesn't be use = add 1 + referesh()
        if(!like.getAttribute('data-use')){
            
            like.firstElementChild.textContent = parseInt(like.textContent) + 1 
            like.setAttribute("data-use","true")
            console.log(like.textContent)
        }
        refreshLikes()
    }))
    /* SELECT EVENTS */
    select.domItemList.forEach(domItem => domItem.addEventListener("click", function(){
        selectAction(domItem)
    }))
    /* ACCES KEYBOARD TOUCH */
    document.addEventListener("keydown", function(event){
        /*if(event.key == "Escape"){
            //Find who is open !
            
            if(modalContact.getAttribute('aria-hidden') === "false"){
                utilityModal.close(modalContact)
            } else {
                const modalLightbox = document.querySelector(".modal__lightbox")
                utilityModal.close(modalLightbox)
            }
        }
        if(event.key == "Enter"){
            event.preventDefault()  
        }*/
        if(event.key === ' ' || event.key === 'Spacebar'){
            /* si focus liste */
            
            let activeItem = document.activeElement
            
            
            if(activeItem.classList.contains("media__card")) {
                event.preventDefault()
                buildLightbox(activeItem.firstElementChild)   
                //utilityLightbox.buildLightbox(activeItem.firstElementChild)
            }
            if(activeItem.classList.contains("select") || activeItem.classList.contains("select__item")){
                event.preventDefault()
                if(select.deploy){
                    select.closeListItem()
                } else {
                    select.displayListItem()
                    select.domItemList[select.entryIndex].focus()
                }
            }
            if(activeItem.classList.contains("select__item-list")){
                event.preventDefault()
                
                selectAction(activeItem)
            }
            if(activeItem.classList.contains("logo")){
                event.preventDefault()
                window.location.href = "index.html"
            }
            
        }
        if(event.key === "ArrowUp"){
            event.preventDefault()
            let activeItem = document.activeElement
            let i = parseInt(activeItem.style.getPropertyValue("order"))
            console.log(i)
            i--
            if(select.deploy){
                if(i == 0)
                    i = select.domItemList.length
                select.domItemList[i-1].focus()
            }

        }
        if(event.key === "ArrowDown"){
            event.preventDefault()
            let activeItem = document.activeElement
            let i = parseInt(activeItem.style.getPropertyValue("order"))
            console.log(i)
            i++
            if(select.deploy){
                if(i == select.domItemList.length + 1)
                    i = 1
                select.domItemList[i-1].focus()
            }
        }

    })
    
        
    /** LIGHTBOX */
    mediaImg.forEach((card) => card.addEventListener("click", function(){
        buildLightbox(card)
        //utilityLightbox.buildLightbox(card)
    }))

    function buildLightbox(card){

        let media = allMedia.find(media => media.idMedia == card.id)
        let modalLightbox = document.querySelector(".modal__lightbox")
        idCard = card.id

        //Initialize modal in dom
        if (modalLightbox == null){
            modalContact.insertAdjacentElement("afterend", media.createModalLightbox())
            main.setAttribute("aria-hidden","true")
            modalLightbox = document.querySelector(".modal__lightbox")
        } 
        media.switchDisplayMedia()
        utilityModal.display(modalLightbox)
        refreshLikes()
    
        
        /* LIGHTBOX EVENTS */
        /* Close modal event*/
        const modalClose = document.querySelector(".modal__lightbox-close")
        modalClose.addEventListener("click", function(){
            utilityModal.close(modalLightbox)
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
                if(modalLightbox.getAttribute(utilityModal.display == "flex")){
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
                if(modalLightbox.getAttribute('aria-hidden') === "false"){
                    event.preventDefault()

                }

            }
        })

    }
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

    function allMediaSort(id){
        switch (id) {
            case "0":
                allMedia.sort(function(a,b){
                    let name1 = a.name.toUpperCase()
                    let name2 = b.name.toUpperCase()
                    if (name1 < name2){
                        return -1
                    }
                    if (name1 > name2){
                        return 1
                    }
                    else {
                        return 0
                    }
                })
                break
            case "1":
                allMedia.sort(function(a, b) {
                    var dateA = new Date(a.date)
                    var dateB = new Date(b.date)
                    return dateA - dateB
                })
                break
            case "2":
                allMedia.sort(function(a, b) {
                    return b.like - a.like
                })
                break
        }
        allMediaRebuild()
    }
    function allMediaRebuild(){
        //the 6 first index are for the header and finish at the select and add the select lenght
        let tabindexStart = 8
        
        cards.forEach( (card) => {
            for(let i = 0 ; i < allMedia.length ; i++){
                if(allMedia[i].idMedia == card.getAttribute("id")){
                    card.style.setProperty("order",i+1)
                    card.setAttribute("tabindex", (i+1 + tabindexStart))
                }
            }
        })
    }
    function selectAction(domItem){

        if(domItem.classList.contains("select__item-list"))
        {
            let temp = parseInt(domItem.getAttribute("data-index"))

            allMediaSort(domItem.getAttribute("data-index"))
            select.swapFirstListItem(temp)

        }
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








