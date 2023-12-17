/*IMPORT*/
import * as modal from '../utility/modal'

/**** TEST ****/
export function checkEmail(email){
    //let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    let regex = new RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regex.test(email)
}

export function checkTextField(text){
    return (text.length > 2)
}

/** TEST GLOBAL ***/
function manageAlertList(){
    manageAlert(first, checkTextField(first.value))
    manageAlert(last,checkTextField(last.value))
    manageAlert(email, checkEmail(email.value))
    manageAlert(comment, checkTextField(comment.value))
}

//Affiche les messages d'erreus en fonction des champs : input id / booleen champs conforme
export function manageAlert(element, bool){
  //Gestion du message d'erreur
  let msg = ""
  switch(element.id){
    case 'last' :
    case 'first' :
    case 'comment' :
      msg="Veuillez entrer 3 caractères ou plus."
      break
    case 'email':
      msg="Veuillez entrer un mail valide."
      break
    }

    let target = element.parentElement

    //Gestion d'affichage des messages d'erreurs
    if (bool){
      //si l'alerte est est visible
      if (target.getAttribute("data-error-visible")){
        //on l'enlève
        target.setAttribute("data-error", "")
        target.setAttribute("data-error-visible", "false")
        element.setAttribute('aria-invalid','false')
      }
    }
    else{
      //On cache l'alerte si ce n'est pas deja fait
      if(target.getAttribute("data-error-visible")){
        target.setAttribute("data-error", msg)
        target.setAttribute("data-error-visible", "true")
        element.setAttribute('aria-invalid','true')
      }
    }
  //a condition que l'attibut data-error soit en deuxième position au niveau des classes
}
function dataLog(bool)
{
  this.bool = bool
}


export function validateForm(form){
  let table = {}    
    if( checkTextField(first.value)
      && checkTextField(last.value)
      && checkTextField(comment.value)
      && checkEmail(email.value)
      )
    {
      //Validation du formulaire      
      table.first = new dataLog(first.value)
      table.last = new dataLog(last.value)
      table.comment = new dataLog(comment.value)
      table.email = new dataLog(email.value)

      console.table(table)
      manageAlertList()
      const modalContact = document.getElementById("contact_modal")
      modal.close(modalContact)
    }
    else
    {
      //On affiche les erreurs    
      manageAlertList()
      
      table.first = new dataLog(checkTextField(first.value))
      table.last = new dataLog(checkTextField(last.value))
      table.comment = new dataLog(checkTextField(comment.value))
      table.email = new dataLog(checkEmail(email.value))

      console.table(table)
    }
}