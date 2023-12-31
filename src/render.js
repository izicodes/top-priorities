// Get the current URL
const url = new URL(window.location.href);

// Extract the color and name parameters from the URL
let size = url.searchParams.get("size");
const theme = url.searchParams.get("theme");
const tfont = url.searchParams.get("tfont");
const bfont = url.searchParams.get("bfont");
const currentWidgetName = url.searchParams.get("widget");

//  The text inputs
const textInputs = document.querySelectorAll(".itemBox input[type=text]");

// Check if both color and name parameters are present
if (size && theme && tfont && bfont) {
	//  Size
	document.querySelector("#render_section").style.maxWidth = size;
	document.querySelector("#render_section").style.minWidth = size;

	//  Theme
	let currentMode = document.querySelector("#render_section").classList;
	currentMode.remove(...currentMode);
	document.querySelector("#render_section").classList.add(theme);

	//  Title Font
	switch (tfont) {
		case "gloock":
			document.querySelector("#render_section h1").style.fontFamily = "Gloock', serif";
			break;
		case "geologica":
			document.querySelector("#render_section h1").style.fontFamily = "'Geologica', sans-serif";
			break;
		case "gideon":
			document.querySelector("#render_section h1").style.fontFamily = "'Gideon Roman', serif";
			break;
		case "playfair":
			document.querySelector("#render_section h1").style.fontFamily = "'Playfair', serif";
			break;
		case "pixelifysans":
			document.querySelector("#render_section h1").style.fontFamily = "'Pixelify Sans', sans-serif";
			break;
		case "ysabeausc":
			document.querySelector("#render_section h1").style.fontFamily = "'Ysabeau SC', sans-serif";
			break;
		default:
			break;
	}

	//  Body Font
	textInputs.forEach(function (input) {
		switch (bfont) {
			case "onest":
				input.style.fontFamily = "'Onest', sans-serif";
				break;
			case "geologica":
				input.style.fontFamily = "'Geologica', sans-serif";
				break;
			case "gideon":
				input.style.fontFamily = "'Gideon Roman', serif";
				break;
			case "playfair":
				input.style.fontFamily = "'Playfair', serif";
				break;
			case "ubuntumono":
				input.style.fontFamily = "'Ubuntu Mono', monospace";
				break;
			case "courierprime":
				input.style.fontFamily = "'Courier Prime', monospace";
				break;
			default:
				break;
		}
		if (bfont == "playfair") {
			input.style.fontSize = "0.9rem";
		} else {
			input.style.fontSize = "0.85rem";
		}
	});
} else {
	// Handle the case where one or both parameters are missing
	console.log("Both color and name parameters are required in the URL.");
}

//  The functionality to the tick boxes
document.querySelectorAll(".checkmark").forEach((checkmark) => {
	checkmark.addEventListener("click", function () {
		const icon = checkmark.querySelector("i");
		let parent = checkmark.parentElement;
		let textInput = parent.querySelector("input[type=text]");

		if (icon.classList.contains("fa-check")) {
			icon.classList.remove("fa-check");
			textInput.style.textDecoration = "none";
		} else {
			icon.classList.add("fa-check");
			textInput.style.textDecoration = "line-through";
		}
	});
});

let retrievedTasks = JSON.parse(localStorage.getItem(currentWidgetName));

if (retrievedTasks) {
	for (let i = 0; i < Math.min(retrievedTasks.length, textInputs.length); i++) {
		textInputs[i].value = retrievedTasks[i].textInput;

		let icons = document.querySelectorAll("i");

		if (retrievedTasks[i].completed) {
			icons[i].classList.add("fa-check");
		} else {
			icons[i].classList.remove("fa-check");
		}
	}
}

//  Set the tasks to localStorage so they don't disappear when you refresh the page
setInterval(() => {
	let savedTasks = [];

	textInputs.forEach((input) => {
		let parent = input.parentElement;
		const icon = parent.querySelector("i");
		let completed = true;

		if (icon.classList.contains("fa-check")) {
			completed = true;
		} else {
			completed = false;
		}

		const task = {
			textInput: input.value,
			completed: completed,
		};
		savedTasks.push(task);
	});

	localStorage.setItem(currentWidgetName, JSON.stringify(savedTasks));

	document.querySelectorAll(".checkmark").forEach((checkmark) => {
		const icon = checkmark.querySelector("i");
		let parent = checkmark.parentElement;
		let textInput = parent.querySelector("input[type=text]");

		//  if the text input is empty - no tick
		if (textInput.value == "") {
			icon.classList.remove("fa-check");
		}

		if (icon.classList.contains("fa-check")) {
			textInput.style.textDecoration = "line-through";
		} else {
			textInput.style.textDecoration = "none";
		}
	});
}, 100);
