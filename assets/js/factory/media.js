
export function createMedia(name,fileNameImage,fileNameVideo,like,id,date,idMedia)
{
    function getMedia(){
        let media = null
        
        if (!fileNameImage){
            media = document.createElement( 'video' )
            media.setAttribute("src", "../assets/images/" + id + "/" + fileNameVideo)  
            media.setAttribute("id", idMedia)  
            media.classList.add("modal__lightbox-mediaVideo")
        } else {
            media = document.createElement( 'img' )
            media.setAttribute("src", "../assets/images/" + id + "/" + fileNameImage)
            media.setAttribute("id", idMedia)
            media.classList.add("modal__lightbox-mediaImg")
        }
        
        media.setAttribute("alt", name)

        return media
    }
    function getSecondMedia(){
        let media = null
        
        if (fileNameImage){
            media = document.createElement( 'video' )
            media.setAttribute("src", "../assets/images/" + id + "/" + fileNameVideo)  
            media.setAttribute("id", idMedia) 
            media.classList.add("modal__lightbox-mediaVideo")
        } else {
            media = document.createElement( 'img' )
            media.setAttribute("src", "../assets/images/" + id + "/" + fileNameImage)
            media.setAttribute("id", idMedia)
            media.classList.add("modal__lightbox-mediaImg")
        }
        media.classList.add('invisible')
        media.setAttribute("alt", name)
        media.classList.add("modal__lightbox-media")

        return media
    }


    function deleteMedia()
    {
        let m = document.querySelector(".modal__lightbox")
        m.remove()
    }
    
    function getCardDOM(){

        const article = document.createElement( 'article' )
        article.classList.add('media__card')
        article.setAttribute('id', idMedia)

        //Element DOM picture or movie
        const media = getMedia()
        media.classList.add('media__img')
        
        article.appendChild(media)
        const div = document.createElement( 'div' )
        div.classList.add('media__content')
        
        const h3 = document.createElement( 'h3' )
        h3.textContent = name
        h3.classList.add('media__content-title')
        
        const icon = document.createElement( 'i' )
        icon.classList.add('media__content-icon')
        icon.classList.add('fa-heart')
        icon.classList.add('fa-solid')
        
        div.appendChild(h3)
        div.appendChild(icon)

        article.appendChild(div)

        return article
    }

    function switchDisplayMedia(){
        //Create two balise img et video and swap if need to display one or another
        const mediaImg = document.querySelector(".modal__lightbox-mediaImg")
        const mediaVideo = document.querySelector(".modal__lightbox-mediaVideo")
        console.log(fileNameImage)
        if (fileNameImage){
            //Base video est affiché - swap 
            if(mediaImg.classList.contains('invisible'))
            {
                mediaImg.setAttribute('src',"../assets/images/" + id + "/" + fileNameImage)
                mediaImg.setAttribute('id',idMedia)
                mediaImg.classList.toggle('invisible')
                mediaVideo.classList.toggle('invisible')
            } else {//base image
                mediaImg.setAttribute('src',"../assets/images/" + id + "/" + fileNameImage)
                mediaImg.setAttribute('id',idMedia)
            }
        } else {
            mediaVideo.setAttribute('src',"../assets/images/" + id + "/" + fileNameVideo)
            mediaVideo.setAttribute('id',idMedia)
            mediaImg.classList.toggle('invisible')
            mediaVideo.classList.toggle('invisible')
        }
    }

    function createModalLightbox(){
        const modalForm = document.createElement('modal')
        modalForm.classList.add('modal__lightbox')
        modalForm.textContent= ""
        modalForm.setAttribute("aria-hidden","false")
        modalForm.setAttribute("role","dialog")
        modalForm.setAttribute("aria-describedby","modalLightbox")
        document.getElementById('main').setAttribute("aria-hidden","true")
    
        const chevronLeft = document.createElement('i')
        chevronLeft.classList.add("fa-solid")
        chevronLeft.classList.add("fa-chevron-left")
        chevronLeft.classList.add("modal__lightbox-left")
    
        const mediaMiddle = getMedia()
        mediaMiddle.classList.add("modal__lightbox-media")
        const mediaTwo = getSecondMedia()
        
        const btnClose = document.createElement('i')
        btnClose.classList.add("button__close")
        btnClose.classList.add("modal__lightbox-close")
        btnClose.classList.add("fa-solid")
        btnClose.classList.add("fa-xmark")
    
        const chevronRight = document.createElement('i')
        chevronRight.classList.add("fa-solid")
        chevronRight.classList.add("fa-chevron-right")
        chevronRight.classList.add("modal__lightbox-right")
    
        const content = document.createElement('div')
        content.classList.add("modal__lightbox-content")

        const aside = document.createElement('aside')
        aside.classList.add("modal__lightbox-aside")

        content.appendChild(chevronLeft)
        content.appendChild(mediaMiddle)
        content.appendChild(mediaTwo)
        aside.appendChild(btnClose)
        aside.appendChild(chevronRight)
        content.appendChild(aside)
        modalForm.appendChild(content)
        
    
        return modalForm
    }

    return {
        name,
        fileNameImage,
        fileNameVideo,
        like,
        id,
        date,
        idMedia,
        getCardDOM,
        createModalLightbox,
        deleteMedia,
        switchDisplayMedia
    }
}
