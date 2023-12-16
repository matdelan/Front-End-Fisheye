/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/factory/media.js":
/*!************************************!*\
  !*** ./assets/js/factory/media.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMedia: () => (/* binding */ createMedia)\n/* harmony export */ });\n\r\nfunction createMedia(name,fileNameImage,fileNameVideo,like,id,date,idMedia)\r\n{\r\n    function getMedia(){\r\n        let media = null\r\n        \r\n        if (!fileNameImage){\r\n            media = document.createElement( 'video' )\r\n            media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameVideo)  \r\n            media.setAttribute(\"id\", idMedia)  \r\n            media.classList.add(\"modal__lightbox-mediaVideo\")\r\n        } else {\r\n            media = document.createElement( 'img' )\r\n            media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameImage)\r\n            media.setAttribute(\"id\", idMedia)\r\n            media.classList.add(\"modal__lightbox-mediaImg\")\r\n        }\r\n        \r\n        media.setAttribute(\"alt\", name)\r\n\r\n        return media\r\n    }\r\n    function getSecondMedia(){\r\n        let media = null\r\n        \r\n        if (fileNameImage){\r\n            media = document.createElement( 'video' )\r\n            media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameVideo)  \r\n            media.setAttribute(\"id\", idMedia) \r\n            media.classList.add(\"modal__lightbox-mediaVideo\")\r\n        } else {\r\n            media = document.createElement( 'img' )\r\n            media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameImage)\r\n            media.setAttribute(\"id\", idMedia)\r\n            media.classList.add(\"modal__lightbox-mediaImg\")\r\n        }\r\n        media.classList.add('invisible')\r\n        media.setAttribute(\"alt\", name)\r\n        media.classList.add(\"modal__lightbox-media\")\r\n\r\n        return media\r\n    }\r\n\r\n\r\n    function deleteMedia()\r\n    {\r\n        let m = document.querySelector(\".modal__lightbox\")\r\n        m.remove()\r\n    }\r\n    \r\n    function getCardDOM(){\r\n\r\n        const article = document.createElement( 'article' )\r\n        article.classList.add('media__card')\r\n        article.setAttribute('id', idMedia)\r\n\r\n        //Element DOM picture or movie\r\n        const media = getMedia()\r\n        media.classList.add('media__img')\r\n        \r\n        article.appendChild(media)\r\n        const div = document.createElement( 'div' )\r\n        div.classList.add('media__content')\r\n        \r\n        const h3 = document.createElement( 'h3' )\r\n        h3.textContent = name\r\n        h3.classList.add('media__content-title')\r\n        \r\n        const icon = document.createElement( 'i' )\r\n        icon.classList.add('media__content-icon')\r\n        icon.classList.add('fa-heart')\r\n        icon.classList.add('fa-solid')\r\n        \r\n        div.appendChild(h3)\r\n        div.appendChild(icon)\r\n\r\n        article.appendChild(div)\r\n\r\n        return article\r\n    }\r\n\r\n    function switchDisplayMedia(){\r\n        //Create two balise img et video and swap if need to display one or another\r\n        const mediaImg = document.querySelector(\".modal__lightbox-mediaImg\")\r\n        const mediaVideo = document.querySelector(\".modal__lightbox-mediaVideo\")\r\n        console.log(fileNameImage)\r\n        if (fileNameImage){\r\n            //Base video est affiché - swap \r\n            if(mediaImg.classList.contains('invisible'))\r\n            {\r\n                mediaImg.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                mediaImg.setAttribute('id',idMedia)\r\n                mediaImg.classList.toggle('invisible')\r\n                mediaVideo.classList.toggle('invisible')\r\n            } else {//base image\r\n                mediaImg.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                mediaImg.setAttribute('id',idMedia)\r\n            }\r\n        } else {\r\n            mediaVideo.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameVideo)\r\n            mediaVideo.setAttribute('id',idMedia)\r\n            mediaImg.classList.toggle('invisible')\r\n            mediaVideo.classList.toggle('invisible')\r\n        }\r\n    }\r\n\r\n    function createModalLightbox(){\r\n        const modalForm = document.createElement('modal')\r\n        modalForm.classList.add('modal__lightbox')\r\n        modalForm.textContent= \"\"\r\n        modalForm.setAttribute(\"aria-hidden\",\"false\")\r\n        modalForm.setAttribute(\"role\",\"dialog\")\r\n        modalForm.setAttribute(\"aria-describedby\",\"modalLightbox\")\r\n        document.getElementById('main').setAttribute(\"aria-hidden\",\"true\")\r\n    \r\n        const chevronLeft = document.createElement('i')\r\n        chevronLeft.classList.add(\"fa-solid\")\r\n        chevronLeft.classList.add(\"fa-chevron-left\")\r\n        chevronLeft.classList.add(\"modal__lightbox-left\")\r\n    \r\n        const mediaMiddle = getMedia()\r\n        mediaMiddle.classList.add(\"modal__lightbox-media\")\r\n        const mediaTwo = getSecondMedia()\r\n        \r\n        const btnClose = document.createElement('i')\r\n        btnClose.classList.add(\"button__close\")\r\n        btnClose.classList.add(\"modal__lightbox-close\")\r\n        btnClose.classList.add(\"fa-solid\")\r\n        btnClose.classList.add(\"fa-xmark\")\r\n    \r\n        const chevronRight = document.createElement('i')\r\n        chevronRight.classList.add(\"fa-solid\")\r\n        chevronRight.classList.add(\"fa-chevron-right\")\r\n        chevronRight.classList.add(\"modal__lightbox-right\")\r\n    \r\n        const content = document.createElement('div')\r\n        content.classList.add(\"modal__lightbox-content\")\r\n\r\n        const aside = document.createElement('aside')\r\n        aside.classList.add(\"modal__lightbox-aside\")\r\n\r\n        content.appendChild(chevronLeft)\r\n        content.appendChild(mediaMiddle)\r\n        content.appendChild(mediaTwo)\r\n        aside.appendChild(btnClose)\r\n        aside.appendChild(chevronRight)\r\n        content.appendChild(aside)\r\n        modalForm.appendChild(content)\r\n        \r\n    \r\n        return modalForm\r\n    }\r\n\r\n    return {\r\n        name,\r\n        fileNameImage,\r\n        fileNameVideo,\r\n        like,\r\n        id,\r\n        date,\r\n        idMedia,\r\n        getCardDOM,\r\n        createModalLightbox,\r\n        deleteMedia,\r\n        switchDisplayMedia\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/factory/media.js?");

/***/ }),

/***/ "./assets/js/pages/photographers.js":
/*!******************************************!*\
  !*** ./assets/js/pages/photographers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayData: () => (/* binding */ displayData),\n/* harmony export */   getPhotographers: () => (/* binding */ getPhotographers),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   photographerForm: () => (/* binding */ photographerForm)\n/* harmony export */ });\n/* harmony import */ var _templates_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/photographer */ \"./assets/js/templates/photographer.js\");\n\r\nconst johnDoe = {\r\n    \"name\": \"none\",\r\n    \"id\": 0,\r\n    \"city\": \"none\",\r\n    \"country\": \"none\",\r\n    \"tagline\": \"none\",\r\n    \"price\": 0,\r\n    \"portrait\": \"none\"\r\n}\r\n\r\nasync function getPhotographers() {\r\n    return await fetch('assets/data/photographers.json').then((response) =>\r\n        response.json()\r\n    ) \r\n}\r\n\r\nasync function displayData(photographers) {\r\n        const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n        photographers.forEach((photographer) => {\r\n            const photographerModel = (0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerTemplate)(photographer);\r\n            const userCardDOM = photographerModel.getUserCardDOM();\r\n            photographersSection.appendChild(userCardDOM);\r\n        });\r\n}\r\n\r\nasync function init() {\r\n        // Récupère les datas des photographes\r\n        const { photographers } = await getPhotographers()\r\n        displayData(photographers)\r\n}\r\n\r\nasync function photographerForm(idForm) {\r\n    // Récupère les datas des photographes\r\n    const { media, photographers } = await getPhotographers()\r\n    //const photographer = photographers.find((item)=>item.id === idForm)\r\n    let p = johnDoe\r\n    let result = []\r\n\r\n    photographers.forEach((photographer) => {\r\n        if(photographer.id == idForm){\r\n            p = photographer\r\n        } \r\n    })\r\n\r\n    media.forEach((m)=>{\r\n        if(m.photographerId == idForm)\r\n        {   \r\n            result.push(m)\r\n        }\r\n    })\r\n\r\n    return (0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerPageTemplate)(p,result)\r\n}\r\n    \r\n    \r\n    \r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/pages/photographers.js?");

/***/ }),

/***/ "./assets/js/templates/photographer.js":
/*!*********************************************!*\
  !*** ./assets/js/templates/photographer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   photographerPageTemplate: () => (/* binding */ photographerPageTemplate),\n/* harmony export */   photographerTemplate: () => (/* binding */ photographerTemplate)\n/* harmony export */ });\n/* harmony import */ var _factory_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/media */ \"./assets/js/factory/media.js\");\n\r\n\r\n\r\nfunction photographerTemplate(data) {\r\n    //console.log(\"Template : \"+data)\r\n    const { name, portrait, city, country, id , tagline, price } = data\r\n\r\n    //const picture = `assets/photographers/${portrait}`;\r\n    const picture = `assets/images/Photographers_ID_Photos/${portrait}`\r\n    \r\n    function getUserCardDOM() {\r\n        const article = document.createElement( 'article' )\r\n        article.setAttribute('id', id);\r\n        article.setAttribute('arial-label', \"User Card\");\r\n\r\n        const img = document.createElement( 'img' )\r\n        img.setAttribute(\"src\", picture)\r\n        img.setAttribute(\"alt\", name)\r\n        \r\n        const h2 = document.createElement( 'h2' )\r\n        h2.textContent = name\r\n\r\n        const p1 = document.createElement( 'p' )\r\n        p1.textContent = city + \", \" + country\r\n        p1.classList.add('color__secondary')\r\n\r\n        const p2 = document.createElement( 'p' )\r\n        p2.textContent = tagline\r\n\r\n        const p3 = document.createElement( 'p' )\r\n        p3.textContent = price + \"€/jour\"\r\n        p3.classList.add('color__secondary-empty')\r\n        const a = document.createElement( 'a' )\r\n        a.setAttribute(\"href\", \"photographer.html?id=\"+id)\r\n\r\n        article.appendChild(img)\r\n        article.appendChild(h2)\r\n        article.appendChild(p1)\r\n        article.appendChild(p2)\r\n        article.appendChild(p3)\r\n        a.appendChild(article)\r\n         \r\n        return (a)\r\n    }\r\n    return { name, picture, getUserCardDOM }\r\n}\r\n\r\nfunction photographerPageTemplate(photographer,media) {\r\n\r\n    //const { name, portrait, city, country, id , tagline, price } = photographer\r\n\r\n    const picture = `../assets/images/Photographers_ID_Photos/${photographer.portrait}`\r\n    \r\n    const section = document.createElement( 'section' )\r\n    section.setAttribute('id', photographer.id);\r\n\r\n\r\n    const h2 = document.createElement( 'h2' )\r\n    h2.textContent = photographer.name\r\n    h2.classList.add('title__primary')\r\n\r\n    const p1 = document.createElement( 'p' )\r\n    p1.textContent = photographer.city + \", \" + photographer.country\r\n    p1.classList.add('title__secondary')\r\n\r\n    const p2 = document.createElement( 'p' )\r\n    p2.textContent = photographer.tagline\r\n    p2.classList.add('color__secondary-empty')\r\n\r\n    section.appendChild(h2)\r\n    section.appendChild(p1)\r\n    section.appendChild(p2)\r\n\r\n    const pageSection = document.querySelector(\".photograph-header\")\r\n    pageSection.classList.add('title')\r\n    pageSection.insertBefore(section,pageSection.firstChild)\r\n    \r\n    const img = document.createElement( 'img' )\r\n    img.setAttribute(\"src\", picture)\r\n    img.setAttribute(\"alt\", \"Portrait de \" + photographer.name)\r\n    img.classList.add('title__img')\r\n\r\n    pageSection.appendChild(img)\r\n\r\n    //Factory Media items \r\n    const allMedia =[]\r\n\r\n    \r\n    media.forEach((m)=>{\r\n        allMedia.push(_factory_media__WEBPACK_IMPORTED_MODULE_0__.createMedia(m.title, m.image, m.video, m.likes, m.photographerId, m.date, m.id))\r\n    })\r\n\r\n    //Trie\r\n    \r\n    const sectionMedia = document.createElement( 'section' )\r\n    sectionMedia.classList.add('media')\r\n    //Affiche\r\n    allMedia.forEach((m)=>{\r\n        sectionMedia.appendChild(m.getCardDOM())\r\n    })\r\n    //document.body.appendChild(sectionMedia)\r\n\r\n    //Overlay photographer page \r\n    const overlay = document.createElement( 'overlay' )\r\n    overlay.classList.add('photographer__overlay')\r\n    overlay.textContent = photographer.price + \"€ / jour\"\r\n\r\n    const modalContact = document.getElementById('contact_modal')\r\n    modalContact.insertAdjacentElement(\"afterend\", overlay)\r\n    modalContact.insertAdjacentElement(\"afterend\", sectionMedia)\r\n    //document.body.appendChild(overlay)\r\n\r\n    //Add photographer name on Contact form\r\n    const photographerName = document.querySelector(\".jsContent_getName\")\r\n    photographerName.textContent = photographer.name\r\n\r\n    return allMedia\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/templates/photographer.js?");

/***/ }),

/***/ "./assets/js/utility/modal.js":
/*!************************************!*\
  !*** ./assets/js/utility/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   close: () => (/* binding */ close),\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\nfunction display(modal){\r\n    modal.style.display = \"flex\"\r\n    modal.setAttribute(\"aria-hidden\",\"false\")\r\n    document.getElementById('main').setAttribute(\"aria-hidden\",\"true\")\r\n}\r\nfunction close(modal){\r\n    modal.style.display = \"none\"\r\n    modal.setAttribute(\"aria-hidden\",\"true\")\r\n    document.getElementById('main').setAttribute(\"aria-hidden\",\"false\")\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/utility/modal.js?");

/***/ }),

/***/ "./assets/js/validator/form-registration.js":
/*!**************************************************!*\
  !*** ./assets/js/validator/form-registration.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkEmail: () => (/* binding */ checkEmail),\n/* harmony export */   checkTextField: () => (/* binding */ checkTextField),\n/* harmony export */   manageAlert: () => (/* binding */ manageAlert),\n/* harmony export */   validateForm: () => (/* binding */ validateForm)\n/* harmony export */ });\n/**** LES  TESTS ****/\r\nfunction checkEmail(email){\r\n    //let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/)\r\n    let regex = new RegExp (/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/)\r\n    return regex.test(email)\r\n}\r\n\r\nfunction checkTextField(text){\r\n    return (text.length > 2)\r\n}\r\n\r\n/** TEST GLOBAL ***/\r\nfunction manageAlertList(){\r\n    manageAlert(first, checkTextField(first.value))\r\n    manageAlert(last,checkTextField(last.value))\r\n    manageAlert(email, checkEmail(email.value))\r\n    manageAlert(comment, checkBirthdate(comment.value))\r\n}\r\n\r\n//Affiche les messages d'erreus en fonction des champs : input id / booleen champs conforme\r\nfunction manageAlert(element, bool){\r\n  //Gestion du message d'erreur\r\n  let msg = \"\"\r\n  switch(element.id){\r\n    case 'last' :\r\n    case 'first' :\r\n    case 'comment' :\r\n      msg=\"Veuillez entrer 3 caractères ou plus.\"\r\n      break\r\n    case 'email':\r\n      msg=\"Veuillez entrer un mail valide.\"\r\n      break\r\n    }\r\n\r\n    let target = element.parentElement\r\n    //Exeception\r\n    if(element.id == 'formRadio'){\r\n      target = element\r\n    }\r\n\r\n    //Gestion d'affichage des messages d'erreurs\r\n    if (bool){\r\n      //si l'alerte est est visible //attributes[1].value !== \"\"\r\n      if (target.getAttribute(\"data-error-visible\")){\r\n        //on l'enlève\r\n        target.setAttribute(\"data-error\", \"\")\r\n        target.setAttribute(\"data-error-visible\", \"false\")\r\n      }\r\n    }\r\n    else{\r\n      //On cache l'alerte si ce n'est pas deja fait\r\n      if(target.attributes[1].value == \"\"){\r\n        target.setAttribute(\"data-error\", msg)\r\n        target.setAttribute(\"data-error-visible\", \"true\")\r\n      }\r\n    }\r\n  //a condition que l'attibut data-error soit en deuxième position au niveau des classes\r\n}\r\nfunction dataLog(bool)\r\n{\r\n  this.bool = bool\r\n}\r\n\r\n\r\nfunction validateForm(form){\r\n        \r\n    if( checkTextField(first.value)\r\n      && checkTextField(last.value)\r\n      && checkTextField(comment.value)\r\n      && checkEmail(email.value)\r\n      )\r\n    {\r\n        //Validation du formulaire      \r\n        form.classList.toggle(\"invisible\")\r\n        form.nextElementSibling.classList.toggle(\"invisible\")\r\n    }\r\n    else\r\n    {\r\n      let table = {}\r\n      table.first = new dataLog(checkTextField(first.value))\r\n      table.last = new dataLog(checkTextField(last.value))\r\n      table.comment = new dataLog(checkTextField(comment.value))\r\n      table.email = new dataLog(checkEmail(email.value))\r\n      table.birthdate = new dataLog(checkBirthdate(birthdate.value))\r\n      table.radio = new dataLog(checkRadio(formRadio))\r\n      table.condition = new dataLog(checkbox1.checked)\r\n\r\n      console.table(table)\r\n      //On affiche les erreurs    \r\n      manageAlertList()\r\n    }\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/validator/form-registration.js?");

/***/ }),

/***/ "./assets/sass/style.sass":
/*!********************************!*\
  !*** ./assets/sass/style.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/sass/style.sass?");

/***/ }),

/***/ "./src/photographer.js":
/*!*****************************!*\
  !*** ./src/photographer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/utility/modal */ \"./assets/js/utility/modal.js\");\n/* harmony import */ var _assets_js_validator_form_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/validator/form-registration */ \"./assets/js/validator/form-registration.js\");\n/* harmony import */ var _assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/pages/photographers */ \"./assets/js/pages/photographers.js\");\n/* harmony import */ var _assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sass/style.sass */ \"./assets/sass/style.sass\");\n/**IMPORT */\r\n\r\n\r\n\r\n\r\n\r\n/**Get URL paramemters */\r\nlet params = new URL(document.location).searchParams\r\nlet idPhotographer = params.get(\"id\")\r\nlet idCard = null\r\n\r\n\r\n/**VARIABLES */\r\nconst modalContact = document.getElementById('contact_modal')\r\nconst btnContact = document.querySelector(\".contact_button\")\r\nconst btnCloseModal = document.querySelector(\".button__close\")\r\n\r\n\r\n/** EVENTS */\r\nbtnContact.addEventListener(\"click\", function(){\r\n    _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__.display(modalContact)\r\n})\r\nbtnCloseModal.addEventListener(\"click\", function(){\r\n    _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__.close(modalContact)\r\n})\r\n/**MODAL CONTACT */\r\nmodalContact.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    console.log(\"ok\")\r\n})\r\n\r\nconst main = document.getElementById('main')\r\nconst allMedia = _assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_2__.photographerForm(idPhotographer).then((allMedia) => {\r\n    const mediaCard = document.querySelectorAll(\".media__card\")\r\n    const title = document.querySelector(\".title__primary\")\r\n        \r\n    /** LIGHTBOX */\r\n    mediaCard.forEach((card) => card.addEventListener(\"click\", function(){\r\n        let media = allMedia.find(media => media.idMedia == card.id)\r\n        let modalLightbox = document.querySelector(\".modal__lightbox\")\r\n        idCard = card.id\r\n\r\n        //Initialize modal in dom\r\n            if (modalLightbox == null){\r\n                modalContact.insertAdjacentElement(\"afterend\", media.createModalLightbox())\r\n                modalLightbox = document.querySelector(\".modal__lightbox\")\r\n                \r\n                main.setAttribute('aria-hidden','true')\r\n            }\r\n\r\n            /* Close modal event*/\r\n            const modalClose = document.querySelector(\".modal__lightbox-close\")\r\n            modalClose.addEventListener(\"click\", function(){\r\n                console.log(modalLightbox)\r\n                modalLightbox.remove()\r\n                main.setAttribute('aria-hidden','false')\r\n            })\r\n            \r\n            let leftArrow = document.querySelector(\".modal__lightbox-left\")\r\n            leftArrow.addEventListener(\"click\", function(){\r\n                    let index = allMedia.findIndex(m => m.idMedia == getIndex())\r\n                    if((index-=1) == -1)\r\n                        index = allMedia.length-1\r\n    \r\n                    allMedia[index].switchDisplayMedia()\r\n            })\r\n\r\n            let rightArrow = document.querySelector(\".modal__lightbox-right\")\r\n            rightArrow.addEventListener(\"click\", function(){\r\n                let index = allMedia.findIndex(m => m.idMedia == getIndex())\r\n                if((index+=1)==allMedia.length)\r\n                    index = 0\r\n\r\n                allMedia[index].switchDisplayMedia()\r\n            })\r\n        }))\r\n})\r\n\r\nfunction getIndex(){\r\n    //Check if it's an image or a video displayed\r\n    const mediaImg = document.querySelector(\".modal__lightbox-mediaImg\")\r\n    const mediaVideo = document.querySelector(\".modal__lightbox-mediaVideo\")\r\n    //Get id switch media\r\n    if(mediaImg.classList.contains('invisible'))\r\n    {\r\n        idCard = mediaVideo.getAttribute('id')\r\n    } else {\r\n        idCard = mediaImg.getAttribute('id')\r\n    }\r\n\r\n    return idCard\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/photographer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/photographer.js");
/******/ 	
/******/ })()
;