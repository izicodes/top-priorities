document.addEventListener("DOMContentLoaded", function () {
    //  Variables
    const checkmarks = document.querySelectorAll(".checkmark");





	

	checkmarks.forEach((checkmark) => {
		checkmark.addEventListener("click", function () {
			checkmark.classList.toggle("clicked");
		});
	});
});
