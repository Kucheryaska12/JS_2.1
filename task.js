const button = document.querySelector(".dropdown");
const dropdown__value = document.querySelector(".dropdown__value");
const dropdown__list = document.querySelector(".dropdown__list");


const toggleDropdownList = function() {
    dropdown__list.classList.toggle("dropdown__list_active");
}

button.addEventListener("click", toggleDropdownList);

const buttonsList = document.querySelectorAll(".dropdown__item");
buttonsList.forEach((A) => {
    A.addEventListener("click", (event) => {
        event.preventDefault();
        toggleDropdownList();
        dropdown__value.textContent = A.textContent;
    });
})    
    