import * as photographers from "../assets/js/pages/photographers";
import {sass} from "../assets/sass/style.sass";

photographers.init();

document.addEventListener("keydown", function(event) {
    const lastElement = document.querySelector(".photographer_section").lastChild;
    const firstElement = document.querySelector(".logo");
    if (event.key === " " || event.key === "Spacebar") {
        const activeItem = document.activeElement;
        if (activeItem.classList.contains("photographer__page")) {
            window.location.href = "photographer.html?id=" + activeItem.getAttribute("id");
        }
    }
    photographers.loopTabindex(event, firstElement, lastElement);
});

