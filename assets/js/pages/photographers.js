import {photographerTemplate,photographerPageTemplate}  from '../templates/photographer'
//import json from '../../data/photographers.json'

export async function getPhotographers() {
    return await fetch('assets/data/photographers.json').then((response) =>
        response.json()
    ) 
}

/*export async function getPhotographerPage() {

    return await fetch('../assets/data/photographers.json').then((response) =>
        response.json()
    ) 
}*/

export async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
}

export async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers()
        displayData(photographers)
}

export async function photographerForm(idForm) {
    // Récupère les datas des photographes
    const { media, photographers } = await getPhotographers()
    //const photographer = photographers.find((item)=>item.id === idForm)
    let p
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

    photographerPageTemplate(p,result)
}
    
    
    
