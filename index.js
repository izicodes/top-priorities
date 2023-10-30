document.addEventListener("DOMContentLoaded", function () {
	//  Variables
	const checkmarks = document.querySelectorAll(".checkmark");
	const optionsH3 = document.querySelectorAll(".options_container h3");

	optionsH3.forEach((h3) => {
		h3.addEventListener("click", () => {
			let container = h3.parentElement;
			let i = h3.querySelector("i");
			let select_wrapper = container.querySelector(".select_wrapper");

			if (select_wrapper.classList.contains("hide")) {
				select_wrapper.classList.remove("hide");

				i.classList.remove("fa-caret-down");
				i.classList.add("fa-caret-up");
			} else {
                select_wrapper.classList.add("hide");
                i.classList.remove("fa-caret-up");
				i.classList.add("fa-caret-down");
			}
		});
	});

	checkmarks.forEach((checkmark) => {
		checkmark.addEventListener("click", function () {
			checkmark.classList.toggle("clicked");
		});
	});
});
