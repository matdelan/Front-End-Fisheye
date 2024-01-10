import * as factoryMedia from "../factory/media";

/**
 * Generates a template for a photographer and provides a method to get the DOM object
 *
 * @param {object} data - Photographer data.
 * @param {string} data.name - The name of the photographer.
 * @param {string} data.portrait - The filename of the photographer's portrait image.
 * @param {string} data.city - The city where the photographer is located.
 * @param {string} data.country - The country where the photographer is located.
 * @param {string} data.id - The unique identifier of the photographer.
 * @param {string} data.tagline - The tagline or description of the photographer.
 * @param {number} data.price - The price per day for the photographer's services.
 * @return {object} - An object containing the photographer's name, picture, and a method
 */
export function photographerTemplate(data) {
    const {name, portrait, city, country, id, tagline, price} = data;

    const picture = `assets/images/Photographers_ID_Photos/${portrait}`;
    let i = 1;
    const logo = document.querySelector(".logo");
    logo.setAttribute("tabindex", i++);
    logo.nextElementSibling.setAttribute("tabindex", i++);

    /**
     * Gets the DOM representation of the photographer.
     *
     * @return {HTMLElement} - The DOM element representing the photographer.
     */
    function getUserCardDOM() {
        const article = document.createElement( "article" );
        article.setAttribute("id", id);
        article.setAttribute("aria-label", name);
        article.setAttribute("role", "link");
        article.setAttribute("tabindex", i++);
        article.classList.add("photographer__page");

        const img = document.createElement( "img" );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const h2 = document.createElement( "h2" );
        h2.textContent = name;

        const p1 = document.createElement( "p" );
        p1.textContent = city + ", " + country;
        p1.classList.add("color__secondary");

        const p2 = document.createElement( "p" );
        p2.textContent = tagline;

        const p3 = document.createElement( "p" );
        p3.textContent = price + "€/jour";
        p3.classList.add("color__secondary-empty");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
    }
    return {name, picture, getUserCardDOM};
}

/**
 * Generates a template for a photographer page and adds it to the DOM.
 *
 * @param {object} photographer - Photographer data.
 * @param {string} photographer.name - The name of the photographer.
 * @param {string} photographer.portrait - The filename of the photographer's portrait image.
 * @param {string} photographer.city - The city where the photographer is located.
 * @param {string} photographer.country - The country where the photographer is located.
 * @param {string} photographer.id - The unique identifier of the photographer.
 * @param {string} photographer.tagline - The tagline or description of the photographer.
 * @param {number} photographer.price - The price per day for the photographer's services.
 * @param {Array} listMedia - An array of media items associated with the photographer.
 * @return {Array} - An array containing the media items for the photographer.
 */
export function photographerPageTemplate(photographer, listMedia) {
    let accessibilityIndex = 1;
    const picture = `assets/images/Photographers_ID_Photos/${photographer.portrait}`;

    const logo = document.querySelector(".logo");
    logo.setAttribute("tabindex", accessibilityIndex++);

    const section = document.createElement( "section" );
    section.setAttribute("id", photographer.id);
    section.classList.add("title__section");
    section.setAttribute("tabindex", accessibilityIndex++);
    section.setAttribute("aria-label", "Photographer describe");

    const h2 = document.createElement( "h2" );
    h2.textContent = photographer.name;
    h2.classList.add("title__primary");

    const p1 = document.createElement( "p" );
    p1.textContent = photographer.city + ", " + photographer.country;
    p1.classList.add("title__secondary");

    const p2 = document.createElement( "p" );
    p2.textContent = photographer.tagline;
    p2.classList.add("color__secondary-empty");
    p2.classList.add("title__secondary-content");

    section.appendChild(h2);
    section.appendChild(p1);
    section.appendChild(p2);

    const contactButton = document.querySelector(".contact_button");
    contactButton.setAttribute("tabindex", accessibilityIndex++);

    const pageSection = document.querySelector(".photograph-header");
    pageSection.classList.add("title");
    pageSection.insertBefore(section, pageSection.firstChild);

    const img = document.createElement( "img" );
    img.setAttribute("src", picture);
    img.setAttribute("alt", photographer.name);
    img.classList.add("title__img");
    img.setAttribute("tabindex", accessibilityIndex++);

    pageSection.appendChild(img);

    const select = document.querySelector(".select");
    select.setAttribute("tabindex", accessibilityIndex++);
    accessibilityIndex += select.childElementCount;

    // Factory Media items
    const allMedia =[];

    listMedia.forEach((m)=>{
        allMedia.push(factoryMedia
            .createMedia(m.title, m.image, m.video, m.likes, m.photographerId, m.date, m.id));
    });

    const sectionMedia = document.createElement( "section" );
    sectionMedia.classList.add("media");

    // Display
    allMedia.forEach((m)=>{
        m.setRank(accessibilityIndex++);
        sectionMedia.appendChild(m.getCardDOM());
    });

    // Overlay photographer page
    const overlay = document.createElement( "overlay" );
    overlay.classList.add("photographer__overlay");

    const photographerPrice = document.createElement("p");
    photographerPrice.textContent = photographer.price + "€ / jour";
    const totalLikes = document.createElement("p");
    totalLikes.classList.add("photographer__overlay-total");
    const icon = document.createElement( "i" );
    icon.classList.add("photographer__overlay-icon");
    icon.classList.add("fa-heart");
    icon.classList.add("fa-solid");

    overlay.appendChild(totalLikes);
    overlay.appendChild(icon);
    overlay.appendChild(photographerPrice);

    const main = document.getElementById("main");
    main.appendChild(overlay);
    main.appendChild(sectionMedia);

    // Add photographer name on Contact form
    const photographerName = document.querySelector(".jsContent_getName");
    photographerName.textContent = photographer.name;

    return allMedia;
}


