document.addEventListener("DOMContentLoaded", function () {
	//  Variables
	const checkmarks = document.querySelectorAll(".checkmark");
	const optionsH3 = document.querySelectorAll(".options_container h3");
	const widgetSizeItems = document.querySelectorAll(".select_widget_size .select_item");
	const themeItems = document.querySelectorAll(".select_theme .select_item");
	const titleFontItems = document.querySelectorAll(".select_font_title .select_item");
	const bodyFontItems = document.querySelectorAll(".select_font_body .select_item");
	const linkTextInput = document.querySelector("#linkTextInput");
	const widgetPagePreviewBtn = document.querySelector("#widgetPagePreviewBtn");
	const copyLinkBtn = document.querySelector("#copyLinkBtn");
	const uniqueNameTextInput = document.querySelector("#uniqueNameTextInput");

	//  Render Box variables
	const renderH1 = document.querySelector("#render_section h1");
	const renderSection = document.querySelector("#render_section");
	const bodyTexts = document.querySelectorAll(".itemBox input[type=text]");
	const defaultBodyFont = document.querySelector('[data-bfont="onest"]');
	const defaultTitleFont = document.querySelector('[data-tfont="gloock"]');
	const defaultTheme = document.querySelector('[data-theme="brown"]');
	const defaultSize = document.querySelector('[data-size="250px"]');

	setInterval(() => {
		UpdateBodyFont();
		UpdateTitleFont();
		UpdateThemeColor();
		UpdateWidgetSize();
		UpdateLink();
	}, 100);

	selectClickEvent(widgetSizeItems);
	selectClickEvent(themeItems);
	selectClickEvent(titleFontItems);
	selectClickEvent(bodyFontItems);

	function UpdateThemeColor() {
		let themeSelected = document.querySelector(".select_theme .mySelect");

		if (themeSelected == null) {
			defaultTheme.classList.toggle("mySelect");
			renderSection.classList.add("brown");
		} else {
			let themeName = themeSelected.dataset.theme;
			let currentTheme = renderSection.dataset.current;

			if (currentTheme == themeName) {
				renderSection.classList.add(themeName);
			} else {
				renderSection.classList.remove(currentTheme);

				switch (themeName) {
					case "brown":
						renderSection.classList.add("brown");
						renderSection.dataset.current = themeName;
						break;
					case "green":
						renderSection.classList.add("green");
						renderSection.dataset.current = themeName;
						break;
					case "pink":
						renderSection.classList.add("pink");
						renderSection.dataset.current = themeName;
						break;
					case "blue":
						renderSection.classList.add("blue");
						renderSection.dataset.current = themeName;
						break;
					case "dark":
						renderSection.classList.add("dark");
						renderSection.dataset.current = themeName;
						break;
					case "light":
						renderSection.classList.add("light");
						renderSection.dataset.current = themeName;
						break;
					default:
						break;
				}
			}
		}
	}

	function UpdateWidgetSize() {
		let sizeSelected = document.querySelector(".select_widget_size .mySelect");

		if (sizeSelected == null) {
			defaultSize.classList.toggle("mySelect");
			renderSection.style.maxWidth = defaultSize.dataset.size;
			renderSection.style.minWidth = defaultSize.dataset.size;
		} else {
			let size = sizeSelected.dataset.size;

			switch (size) {
				case "250px":
					renderSection.style.maxWidth = size;
					renderSection.style.minWidth = size;
					break;
				case "350px":
					renderSection.style.maxWidth = size;
					renderSection.style.minWidth = size;
					break;
				case "450px":
					renderSection.style.maxWidth = size;
					renderSection.style.minWidth = size;
					break;
				default:
					break;
			}
		}
	}

	function UpdateBodyFont() {
		let bodySelectedFont = document.querySelector(".select_font_body .mySelect");

		if (bodySelectedFont == null) {
			defaultBodyFont.classList.toggle("mySelect");
			bodyTexts.forEach(function (input) {
				input.style.fontFamily = "'Onest', sans-serif";
			});
		} else {
			let bfont = bodySelectedFont.dataset.bfont;
			bodyTexts.forEach(function (input) {
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
		}
	}

	function UpdateTitleFont() {
		let titleSelectedFont = document.querySelector(".select_font_title .mySelect");

		if (titleSelectedFont == null) {
			defaultTitleFont.classList.toggle("mySelect");
			renderH1.style.fontFamily = "'Gloock', serif";
		} else {
			let tfont = titleSelectedFont.dataset.tfont;
			switch (tfont) {
				case "gloock":
					renderH1.style.fontFamily = "Gloock', serif";
					break;
				case "geologica":
					renderH1.style.fontFamily = "'Geologica', sans-serif";
					break;
				case "gideon":
					renderH1.style.fontFamily = "'Gideon Roman', serif";
					break;
				case "playfair":
					renderH1.style.fontFamily = "'Playfair', serif";
					break;
				case "pixelifysans":
					renderH1.style.fontFamily = "'Pixelify Sans', sans-serif";
					break;
				case "ysabeausc":
					renderH1.style.fontFamily = "'Ysabeau SC', sans-serif";
					break;
				default:
					break;
			}
		}
	}

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

	function selectClickEvent(set) {
		set.forEach((item) => {
			item.addEventListener("click", function () {
				// Toggle the "mySelect" class for the clicked item
				item.classList.toggle("mySelect");

				// Remove the "mySelect" class from other items in the set
				set.forEach((otherItem) => {
					if (otherItem !== item) {
						otherItem.classList.remove("mySelect");
					}
				});
			});
		});
	}

	function UpdateLink() {
		let widgetID = uniqueNameTextInput.value;
		uniqueNameTextInput.style.borderColor = "#cbb7ac";
		document.querySelector("#errorMsg").style.opacity = 0;
		document.querySelector("#errorMsg").dataset.error = "off";
		widgetPagePreviewBtn.style.cursor = "pointer";
		linkTextInput.style.cursor = "text";

		if (widgetID == "") {
			widgetID = "widget1";
			AddLink(widgetID);
		} else if (/[^a-zA-Z0-9\s]/.test(widgetID)) {
			errorMsg("No special characters and spaces");
		} else if (widgetID.includes(" ")) {
			errorMsg("No spaces");
		} else {
			AddLink(widgetID);
		}
	}

	function errorMsg(error) {
		document.querySelector("#errorMsg").style.opacity = 1;
		uniqueNameTextInput.style.borderColor = "#ba1616";
		document.querySelector("#errorMsg").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ` + error;
		linkTextInput.value = "";
		widgetPagePreviewBtn.style.cursor = "no-drop";
		linkTextInput.style.cursor = "no-drop";
		document.querySelector("#errorMsg").dataset.error = "on";
	}

	function AddLink(widgetID) {
		//  Getting the current URL from the tab
		let url = new URL(window.location.href);
		let defaultLink = url.href;

		defaultLink = defaultLink.replace("index.html", "p/");

		//  The variables of the chosen options
		let chosenSize = document.querySelector(".select_widget_size .mySelect").dataset.size;
		let chosenTheme = document.querySelector(".select_theme .mySelect").dataset.theme;
		let chosenTitleFont = document.querySelector(".select_font_title .mySelect").dataset.tfont;
		let chosenBodyFont = document.querySelector(".select_font_body .mySelect").dataset.bfont;

		let query = "?size=" + chosenSize + "&theme=" + chosenTheme + "&tfont=" + chosenTitleFont + "&bfont=" + chosenBodyFont + "&widget=" + widgetID;

		let newLink = defaultLink + query;

		linkTextInput.value = newLink;
	}

	widgetPagePreviewBtn.addEventListener("click", () => {
		if (document.querySelector("#errorMsg").dataset.error == "off") {
			let link = linkTextInput.value;
			let a = document.createElement("a");
			a.href = link;
			a.click();
		}
	});

	copyLinkBtn.addEventListener("click", () => {
		if (document.querySelector("#errorMsg").dataset.error == "off") {
			linkTextInput.select();
			linkTextInput.setSelectionRange(0, 99999); // For mobile devices
			navigator.clipboard.writeText(linkTextInput.value);
			linkTextInput.style.boxShadow = "0px 0px 4px #58ac5cdf";

			setTimeout(() => {
				linkTextInput.style.boxShadow = "none";
				linkTextInput.selectionStart = linkTextInput.selectionEnd;
			}, 1500);
		}
	});
});
