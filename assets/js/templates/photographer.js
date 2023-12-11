import * as mediaClass from '../factory/media'

export function photographerTemplate(data) {
    //console.log("Template : "+data)
    const { name, portrait, city, country, id , tagline, price } = data

    //const picture = `assets/photographers/${portrait}`;
    const picture = `assets/images/Photographers_ID_Photos/${portrait}`
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        article.setAttribute('id', id);
        article.setAttribute('arial-label', "User Card");

        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", "Portrait de " + name)
        
        const h2 = document.createElement( 'h2' )
        h2.textContent = name

        const p1 = document.createElement( 'p' )
        p1.textContent = city + ", " + country
        p1.classList.add('color__secondary')

        const p2 = document.createElement( 'p' )
        p2.textContent = tagline

        const p3 = document.createElement( 'p' )
        p3.textContent = price + "€/jour"
        p3.classList.add('color__secondary-empty')
        const a = document.createElement( 'a' )
        a.setAttribute("href", "/pages/photographer.html?id="+id)

        article.appendChild(img)
        article.appendChild(h2)
        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(p3)
        a.appendChild(article)
         
        return (a)
    }
    return { name, picture, getUserCardDOM }
}

export function photographerPageTemplate(photographer,media) {

    //const { name, portrait, city, country, id , tagline, price } = photographer

    const picture = `../assets/images/Photographers_ID_Photos/${photographer.portrait}`
    
    const section = document.createElement( 'section' )
    section.setAttribute('id', photographer.id);


    const h2 = document.createElement( 'h2' )
    h2.textContent = photographer.name
    h2.classList.add('title__primary')

    const p1 = document.createElement( 'p' )
    p1.textContent = photographer.city + ", " + photographer.country
    p1.classList.add('title__secondary')

    const p2 = document.createElement( 'p' )
    p2.textContent = photographer.tagline
    p2.classList.add('color__secondary-empty')

    section.appendChild(h2)
    section.appendChild(p1)
    section.appendChild(p2)

    const pageSection = document.querySelector(".photograph-header")
    pageSection.classList.add('title')
    pageSection.insertBefore(section,pageSection.firstChild)
    
    const img = document.createElement( 'img' )
    img.setAttribute("src", picture)
    img.setAttribute("alt", "Portrait de " + photographer.name)
    img.classList.add('title__img')

    pageSection.appendChild(img)

    //Factory Media items 
    const allMedia =[]

    
    media.forEach((m)=>{
        allMedia.push(mediaClass.createMedia(m.title, m.image, m.video, m.likes, m.photographerId))
    })

    //Trie
    
    const sectionMedia = document.createElement( 'section' )
    sectionMedia.classList.add('media')
    //Affiche
    allMedia.forEach((m)=>{
        sectionMedia.appendChild(m.getCardDOM())
    })
    
    document.body.appendChild(sectionMedia)

    const overlay = document.createElement( 'overlay' )

    overlay.classList.add('photographer__overlay')
    overlay.textContent = photographer.price + "€ / jour"
    document.body.appendChild(overlay)
}


