export class Select {
    constructor(querySelect, list){
        this.list = list
        this.domItem = document.querySelector(querySelect)
        //live first index
        this.entryIndex = 0
        this.domItemList = []
        this.deploy = false

        let tabIndexStart = 6
        //initialize
        let entry = null
        this.domItem.setAttribute("role","button")
        this.domItem.setAttribute("aria-expanded","false")
        //Build menu
        for(let i = 0; i < this.list.length ; i++){
            entry = document.createElement('li')
            const chevronDown = document.createElement('i')
            if(i !== 0){
                entry.classList.add("select__item-list")
                entry.setAttribute("role", "listbox")
            } else { 
                chevronDown.classList.add("fa-solid") 
            }
            entry.classList.add("select__item")
            entry.setAttribute("data-index", i )
            entry.style.setProperty("order", i+1)
            entry.setAttribute("tabindex", tabIndexStart )
            entry.setAttribute("data-tabindex", tabIndexStart++ )
            entry.setAttribute("aria-label", this.list[i] )

            const p = document.createElement('p')
            p.textContent = this.list[i]
            entry.appendChild(p)
            
            chevronDown.classList.add("invisible")
            chevronDown.classList.add("fa-chevron-down")
            
            entry.appendChild(chevronDown)

            this.domItem.appendChild(entry)
            this.domItemList.push(entry)
        }
        //data-index -> sort
        //order -> position in list
    }

    showSelectList(){
        //if(this.domItemList)
        if(this.deploy){
            this.closeListItem()
        } else {
            this.displayListItem()
        }
    }

    closeListItem(){
        this.deploy = false
        for(let i = 0; i < this.domItemList.length ; i++){
            if(this.domItemList[i].style.getPropertyValue("order") !== "1")
            {   
                this.domItemList[i].style.display = "none"
            }
            else {
                this.domItemList[i].style.display = "flex"
                this.domItemList[i].lastChild.classList.toggle("fa-chevron-down")
                this.domItemList[i].lastChild.classList.toggle("fa-chevron-up")
            }
            this.domItemList[i].setAttribute("data-tabindex", this.domItemList[i].getAttribute("tabindex"))
            this.domItemList[i].setAttribute("tabindex", "-1")
        }
        this.domItem.setAttribute("aria-expanded","false")
        this.domItem.focus()
    }

    displayListItem(){
        this.deploy = true

        for(let i = 0; i < this.domItemList.length ; i++){
            if(this.domItemList[i].style.getPropertyValue("order") !== "1")
            {   
                this.domItemList[i].style.display = "flex"
            }
            else {
                //Swap chevron
                this.domItemList[i].lastChild.classList.toggle("fa-chevron-down")
                this.domItemList[i].lastChild.classList.toggle("fa-chevron-up")
            }
            this.domItemList[i].setAttribute("tabindex", this.domItemList[i].getAttribute("data-tabindex"))
        }
        this.domItem.setAttribute("aria-expanded","true")
    }

    swapFirstListItem(newIndex){
        let lastOrder = null
        //Compare entry with index 
        lastOrder = this.domItemList[newIndex].style.getPropertyValue("order")
        let lastTabindex = this.domItemList[newIndex].getAttribute("tabindex")
        
        this.domItemList[newIndex].style.setProperty("order", "1")
        this.domItemList[newIndex].classList.toggle("select__item-list") 
        this.domItemList[newIndex].lastElementChild.classList.toggle("fa-solid")
        this.domItemList[newIndex].lastChild.classList.toggle("fa-chevron-down")
        this.domItemList[newIndex].lastChild.classList.toggle("fa-chevron-up")
        this.domItemList[newIndex].setAttribute("tabindex", this.domItemList[this.entryIndex].getAttribute("tabindex"))
        
        this.domItemList[this.entryIndex].style.setProperty("order", lastOrder)
        this.domItemList[this.entryIndex].classList.toggle("select__item-list") 
        this.domItemList[this.entryIndex].lastElementChild.classList.toggle("fa-solid")
        this.domItemList[this.entryIndex].lastChild.classList.toggle("fa-chevron-down")
        this.domItemList[this.entryIndex].lastChild.classList.toggle("fa-chevron-up")
        this.domItemList[this.entryIndex].setAttribute("tabindex", lastTabindex)

        this.entryIndex = newIndex

        this.closeListItem()
    }

}