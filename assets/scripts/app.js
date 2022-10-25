const addModal = document.getElementById("add-modal")
const addMovieButton = document.querySelector("header button")
const backdrop = document.getElementById("backdrop")
const cancelBtn = addModal.lastElementChild.firstElementChild
const addBtn = cancelBtn.nextElementSibling
const userInputs = document.querySelectorAll("input")

const movies = []

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible")
}

const toggleModalView = () => {
	addModal.classList.toggle("visible")
	toggleBackdrop()
}

const backdropClick = () => {
	toggleModalView()
}

const clearInputs = () => {
	for (inputs of userInputs) {
		inputs.value = ""
	}
}

const addMovie = () => {
	const title = userInputs[0].value
	const imageURL = userInputs[1].value
	const rating = userInputs[2].value
	
	if (title.trim() === "" || imageURL.trim() === "" || rating.trim() === "" ) {
		alert("Please enter valid non empty input")
		return
	} else if ( +rating < 1 || +rating > 5  ) {
		alert("Please enter a rating between 1 and 5")
		return
	}
	
	const movie = {
		title, imageURL, rating
	}
	
	movies.push(movie)
	toggleModalView()
	clearInputs()
}

const cancelAddMovie = () => {
	toggleModalView()
	clearInputs()
}

addMovieButton.addEventListener("click", toggleModalView)

backdrop.addEventListener("click", backdropClick)

cancelBtn.addEventListener("click", cancelAddMovie)

addBtn.addEventListener("click", addMovie)