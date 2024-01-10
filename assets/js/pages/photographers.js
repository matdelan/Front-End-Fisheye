import {photographerTemplate, photographerPageTemplate} from "../templates/photographer";
const johnDoe = {
    "name": "none",
    "id": 0,
    "city": "none",
    "country": "none",
    "tagline": "none",
    "price": 0,
    "portrait": "none",
};
/**
 * Fetches and returns a list of photographers from the specified JSON file.
 *
 * @async
 * @function
 * @return {Promise<Array>} - A promise that resolves to an array of photographer objects.
 */
export async function getPhotographers() {
    return await fetch("assets/data/photographers.json").then((response) =>
        response.json(),
    );
}
/**
 * Displays a list of photographers in the specified section of the DOM.
 *
 * @async
 * @function
 * @param {Array} photographers - An array of photographer objects to be displayed.
 * @return {Promise<void>} - A promise that resolves once the photographers are displayed.
 */
export async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
}
/**
 * Adds click event listeners to each photographer card, linking to their individual pages.
 *
 * @async
 * @function
 * @return {Promise<void>} - A promise that resolves once the event listeners are added.
 */
async function addLinkPhotographerPage() {
    /* Link for photographer pages */
    const cards = document.querySelectorAll("article");

    cards.forEach((card) => {
        card.addEventListener("click", function() {
        window.location.href = "photographer.html?id=" + card.getAttribute("id");
        });
    });
}
/**
 * Initializes the application by fetching photographer data, displaying it, adding link
 *
 * @async
 * @function
 * @return {Promise<void>} - A promise that resolves once the initialization is complete.
 */
export async function init() {
        // Récupère les datas des photographes
        const {photographers} = await getPhotographers();
        displayData(photographers);
        addLinkPhotographerPage();
}
/**
 * Fetches photographer and media data, filters the data for the specified photographer ID,
 * and returns the HTML representation of the photographer page.
 *
 * @async
 * @function
 * @param {string} idForm - The ID of the photographer's form.
 * @return {Promise<string>} - Resolves to the HTML representation of the photographer page
 */
export async function photographerForm(idForm) {
    // Get photographer & data
    const {media, photographers} = await getPhotographers();
    let p = johnDoe;
    const result = [];

    photographers.forEach((photographer) => {
        if (photographer.id == idForm) {
            p = photographer;
        }
    });

    media.forEach((m)=>{
        if (m.photographerId == idForm) {
            result.push(m);
        }
    });

    return photographerPageTemplate(p, result);
}
/**
 * Handles tab key events for looping focus between the first and last elements with tabindex.
 *
 * @function
 * @param {KeyboardEvent} event - The keyboard event.
 * @param {HTMLElement} firstElement - The first element with tabindex.
 * @param {HTMLElement} lastElement - The last element with tabindex.
 * @return {void}
 */
export function loopTabindex(event, firstElement, lastElement) {
    if (event.target == lastElement) {
        if ((event.key === "Tab")) {
            if (!event.shiftKey) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
    if (event.target == firstElement) {
        if (event.key === "Tab" && event.shiftKey) {
            event.preventDefault();
            lastElement.focus();
        }
    }
}


