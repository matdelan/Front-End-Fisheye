export function buildLightbox(card) {
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
        if (event.key === " " || event.key === "Spacebar") {
            if (modalLightbox.getAttribute(utilityModal.display == "flex")) {
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
export function nextCard() {
    let index = allMedia.findIndex((m) => m.idMedia == getIndex());
    if ((index+=1)==allMedia.length) {
index = 0;
}
    allMedia[index].switchDisplayMedia();
}

export function previousCard() {
    let index = allMedia.findIndex((m) => m.idMedia == getIndex());
    if ((index-=1) == -1) {
index = allMedia.length-1;
}
    allMedia[index].switchDisplayMedia();
}

