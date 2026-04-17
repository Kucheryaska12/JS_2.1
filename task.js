const button = document.querySelector(".dropdown");
const dropdown__value = document.querySelector(".dropdown__value");
const dropdown__list = document.querySelector(".dropdown__list");


button.addEventListener("click", function() {
    dropdown__list.classList.add("dropdown__list_active");
});

const buttonsList = document.querySelectorAll(".dropdown__item");
buttonsList.forEach((A) => {
    A.addEventListener("click", (event) => {
        event.preventDefault();
        dropdown__list.classList.remove("dropdown__list_active");
        dropdown__value.textContent = A.textContent;
    });
})    
    