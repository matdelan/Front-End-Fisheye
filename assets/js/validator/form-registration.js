/**** LES  TESTS ****/
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
    manageAlert(comment, checkBirthdate(comment.value))
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
    //Exeception
    if(element.id == 'formRadio'){
      target = element
    }

    //Gestion d'affichage des messages d'erreurs
    if (bool){
      //si l'alerte est est visible //attributes[1].value !== ""
      if (target.getAttribute("data-error-visible")){
        //on l'enlève
        target.setAttribute("data-error", "")
        target.setAttribute("data-error-visible", "false")
      }
    }
    else{
      //On cache l'alerte si ce n'est pas deja fait
      if(target.attributes[1].value == ""){
        target.setAttribute("data-error", msg)
        target.setAttribute("data-error-visible", "true")
      }
    }
  //a condition que l'attibut data-error soit en deuxième position au niveau des classes
}
function dataLog(bool)
{
  this.bool = bool
}


export function validateForm(form){
        
    if( checkTextField(first.value)
      && checkTextField(last.value)
      && checkTextField(comment.value)
      && checkEmail(email.value)
      )
    {
        //Validation du formulaire      
        form.classList.toggle("invisible")
        form.nextElementSibling.classList.toggle("invisible")
    }
    else
    {
      let table = {}
      table.first = new dataLog(checkTextField(first.value))
      table.last = new dataLog(checkTextField(last.value))
      table.comment = new dataLog(checkTextField(comment.value))
      table.email = new dataLog(checkEmail(email.value))
      table.birthdate = new dataLog(checkBirthdate(birthdate.value))
      table.radio = new dataLog(checkRadio(formRadio))
      table.condition = new dataLog(checkbox1.checked)

      console.table(table)
      //On affiche les erreurs    
      manageAlertList()
    }
}