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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMedia: () => (/* binding */ createMedia)\n/* harmony export */ });\nfunction createMedia(name,fileNameImage,fileNameVideo,like,id)\r\n{\r\n    function getCardDOM(){\r\n        console.log(\"\")\r\n        const article = document.createElement( 'article' )\r\n        article.classList.add('media__card')\r\n        let img\r\n        if (!fileNameImage)\r\n        {\r\n            img = document.createElement( 'video' )\r\n            img.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameVideo)\r\n            img.setAttribute(\"alt\", name)\r\n            img.setAttribute(\"autoplay\", true)\r\n            //img.setAttribute(\"poster\", name)\r\n            img.classList.add('media__img')\r\n        }\r\n        else {\r\n            img = document.createElement( 'img' )\r\n            img.setAttribute(\"src\", \"../assets/images/\" + id + \"/\" + fileNameImage)\r\n            img.setAttribute(\"alt\", name)\r\n            img.classList.add('media__img')\r\n        }\r\n            \r\n        \r\n        article.appendChild(img)\r\n        const div = document.createElement( 'div' )\r\n        div.classList.add('media__content')\r\n        \r\n        const h3 = document.createElement( 'h3' )\r\n        h3.textContent = name\r\n        h3.classList.add('media__content-title')\r\n\r\n        const icon = document.createElement( 'p' )\r\n        icon.textContent = '\\u2665'\r\n        icon.classList.add('media__content-icon')\r\n        \r\n        div.appendChild(h3)\r\n        div.appendChild(icon)\r\n\r\n        article.appendChild(div)\r\n\r\n        return article\r\n\r\n    }\r\n\r\n    return {\r\n        name,\r\n        fileNameImage,\r\n        fileNameVideo,\r\n        like,\r\n        id,\r\n        getCardDOM\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/factory/media.js?");

/***/ }),

/***/ "./assets/js/pages/photographers.js":
/*!******************************************!*\
  !*** ./assets/js/pages/photographers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayData: () => (/* binding */ displayData),\n/* harmony export */   getPhotographerPage: () => (/* binding */ getPhotographerPage),\n/* harmony export */   getPhotographers: () => (/* binding */ getPhotographers),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   photographerForm: () => (/* binding */ photographerForm)\n/* harmony export */ });\n/* harmony import */ var _templates_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/photographer */ \"./assets/js/templates/photographer.js\");\n\r\n\r\nasync function getPhotographers() {\r\n        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, \r\n        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant \"fetch\".\r\n        let photographers = [\r\n            {\r\n                \"name\": \"Ma data test\",\r\n                \"id\": 1,\r\n                \"city\": \"Paris\",\r\n                \"country\": \"France\",\r\n                \"tagline\": \"Ceci est ma data test\",\r\n                \"price\": 400,\r\n                \"portrait\": \"account.png\"\r\n            },\r\n            {\r\n                \"name\": \"Autre data test\",\r\n                \"id\": 2,\r\n                \"city\": \"Londres\",\r\n                \"country\": \"UK\",\r\n                \"tagline\": \"Ceci est ma data test 2\",\r\n                \"price\": 500,\r\n                \"portrait\": \"account.png\"\r\n            },\r\n        ]\r\n        // et bien retourner le tableau photographers seulement une fois récupéré\r\n        //console.log ({ photographers: [...photographers, ...photographers, ...photographers]})\r\n    return await fetch('assets/data/photographers.json').then((response) =>\r\n        response.json()\r\n    ) \r\n}\r\n\r\nasync function getPhotographerPage() {\r\n\r\n    return await fetch('../assets/data/photographers.json').then((response) =>\r\n        response.json()\r\n    ) \r\n}\r\n\r\nasync function displayData(photographers) {\r\n        const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n        photographers.forEach((photographer) => {\r\n            const photographerModel = (0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerTemplate)(photographer);\r\n            const userCardDOM = photographerModel.getUserCardDOM();\r\n            photographersSection.appendChild(userCardDOM);\r\n        });\r\n}\r\n\r\nasync function init() {\r\n        // Récupère les datas des photographes\r\n        const { photographers } = await getPhotographers()\r\n        displayData(photographers)\r\n}\r\n\r\nasync function photographerForm(idForm) {\r\n    // Récupère les datas des photographes\r\n    const { media, photographers } = await getPhotographerPage()\r\n    //const photographer = photographers.find((item)=>item.id === idForm)\r\n    let p\r\n    let result = []\r\n\r\n    photographers.forEach((photographer) => {\r\n        if(photographer.id == idForm){\r\n            \r\n            p = photographer\r\n        }\r\n    })\r\n\r\n    media.forEach((m)=>{\r\n        if(m.photographerId == idForm)\r\n        {   \r\n            result.push(m)\r\n        }\r\n    })\r\n\r\n    ;(0,_templates_photographer__WEBPACK_IMPORTED_MODULE_0__.photographerPageTemplate)(p,result)\r\n}\r\n    \r\n    \r\n    \r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/pages/photographers.js?");

/***/ }),

/***/ "./assets/js/templates/photographer.js":
/*!*********************************************!*\
  !*** ./assets/js/templates/photographer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   photographerPageTemplate: () => (/* binding */ photographerPageTemplate),\n/* harmony export */   photographerTemplate: () => (/* binding */ photographerTemplate)\n/* harmony export */ });\n/* harmony import */ var _factory_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/media */ \"./assets/js/factory/media.js\");\n\r\n\r\nfunction photographerTemplate(data) {\r\n    //console.log(\"Template : \"+data)\r\n    const { name, portrait, city, country, id , tagline, price } = data\r\n\r\n    //const picture = `assets/photographers/${portrait}`;\r\n    const picture = `assets/images/Photographers_ID_Photos/${portrait}`\r\n    \r\n    function getUserCardDOM() {\r\n        const article = document.createElement( 'article' )\r\n        article.setAttribute('id', id);\r\n        article.setAttribute('arial-label', \"User Card\");\r\n\r\n        const img = document.createElement( 'img' )\r\n        img.setAttribute(\"src\", picture)\r\n        img.setAttribute(\"alt\", \"Portrait de \" + name)\r\n        \r\n        const h2 = document.createElement( 'h2' )\r\n        h2.textContent = name\r\n\r\n        const p1 = document.createElement( 'p' )\r\n        p1.textContent = city + \", \" + country\r\n        p1.classList.add('color__secondary')\r\n\r\n        const p2 = document.createElement( 'p' )\r\n        p2.textContent = tagline\r\n\r\n        const p3 = document.createElement( 'p' )\r\n        p3.textContent = price + \"€/jour\"\r\n        p3.classList.add('color__secondary-empty')\r\n        const a = document.createElement( 'a' )\r\n        a.setAttribute(\"href\", \"/pages/photographer.html?id=\"+id)\r\n\r\n        article.appendChild(img)\r\n        article.appendChild(h2)\r\n        article.appendChild(p1)\r\n        article.appendChild(p2)\r\n        article.appendChild(p3)\r\n        a.appendChild(article)\r\n         \r\n        return (a)\r\n    }\r\n    return { name, picture, getUserCardDOM }\r\n}\r\n\r\nfunction photographerPageTemplate(photographer,media) {\r\n\r\n    //const { name, portrait, city, country, id , tagline, price } = photographer\r\n\r\n    const picture = `../assets/images/Photographers_ID_Photos/${photographer.portrait}`\r\n    \r\n    const section = document.createElement( 'section' )\r\n    section.setAttribute('id', photographer.id);\r\n\r\n\r\n    const h2 = document.createElement( 'h2' )\r\n    h2.textContent = photographer.name\r\n    h2.classList.add('title__primary')\r\n\r\n    const p1 = document.createElement( 'p' )\r\n    p1.textContent = photographer.city + \", \" + photographer.country\r\n    p1.classList.add('title__secondary')\r\n\r\n    const p2 = document.createElement( 'p' )\r\n    p2.textContent = photographer.tagline\r\n    p2.classList.add('color__secondary-empty')\r\n\r\n    section.appendChild(h2)\r\n    section.appendChild(p1)\r\n    section.appendChild(p2)\r\n\r\n    const pageSection = document.querySelector(\".photograph-header\")\r\n    pageSection.classList.add('title')\r\n    pageSection.insertBefore(section,pageSection.firstChild)\r\n    \r\n    const img = document.createElement( 'img' )\r\n    img.setAttribute(\"src\", picture)\r\n    img.setAttribute(\"alt\", \"Portrait de \" + photographer.name)\r\n    img.classList.add('title__img')\r\n\r\n    pageSection.appendChild(img)\r\n\r\n    //Factory Media items \r\n    const allMedia =[]\r\n\r\n    \r\n    media.forEach((m)=>{\r\n        allMedia.push(_factory_media__WEBPACK_IMPORTED_MODULE_0__.createMedia(m.title, m.image, m.video, m.likes, m.photographerId))\r\n    })\r\n\r\n    //Trie\r\n    \r\n    const sectionMedia = document.createElement( 'section' )\r\n    sectionMedia.classList.add('media')\r\n    //Affiche\r\n    allMedia.forEach((m)=>{\r\n        sectionMedia.appendChild(m.getCardDOM())\r\n    })\r\n    \r\n    document.body.appendChild(sectionMedia)\r\n\r\n    const overlay = document.createElement( 'overlay' )\r\n\r\n    overlay.classList.add('photographer__overlay')\r\n    overlay.textContent = photographer.price + \"€ / jour\"\r\n    document.body.appendChild(overlay)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/templates/photographer.js?");

/***/ }),

/***/ "./assets/js/utility/modal.js":
/*!************************************!*\
  !*** ./assets/js/utility/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   close: () => (/* binding */ close),\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\nfunction display(modal){\r\n    modal.style.display = \"block\"\r\n}\r\nfunction close(modal){\r\n    modal.style.display = \"none\"\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./assets/js/utility/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/utility/modal */ \"./assets/js/utility/modal.js\");\n/* harmony import */ var _assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/pages/photographers */ \"./assets/js/pages/photographers.js\");\n/* harmony import */ var _assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sass/style.sass */ \"./assets/sass/style.sass\");\n//Mettre le code JavaScript lié à la page photographer.html\r\n/**IMPORT */\r\n\r\n\r\n\r\n\r\n/**VARIABLES */\r\nconst modalForm = document.getElementById('contact_modal')\r\nconst btnContact = document.querySelector(\".contact_button\")\r\nconst btnCloseModal = document.querySelector(\".button__close\")\r\nlet params = new URL(document.location).searchParams\r\nlet id = params.get(\"id\")\r\n\r\n/** EVENTS */\r\n/**UTILISER ARIA-HIDDEN ??????????????????????  */\r\nbtnContact.addEventListener(\"click\", function(){\r\n    _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__.display(modalForm)\r\n})\r\nbtnCloseModal.addEventListener(\"click\", function(){\r\n    _assets_js_utility_modal__WEBPACK_IMPORTED_MODULE_0__.close(modalForm)\r\n})\r\n\r\n\r\n_assets_js_pages_photographers__WEBPACK_IMPORTED_MODULE_1__.photographerForm(id)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/photographer.js?");

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