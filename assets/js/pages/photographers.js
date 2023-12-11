import {photographerTemplate,photographerPageTemplate}  from '../templates/photographer'

export async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois récupéré
        //console.log ({ photographers: [...photographers, ...photographers, ...photographers]})
    return await fetch('assets/data/photographers.json').then((response) =>
        response.json()
    ) 
}

export async function getPhotographerPage() {

    return await fetch('../assets/data/photographers.json').then((response) =>
        response.json()
    ) 
}

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
    const { media, photographers } = await getPhotographerPage()
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
    
    
    
