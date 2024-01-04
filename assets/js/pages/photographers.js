import {photographerTemplate,photographerPageTemplate}  from '../templates/photographer'
const johnDoe = {
    "name": "none",
    "id": 0,
    "city": "none",
    "country": "none",
    "tagline": "none",
    "price": 0,
    "portrait": "none"
}

export async function getPhotographers() {
    return await fetch('assets/data/photographers.json').then((response) =>
        response.json()
    ) 
}

export async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer)
            const userCardDOM = photographerModel.getUserCardDOM()
            photographersSection.appendChild(userCardDOM)
        })  
}

async function addLinkPhotographerPage(){
    /*Link for photographer pages */
    const cards = document.querySelectorAll("article")

    cards.forEach(card => { 
        card.addEventListener("click", function(){
        window.location.href = "photographer.html?id=" + card.getAttribute("id")
        })
    })
}

export async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers()
        displayData(photographers)
        addLinkPhotographerPage()
}

export async function photographerForm(idForm) {
    // Get photographer & data
    const { media, photographers } = await getPhotographers()
    let p = johnDoe
    let result = []

    photographers.forEach((photographer) => {
        if(photographer.id == idForm){
            p = photographer
        } 
    })

    media.forEach((m)=>{
        if(m.photographerId == idForm)
        {   
            result.push(m)
        }
    })

    return photographerPageTemplate(p,result)
}
    
    
    
