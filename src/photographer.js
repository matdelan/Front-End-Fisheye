/* IMPORT */
import * as utilityModal from "../assets/js/utility/modal";
import * as validatorFormregistration from "../assets/js/validator/form-registration";
import * as photographers from "../assets/js/pages/photographers";
import * as utilitySelect from "../assets/js/utility/select";
import {sass} from "../assets/sass/style.sass";

/* Get URL paramemters */
const params = new URL(document.location).searchParams;
const idPhotographer = params.get("id");
let idCard = null;

/* VARIABLES */
const modalContact = document.getElementById("contact_modal");
const btnContact = document.querySelector(".contact_button");
const btnCloseModal = document.querySelector(".button__close");
const main = document.getElementById("main");

// Modal Contact
const form = document.querySelector("form");

/* EVENTS */
btnContact.addEventListener("click", function() {
    utilityModal.display(modalContact);
});
btnCloseModal.addEventListener("click", function() {
    utilityModal.close(modalContact);
});

/* MODAL CONTACT VALIDATION */
modalContact.addEventListener("submit", (event) => {
    event.preventDefault();
    validatorFormregistration.validateForm(form);
});

/* Build select : one entry give choose to select in the list and become the new entry*/
const listSelect = ["Titre", "Date", "Popularité"];

const select = new utilitySelect.Select(".select", listSelect);
const domSelect = document.querySelector(".select");

/* EVENT -> On click open list */
// Parcourir la list est chercher l'order 1
select.domItemList.forEach((domItem) => domItem.addEventListener("click", function() {
    if (!select.deploy) {
        select.showSelectList();
    } else if (domItem.style.getPropertyValue("order") == "1") {
        select.closeListItem();
    }
}));
/* Click event document */
document.addEventListener("click", function(event) {
    if (!domSelect.contains(event.target)) {
        if (select.deploy) {
            select.closeListItem();
        }
    }
});

document.addEventListener("keydown", function(event) {
    const firstElement1 = document.getElementById("contact");
    const lastElement1 = document.getElementById("contact__close");
    if (modalContact.style.display == "flex") {
        photographers.loopTabindex(event, firstElement1, lastElement1);
    }
});

/* Build media miniature */
photographers.photographerForm(idPhotographer).then( (allMedia) => {
    const mediaImg = document.querySelectorAll(".media__img");
    const likes = document.querySelectorAll(".media__content-addLikes");
    const cards = document.querySelectorAll(".media__card");
    allMediaSort(0);
    refreshLikes();

    /* OVERLAY */
    likes.forEach((like) => like.addEventListener("click", function() {
        // If like a picture doesn't be use = add 1 + referesh()
        if (!like.getAttribute("data-use")) {
            like.firstElementChild.textContent = parseInt(like.textContent) + 1;
            like.setAttribute("data-use", "true");
        }
        refreshLikes();
    }));
    /* SELECT EVENTS */
    select.domItemList.forEach((domItem) => domItem.addEventListener("click", function() {
        selectAction(domItem);
    }));
    /* ACCES KEYBOARD TOUCH */
    document.addEventListener("keydown", function(event) {
        if (event.key == "Escape") {
            if (modalContact.getAttribute("aria-hidden") === "false") {
                utilityModal.close(modalContact);
            } else {
                const modalLightbox = document.querySelector(".modal__lightbox");
                utilityModal.close(modalLightbox);
            }
        }
        if (event.key === " " || event.key === "Spacebar") {
            /* si focus liste */
            const activeItem = event.target;
            if (activeItem.classList.contains("media__card")) {
                event.preventDefault();
                buildLightbox(activeItem.firstElementChild);
            }
            const boolean1 = activeItem.classList.contains("select");
            const boolean2 = activeItem.classList.contains("select__item");
            if (boolean1 || boolean2) {
                event.preventDefault();
                if (select.deploy) {
                    select.closeListItem();
                } else {
                    select.displayListItem();
                    select.domItemList[select.entryIndex].focus();
                }
            }
            if (activeItem.classList.contains("select__item-list")) {
                event.preventDefault();
                selectAction(activeItem);
            }
            if (activeItem.classList.contains("logo")) {
                event.preventDefault();
                window.location.href = "index.html";
            }
            if (activeItem.classList.contains("modal__contact-close")) {
                event.preventDefault();
                utilityModal.close(modalContact);
            }
        }
        /* Loop page */
        const indexLastElement = 8 + parseInt(allMedia.length);
        const lastElement = document.querySelector("[tabindex='" + indexLastElement + "']");
        const firstElement = document.querySelector(".logo");

        photographers.loopTabindex(event, firstElement, lastElement);


        if (event.key === "ArrowUp") {
            event.preventDefault();
            const activeItem = document.activeElement;
            let i = parseInt(activeItem.style.getPropertyValue("order"));
            i--;
            if (select.deploy) {
                if (i == 0) {
                    select.domItemList.forEach( (domItem) => {
                        if (parseInt(domItem.style.getPropertyValue("order")) == 3) {
                            domItem.focus();
                        }
                    });
                } else {
                    select.domItemList.forEach( (domItem) => {
                        if (parseInt(domItem.style.getPropertyValue("order")) == i) {
                            domItem.focus();
                        }
                    });
                }
            }
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            const activeItem = document.activeElement;
            let i = parseInt(activeItem.style.getPropertyValue("order"));
            i++;
            if (select.deploy) {
                if (i == select.domItemList.length + 1) {
                    select.domItemList.forEach( (domItem) => {
                        if (parseInt(domItem.style.getPropertyValue("order")) == 1) {
                            domItem.focus();
                        }
                    });
                } else {
                    select.domItemList.forEach( (domItem) => {
                        if (parseInt(domItem.style.getPropertyValue("order")) == i) {
                            domItem.focus();
                        }
                    });
                }
            }
        }
    });
    /** LIGHTBOX */
    mediaImg.forEach((card) => card.addEventListener("click", function() {
        buildLightbox(card);
    }));
    /**
     * @param {type} card - Dom item class media__card
     */
    function buildLightbox(card) {
        const media = allMedia.find((media) => media.idMedia == card.id);
        let modalLightbox = document.querySelector(".modal__lightbox");
        idCard = card.id;
        // Initialize modal in dom
        if (modalLightbox == null) {
            modalContact.insertAdjacentElement("afterend", media.createModalLightbox());
            main.setAttribute("aria-hidden", "true");
            modalLightbox = document.querySelector(".modal__lightbox");
        }
        media.switchDisplayMedia();
        utilityModal.display(modalLightbox);
        refreshLikes();
        /* LIGHTBOX EVENTS */
        /* Close modal event*/
        const modalClose = document.querySelector(".modal__lightbox-close");
        modalClose.addEventListener("click", function() {
            utilityModal.close(modalLightbox);
        });
        const leftArrow = document.querySelector(".modal__lightbox-left");
        leftArrow.addEventListener("click", function() {
            previousCard();
        });
        const rightArrow = document.querySelector(".modal__lightbox-right");
        rightArrow.addEventListener("click", function() {
            nextCard();
        });
        document.addEventListener("keydown", function(event) {
            if (event.key == "ArrowRight") {
                if (modalLightbox.getAttribute("aria-hidden") === "false") {
                    nextCard();
                }
            }
            if (event.key == "ArrowLeft") {
                if (modalLightbox.getAttribute("aria-hidden") === "false") {
                    previousCard();
                }
            }

            const firstElement = document.querySelector(".modal__lightbox-left");
            const lastElement = document.querySelector(".modal__lightbox-close");

            photographers.loopTabindex(event, firstElement, lastElement);
            const activeItem = event.target;
            if (event.key === " " || event.key === "Spacebar") {
                if (activeItem.classList.contains("modal__lightbox-left")) {
                    event.preventDefault();
                    previousCard();
                }
                if (activeItem.classList.contains("modal__lightbox-right")) {
                    event.preventDefault();
                    nextCard();
                }
                if (activeItem.classList.contains("modal__lightbox-close")) {
                    event.preventDefault();
                    utilityModal.close(modalLightbox);
                }
                if (activeItem.classList.contains("modal__lightbox-middle")) {
                    event.preventDefault();
                    const video = document.querySelector(".modal__lightbox-mediaVideo");
                    if (modalLightbox.getAttribute("aria-hidden") == "false") {
                        if (modalLightbox.getAttribute("scr") !== "undefined") {
                            if (video.paused) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * Display next card
     */
    function nextCard() {
        let index = allMedia.findIndex((m) => m.idMedia == getIndex());
        if ((index+=1)==allMedia.length) {
            index = 0;
        }
        allMedia[index].switchDisplayMedia();
    }
    /**
     * Display previous card
     */
    function previousCard() {
        let index = allMedia.findIndex((m) => m.idMedia == getIndex());
        if ((index-=1) == -1) {
            index = allMedia.length-1;
        }
        allMedia[index].switchDisplayMedia();
    }
    /**
     * Refresh overlay like
     */
    function refreshLikes() {
        let total = 0;
        const overlay = document.querySelector(".photographer__overlay-total");

        likes.forEach(function(like) {
            const value = parseInt(like.textContent, 10);
            if (!isNaN(value)) {
                total += value;
            }
        });

        overlay.textContent = total;
    }
    /**
     * Sort table of Media
     * @param {number} id - id of selected sort
     */
    function allMediaSort(id) {
        switch (id) {
            case 0:
                allMedia.sort(function(a, b) {
                    const name1 = a.name.toUpperCase();
                    const name2 = b.name.toUpperCase();
                    if (name1 < name2) {
                        return -1;
                    }
                    if (name1 > name2) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                break;
            case 1:
                allMedia.sort(function(a, b) {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB - dateA;
                });
                break;
            case 2:
                allMedia.sort(function(a, b) {
                    return b.like - a.like;
                });
                break;
        }
        allMediaRebuild();
    }
    /**
     * Give new order to media
     */
    function allMediaRebuild() {
        // the 6 first index are for the header and finish at the select and add the select lenght
        const tabindexStart = 8;
        cards.forEach( (card) => {
            for (let i = 0; i < allMedia.length; i++) {
                if (allMedia[i].idMedia == card.getAttribute("id")) {
                    card.style.setProperty("order", i+1);
                    card.setAttribute("tabindex", (i+1 + tabindexStart));
                }
            }
        });
    }
    /**
    * Select - Action on element
    * @param {object} domItem - Element li of select
    */
    function selectAction(domItem) {
        if (domItem.classList.contains("select__item-list")) {
            const sortValue = parseInt(domItem.getAttribute("data-index"));
            allMediaSort(sortValue);
            select.swapFirstListItem(sortValue);
        }
    }
});
/**
* Find an index on a media
* @return {number} idCard - id media
*/
function getIndex() {
    // Check if it's an image or a video displayed
    const mediaImg = document.querySelector(".modal__lightbox-mediaImg");
    const mediaVideo = document.querySelector(".modal__lightbox-mediaVideo");
    if (mediaImg.classList.contains("invisible")) {
        idCard = mediaVideo.getAttribute("id");
    } else {
        idCard = mediaImg.getAttribute("id");
    }

    return idCard;
}
