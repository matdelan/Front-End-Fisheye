export function createMedia(name,fileNameImage,fileNameVideo,like,id)
{
    function getCardDOM(){
        console.log("")
        const article = document.createElement( 'article' )
        article.classList.add('media__card')
        let img
        if (!fileNameImage)
        {
            img = document.createElement( 'video' )
            img.setAttribute("src", "../assets/images/" + id + "/" + fileNameVideo)
            img.setAttribute("alt", name)
            img.setAttribute("autoplay", true)
            //img.setAttribute("poster", name)
            img.classList.add('media__img')
        }
        else {
            img = document.createElement( 'img' )
            img.setAttribute("src", "../assets/images/" + id + "/" + fileNameImage)
            img.setAttribute("alt", name)
            img.classList.add('media__img')
        }
            
        
        article.appendChild(img)
        const div = document.createElement( 'div' )
        div.classList.add('media__content')
        
        const h3 = document.createElement( 'h3' )
        h3.textContent = name
        h3.classList.add('media__content-title')

        const icon = document.createElement( 'p' )
        icon.textContent = '\u2665'
        icon.classList.add('media__content-icon')
        
        div.appendChild(h3)
        div.appendChild(icon)

        article.appendChild(div)

        return article

    }

    return {
        name,
        fileNameImage,
        fileNameVideo,
        like,
        id,
        getCardDOM
    }
}
