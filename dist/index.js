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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMedia: () => (/* binding */ createMedia)\n/* harmony export */ });\n\r\nfunction createMedia(name,fileNameImage,fileNameVideo,like,id,date,idMedia)\r\n{\r\n    // 0 - for mini card // 1 - lightbox // 2 - Media Off\r\n    function getMedia(i){\r\n        let media = null\r\n        switch(i){\r\n            case 0:\r\n                if (!fileNameImage){\r\n                    media = document.createElement( 'video' )\r\n                    media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameVideo)  \r\n                    media.setAttribute(\"id\", idMedia)  \r\n                } else {\r\n                    media = document.createElement( 'img' )\r\n                    media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                    media.setAttribute(\"id\", idMedia)\r\n                }\r\n                break\r\n            case 1:\r\n                if (!fileNameImage){\r\n                    media = document.createElement( 'video' )\r\n                    media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameVideo)  \r\n                    media.setAttribute(\"id\", idMedia)  \r\n                    media.classList.add(\"modal__lightbox-mediaVideo\")\r\n                } else {\r\n                    media = document.createElement( 'img' )\r\n                    media.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                    media.setAttribute(\"id\", idMedia)\r\n                    media.classList.add(\"modal__lightbox-mediaImg\")\r\n                }\r\n                break\r\n            case 2:\r\n                if (fileNameImage){\r\n                    media = document.createElement( 'video' )\r\n                    media.setAttribute(\"src\", \"../assets/images/82/Art_Wooden_Horse_Sculpture.mp4\")  \r\n                    media.setAttribute(\"id\", idMedia) \r\n                    media.classList.add(\"modal__lightbox-mediaVideo\")\r\n                } else {\r\n                    media = document.createElement( 'img' )\r\n                    media.setAttribute(\"src\", \"../assets/images/82/Art_Purple_light.jpg\")\r\n                    media.setAttribute(\"id\", idMedia)\r\n                    media.classList.add(\"modal__lightbox-mediaImg\")\r\n                }\r\n                media.classList.add(\"modal__lightbox-media\")\r\n                media.classList.add('invisible')\r\n                break\r\n\r\n        }\r\n        \r\n        \r\n        media.setAttribute(\"alt\", name)\r\n        \r\n        return media\r\n    }\r\n    /* Generate Card for photographer page */\r\n    function getCardDOM(){\r\n\r\n        const article = document.createElement( 'article' )\r\n        article.classList.add('media__card')\r\n        article.setAttribute('id', idMedia)\r\n\r\n        //Element DOM picture or movie\r\n        const media = getMedia(0)\r\n        media.classList.add('media__img')\r\n        \r\n        article.appendChild(media)\r\n        const div = document.createElement( 'div' )\r\n        div.classList.add('media__content')\r\n        \r\n        const h3 = document.createElement( 'h3' )\r\n        h3.textContent = name\r\n        h3.classList.add('media__content-title')\r\n\r\n        const likes = document.createElement('p')\r\n        likes.textContent = like\r\n        likes.classList.add(\"media__content-likes\")\r\n        \r\n        const icon = document.createElement( 'i' )\r\n        icon.classList.add('media__content-icon')\r\n        icon.classList.add('fa-heart')\r\n        icon.classList.add('fa-solid')\r\n\r\n        const a = document.createElement( 'a' )\r\n        a.classList.add('media__content-addLikes')\r\n        a.appendChild(likes)\r\n        a.appendChild(icon)\r\n\r\n        div.appendChild(h3)\r\n        div.appendChild(a)\r\n        \r\n\r\n        article.appendChild(div)\r\n\r\n        return article\r\n    }\r\n\r\n    function switchDisplayMedia(){\r\n        //Create two balise img et video and swap if need to display one or another\r\n        const mediaImg = document.querySelector(\".modal__lightbox-mediaImg\")\r\n        const mediaVideo = document.querySelector(\".modal__lightbox-mediaVideo\")\r\n        const text = document.querySelector(\".modal__lightbox-label\")\r\n        \r\n        /*For media*/\r\n        if (fileNameImage){\r\n            //Base video est affiché - swap \r\n            if(mediaImg.classList.contains('invisible'))\r\n            {\r\n                mediaImg.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                mediaImg.setAttribute('id',idMedia)\r\n                mediaImg.classList.toggle('invisible')\r\n                mediaVideo.classList.toggle('invisible')\r\n            } else {//base image\r\n                mediaImg.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameImage)\r\n                mediaImg.setAttribute('id',idMedia)\r\n            }\r\n        } else {\r\n            mediaVideo.setAttribute('src',\"../assets/images/\" + id + \"/\" + fileNameVideo)\r\n            mediaVideo.setAttribute('id',idMedia)\r\n            mediaImg.classList.toggle('invisible')\r\n            mediaVideo.classList.toggle('invisible')\r\n        }\r\n\r\n        /* For Text*/\r\n        text.textContent = name\r\n    }\r\n\r\n    function createModalLightbox(){\r\n        const modalForm = document.createElement('modal')\r\n        modalForm.classList.add('modal__lightbox')\r\n        modalForm.textContent= \"\"\r\n        modalForm.setAttribute(\"aria-hidden\",\"false\")\r\n        modalForm.setAttribute(\"role\",\"dialog\")\r\n        modalForm.setAttribute(\"aria-describedby\",\"modalLightbox\")\r\n        document.getElementById('main').setAttribute(\"aria-hidden\",\"true\")\r\n    \r\n        const chevronLeft = document.createElement('i')\r\n        chevronLeft.classList.add(\"fa-solid\")\r\n        chevronLeft.classList.add(\"fa-chevron-left\")\r\n        chevronLeft.classList.add(\"modal__lightbox-left\")\r\n    \r\n        const mediaMiddle = getMedia(1)\r\n        mediaMiddle.classList.add(\"modal__lightbox-media\")\r\n        const mediaOff = getMedia(2)\r\n\r\n        const middle = document.createElement( 'div' )\r\n        middle.classList.add(\"modal__lightbox-middle\")\r\n        middle.appendChild(mediaMiddle)\r\n        middle.appendChild(mediaOff)\r\n\r\n        const labelMedia  = document.createElement( 'p' )\r\n        labelMedia.textContent = name\r\n        labelMedia.classList.add(\"modal__lightbox-label\")\r\n        \r\n        middle.appendChild(labelMedia)\r\n\r\n        const btnClose = document.createElement('i')\r\n        btnClose.classList.add(\"button__close\")\r\n        btnClose.classList.add(\"modal__lightbox-close\")\r\n        btnClose.classList.add(\"fa-solid\")\r\n        btnClose.classList.add(\"fa-xmark\")\r\n    \r\n        const chevronRight = document.createElement('i')\r\n        chevronRight.classList.add(\"fa-solid\")\r\n        chevronRight.classList.add(\"fa-chevron-right\")\r\n        chevronRight.classList.add(\"modal__lightbox-right\")\r\n    \r\n        const content = document.createElement('div')\r\n        content.classList.add(\"modal__lightbox-content\")\r\n\r\n        const aside = document.createElement('aside')\r\n        aside.classList.add(\"modal__lightbox-aside\")\r\n\r\n        content.appendChild(chevronLeft)\r\n        content.appendChild(middle)\r\n        aside.appendChild(btnClose)\r\n        aside.appendChild(chevronRight)\r\n        content.appendChild(aside)\r\n        modalForm.appendChild(content)\r\n        \r\n    \r\n        return modalForm\r\n    }\r\n\r\n    return {\r\n        name,\r\n        fileNameImage,\r\n        fileNameVideo,\r\n        like,\r\n        id,\r\n        date,\r\n        idMedia,\r\n        getCardDOM,\r\n        createModalLightbox,\r\n        switchDisplayMedia\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/factory/media.js?");

/***/ }),

/***/ "./assets/js/pages/photographers.js":
/*!******************************************!*\
  !*** ./assets/js/pages/photographers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayData: () => (/* binding */ displayData),\n/* harmony export */   getPhotographers: () => (/* binding */ getPhotographers),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   photographerForm: () => (/* binding */ photographerForm)\n/* harmony export */ });\n/* harmony import */ var _templates_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/photographer */ \"./assets/js/templates/photographer.js\");\n\r\nconst johnDoe = {\r\n    \"name\": \"none\",\r\n    \"id\": 0,\r\n    \"city\": \"none\",\r\n    \"country\": \"none\",\r\n    \"tagline\": \"none\",\r\n    \"price\": 0,\r\n    \"portrait\": \"none\"\r\n}\r\n\r\nasync function getPhotographers() {\r\n    return await fetch('assets/data/photographers.json').then((response) =>\r\n        response.json()\r\n    ) \r\n}\r\n\r\nasync function displayData(photographers) {\r\n        const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n        photographers.forEach((photographer) => {\r\n            const photographerModel = (0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerTemplate)(photographer);\r\n            const userCardDOM = photographerModel.getUserCardDOM();\r\n            photographersSection.appendChild(userCardDOM);\r\n        });\r\n}\r\n\r\nasync function init() {\r\n        // Récupère les datas des photographes\r\n        const { photographers } = await getPhotographers()\r\n        displayData(photographers)\r\n}\r\n\r\nasync function photographerForm(idForm) {\r\n    // Get photographer & data\r\n    const { media, photographers } = await getPhotographers()\r\n    let p = johnDoe\r\n    let result = []\r\n\r\n    photographers.forEach((photographer) => {\r\n        if(photographer.id == idForm){\r\n            p = photographer\r\n        } \r\n    })\r\n\r\n    media.forEach((m)=>{\r\n        if(m.photographerId == idForm)\r\n        {   \r\n            result.push(m)\r\n        }\r\n    })\r\n\r\n    return (0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerPageTemplate)(p,result)\r\n}\r\n    \r\n    \r\n    \r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/pages/photographers.js?");

/***/ }),

/***/ "./assets/js/templates/photographer.js":
/*!*********************************************!*\
  !*** ./assets/js/templates/photographer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   photographerPageTemplate: () => (/* binding */ photographerPageTemplate),\n/* harmony export */   photographerTemplate: () => (/* binding */ photographerTemplate)\n/* harmony export */ });\n/* harmony import */ var _factory_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/media */ \"./assets/js/factory/media.js\");\n\r\n\r\n\r\nfunction photographerTemplate(data) {\r\n    //console.log(\"Template : \"+data)\r\n    const { name, portrait, city, country, id , tagline, price } = data\r\n\r\n    const picture = `assets/images/Photographers_ID_Photos/${portrait}`\r\n    \r\n    function getUserCardDOM() {\r\n        const article = document.createElement( 'article' )\r\n        article.setAttribute('id', id);\r\n        article.setAttribute('arial-label', \"User Card\");\r\n\r\n        const img = document.createElement( 'img' )\r\n        img.setAttribute(\"src\", picture)\r\n        img.setAttribute(\"alt\", name)\r\n        \r\n        const h2 = document.createElement( 'h2' )\r\n        h2.textContent = name\r\n\r\n        const p1 = document.createElement( 'p' )\r\n        p1.textContent = city + \", \" + country\r\n        p1.classList.add('color__secondary')\r\n\r\n        const p2 = document.createElement( 'p' )\r\n        p2.textContent = tagline\r\n\r\n        const p3 = document.createElement( 'p' )\r\n        p3.textContent = price + \"€/jour\"\r\n        p3.classList.add('color__secondary-empty')\r\n        const a = document.createElement( 'a' )\r\n        a.setAttribute(\"href\", \"photographer.html?id=\"+id)\r\n\r\n        article.appendChild(img)\r\n        article.appendChild(h2)\r\n        article.appendChild(p1)\r\n        article.appendChild(p2)\r\n        article.appendChild(p3)\r\n        a.appendChild(article)\r\n         \r\n        return (a)\r\n    }\r\n    return { name, picture, getUserCardDOM }\r\n}\r\n\r\nfunction photographerPageTemplate(photographer,listMedia) {\r\n\r\n    //const { name, portrait, city, country, id , tagline, price } = photographer\r\n\r\n    const picture = `../assets/images/Photographers_ID_Photos/${photographer.portrait}`\r\n    \r\n    const section = document.createElement( 'section' )\r\n    section.setAttribute('id', photographer.id);\r\n    section.classList.add('title__section')\r\n\r\n    const h2 = document.createElement( 'h2' )\r\n    h2.textContent = photographer.name\r\n    h2.classList.add('title__primary')\r\n\r\n    const p1 = document.createElement( 'p' )\r\n    p1.textContent = photographer.city + \", \" + photographer.country\r\n    p1.classList.add('title__secondary')\r\n\r\n    const p2 = document.createElement( 'p' )\r\n    p2.textContent = photographer.tagline\r\n    p2.classList.add('color__secondary-empty')\r\n\r\n    section.appendChild(h2)\r\n    section.appendChild(p1)\r\n    section.appendChild(p2)\r\n\r\n    const pageSection = document.querySelector(\".photograph-header\")\r\n    pageSection.classList.add('title')\r\n    pageSection.insertBefore(section,pageSection.firstChild)\r\n    \r\n    const img = document.createElement( 'img' )\r\n    img.setAttribute(\"src\", picture)\r\n    img.setAttribute(\"alt\", photographer.name)\r\n    img.classList.add('title__img')\r\n\r\n    pageSection.appendChild(img)\r\n\r\n    //Factory Media items \r\n    const allMedia =[]\r\n\r\n    listMedia.forEach((m)=>{\r\n        allMedia.push(_factory_media__WEBPACK_IMPORTED_MODULE_0__.createMedia(m.title, m.image, m.video, m.likes, m.photographerId, m.date, m.id))\r\n    })\r\n\r\n    //Trie\r\n    \r\n    const sectionMedia = document.createElement( 'section' )\r\n    sectionMedia.classList.add('media')\r\n    //Affiche\r\n    allMedia.forEach((m)=>{\r\n        sectionMedia.appendChild(m.getCardDOM())\r\n    })\r\n\r\n    //Overlay photographer page \r\n    const overlay = document.createElement( 'overlay' )\r\n    overlay.classList.add('photographer__overlay')\r\n    overlay.textContent = photographer.price + \"€ / jour\"\r\n    \r\n    const main = document.getElementById('main')\r\n    main.appendChild(overlay)\r\n    main.appendChild(sectionMedia)\r\n\r\n    //Add photographer name on Contact form\r\n    const photographerName = document.querySelector(\".jsContent_getName\")\r\n    photographerName.textContent = photographer.name\r\n\r\n    return allMedia\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/templates/photographer.js?");

/***/ }),

/***/ "./assets/sass/style.sass":
/*!********************************!*\
  !*** ./assets/sass/style.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/sass/style.sass?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/pages/photographers */ \"./assets/js/pages/photographers.js\");\n/* harmony import */ var _assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sass/style.sass */ \"./assets/sass/style.sass\");\n\r\n\r\n\r\n\r\n_assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_0__.init();\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;