export class select {
    constructor(querySelect, list){
        this.list = list
        this.domItem = document.querySelector(querySelect)
        //live first index
        this.entryIndex = 0
        this.domItemList = []
        this.deploy = false

        //initialize
        let entry = null
        //Build menu
        for(let i = 0; i < this.list.length ; i++){
            entry = document.createElement('li')
            const chevronDown = document.createElement('i')
            if(i !== 0){
                //entry.classList.add("invisible")
                entry.classList.add("select__item-list")
            } else { 
                chevronDown.classList.add("fa-solid") 
            }
            entry.classList.add("select__item")
            entry.setAttribute("data-index", i )
            entry.style.setProperty("order", i+1)
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
        }
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
        }
    }

    swapFirstListItem(newIndex){
        let lastOrder = null
        //Compare entry with index 
        lastOrder = this.domItemList[newIndex].style.getPropertyValue("order")
        
        this.domItemList[newIndex].style.setProperty("order", "1")
        this.domItemList[newIndex].classList.toggle("select__item-list") 
        this.domItemList[newIndex].lastElementChild.classList.toggle("fa-solid")
        this.domItemList[newIndex].lastChild.classList.toggle("fa-chevron-down")
        this.domItemList[newIndex].lastChild.classList.toggle("fa-chevron-up")

        this.domItemList[this.entryIndex].style.setProperty("order", lastOrder)
        this.domItemList[this.entryIndex].classList.toggle("select__item-list") 
        this.domItemList[this.entryIndex].lastElementChild.classList.toggle("fa-solid")
        this.domItemList[this.entryIndex].lastChild.classList.toggle("fa-chevron-down")
        this.domItemList[this.entryIndex].lastChild.classList.toggle("fa-chevron-up")
        this.entryIndex = newIndex

        this.closeListItem()
    }
}