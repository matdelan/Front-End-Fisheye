/**
 * Factory design - Creates a Media object with the provided information
 *
 * @param {string} name - The name of the media.
 * @param {string} fileNameImage - The file name of the associated image for the media.
 * @param {string} fileNameVideo - The file name of the associated video for the media.
 * @param {number} like - The number of likes associated with the media.
 * @param {string} id - The unique identifier of the media.
 * @param {string} date - The creation date of the media.
 * @param {string} idMedia - The identifier of the media.
 * @return {object} - An object representing the created media.
 */
export function createMedia(name, fileNameImage, fileNameVideo, like, id, date, idMedia) {
    let rank = 0;
    // 0 - for mini card // 1 - lightbox // 2 - Media Off
    function getMedia(i) {
        let media = null;
        switch (i) {
            case 0:
                if (!fileNameImage) {
                    media = document.createElement( "video" );
                    media.setAttribute("src", "assets/images/" + id + "/" + fileNameVideo);
                    media.setAttribute("id", idMedia);
                } else {
                    media = document.createElement( "img" );
                    media.setAttribute("src", "assets/images/" + id + "/" + fileNameImage);
                    media.setAttribute("id", idMedia);
                }
                break;
            case 1:
                if (!fileNameImage) {
                    media = document.createElement( "video" );
                    media.setAttribute("src", "assets/images/" + id + "/" + fileNameVideo);
                    media.setAttribute("id", idMedia);
                    media.classList.add("modal__lightbox-mediaVideo");
                    media.setAttribute("controls", "controls");
                } else {
                    media = document.createElement( "img" );
                    media.setAttribute("src", "assets/images/" + id + "/" + fileNameImage);
                    media.setAttribute("id", idMedia);
                    media.classList.add("modal__lightbox-mediaImg");
                }
                break;
            case 2:
                if (fileNameImage) {
                    media = document.createElement( "video" );
                    media.setAttribute("src", "assets/images/82/Art_Wooden_Horse_Sculpture.mp4");
                    media.setAttribute("id", idMedia);
                    media.classList.add("modal__lightbox-mediaVideo");
                    media.setAttribute("controls", "controls");
                } else {
                    media = document.createElement( "img" );
                    media.setAttribute("src", "assets/images/82/Art_Purple_light.jpg");
                    media.setAttribute("id", idMedia);
                    media.classList.add("modal__lightbox-mediaImg");
                }
                media.classList.add("modal__lightbox-media");
                media.classList.add("invisible");
                break;
        }

        media.setAttribute("alt", name);

        return media;
    }
    /**
     * Retrieves the DOM representation of a card.
     *
     * @return {HTMLElement} - The DOM element representing the card.
     */
    function getCardDOM() {
        const article = document.createElement( "article" );
        article.classList.add("media__card");
        article.setAttribute("id", idMedia);
        article.setAttribute("tabindex", rank);

        // Element DOM picture or movie
        const media = getMedia(0);
        let overlayPlay = null;
        if (!fileNameImage) {
            overlayPlay = document .createElement("i");
            overlayPlay.classList.add("fa-solid");
            overlayPlay.classList.add("fa-play");
            overlayPlay.classList.add("media__overlay");
        }
        media.classList.add("media__img");
        media.setAttribute("aria-label", name + ", closeup view");

        article.appendChild(media);
        if (overlayPlay !== null) {
            article.appendChild(overlayPlay);
        }
        const div = document.createElement( "div" );
        div.classList.add("media__content");

        const h3 = document.createElement( "h3" );
        h3.textContent = name;
        h3.classList.add("media__content-title");

        const likes = document.createElement("p");
        likes.textContent = like;
        likes.classList.add("media__content-likes");
        likes.setAttribute("use", "false");

        const icon = document.createElement( "i" );
        icon.classList.add("media__content-icon");
        icon.classList.add("fa-heart");
        icon.classList.add("fa-solid");
        icon.setAttribute("aria-label", "likes");

        const a = document.createElement( "a" );
        a.classList.add("media__content-addLikes");
        a.appendChild(likes);
        a.appendChild(icon);

        div.appendChild(h3);
        div.appendChild(a);

        article.appendChild(div);

        return article;
    }
    /**
     * Switch media on lightbox
     *
     */
    function switchDisplayMedia() {
        // Create two balise img et video and swap if need to display one or another
        const mediaImg = document.querySelector(".modal__lightbox-mediaImg");
        const mediaVideo = document.querySelector(".modal__lightbox-mediaVideo");
        const text = document.querySelector(".modal__lightbox-label");

        /* For media*/
        if (fileNameImage) {
            // Base video est affiché - swap
            if (mediaImg.classList.contains("invisible")) {
                mediaImg.setAttribute("src", "assets/images/" + id + "/" + fileNameImage);
                mediaImg.setAttribute("id", idMedia);
                mediaImg.classList.toggle("invisible");
                mediaVideo.classList.toggle("invisible");
            } else {// base image
                mediaImg.setAttribute("src", "assets/images/" + id + "/" + fileNameImage);
                mediaImg.setAttribute("id", idMedia);
            }
        } else {
            // Base video est affiché - swap
            if (mediaImg.classList.contains("invisible")) {
                mediaVideo.setAttribute("src", "assets/images/" + id + "/" + fileNameVideo);
                mediaVideo.setAttribute("id", idMedia);
            } else {
                mediaVideo.setAttribute("src", "assets/images/" + id + "/" + fileNameVideo);
                mediaVideo.setAttribute("id", idMedia);
                mediaImg.classList.toggle("invisible");
                mediaVideo.classList.toggle("invisible");
            }
        }
        text.textContent = name;
    }
    /**
     * Create modal Lightbox for DOM
     *
     * @return {HTMLElement} - The DOM element representing the lightbox.
     */
    function createModalLightbox() {
        const modalForm = document.createElement("modal");
        modalForm.classList.add("modal__lightbox");
        modalForm.textContent= "";
        modalForm.setAttribute("aria-hidden", "false");
        modalForm.setAttribute("role", "dialog");
        modalForm.setAttribute("aria-label", "image closeup view");
        document.getElementById("main").setAttribute("aria-hidden", "true");

        const chevronLeft = document.createElement("i");
        chevronLeft.classList.add("fa-solid");
        chevronLeft.classList.add("fa-chevron-left");
        chevronLeft.classList.add("modal__lightbox-left");
        chevronLeft.setAttribute("aria-label", "Previous image");
        chevronLeft.setAttribute("tabindex", "1");

        const mediaMiddle = getMedia(1);
        mediaMiddle.classList.add("modal__lightbox-media");
        const mediaOff = getMedia(2);

        const middle = document.createElement( "div" );
        middle.classList.add("modal__lightbox-middle");
        middle.setAttribute("tabindex", "2");
        middle.appendChild(mediaMiddle);
        middle.appendChild(mediaOff);

        const labelMedia = document.createElement( "p" );
        labelMedia.textContent = name;
        labelMedia.classList.add("modal__lightbox-label");
        middle.appendChild(labelMedia);

        const btnClose = document.createElement("i");
        btnClose.classList.add("button__close");
        btnClose.classList.add("modal__lightbox-close");
        btnClose.classList.add("fa-solid");
        btnClose.classList.add("fa-xmark");
        btnClose.setAttribute("aria-label", "Close dialog");
        btnClose.setAttribute("tabindex", "4");

        const chevronRight = document.createElement("i");
        chevronRight.classList.add("fa-solid");
        chevronRight.classList.add("fa-chevron-right");
        chevronRight.classList.add("modal__lightbox-right");
        chevronRight.setAttribute("aria-label", "Next image");
        chevronRight.setAttribute("tabindex", "3");

        const aside = document.createElement("aside");
        aside.classList.add("modal__lightbox-aside");

        modalForm.appendChild(chevronLeft);
        modalForm.appendChild(middle);
        aside.appendChild(btnClose);
        aside.appendChild(chevronRight);
        modalForm.appendChild(aside);

        return modalForm;
    }
    function setRank(i) {
        rank = i;
    }

    return {
        name,
        fileNameImage,
        fileNameVideo,
        like,
        id,
        date,
        idMedia,
        rank,
        getCardDOM,
        createModalLightbox,
        switchDisplayMedia,
        setRank,
    };
}
