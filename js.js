const ourChoise = document.querySelectorAll(".feedback span")
const cardRating = document.querySelector(".rating")
const cardSelected = document.querySelector(".selected")
const numberSelect = document.querySelector(".number-selected")

ourChoise.forEach((el) => { 
    el.addEventListener("click", () => { 
        ourChoise.forEach(el => el.classList.remove("active"))
        numberSelect.innerHTML = el.innerHTML
        el.classList.add("active")
    })
})

const btn = document.querySelector(".btn")
btn.addEventListener("click", () => { 
    cardRating.classList.remove("show")
    cardSelected.classList.add("show")

})