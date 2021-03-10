let input = document.getElementById("search");

function tap () {
        input.classList.toggle("noVisible")
};

let buttonSearch = document.querySelector(".search")

buttonSearch.addEventListener('click', tap);