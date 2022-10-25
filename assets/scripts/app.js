const addModal = document.getElementById("add-modal")
const addMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")

const toggleModalView = () => {
	addModal.classList.toggle("visible")
}

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible")
}

addMovieButton.addEventListener("click", toggleModalView)