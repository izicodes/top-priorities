document.addEventListener("DOMContentLoaded", function () {
	//  Variables
	const checkmarks = document.querySelectorAll(".checkmark");
	const optionsH3 = document.querySelectorAll(".options_container h3");
	const widgetSizeItems = document.querySelectorAll(".select_widget_size .select_item");
	const themeItems = document.querySelectorAll(".select_theme .select_item");
	const titleFontItems = document.querySelectorAll(".select_font_title .select_item");
	const bodyFontItems = document.querySelectorAll(".select_font_body .select_item");

	//  Render Box variables
	const renderH1 = document.querySelector("#render_section h1");
	const renderSection = document.querySelector("#render_section");
	const bodyTexts = document.querySelectorAll(".itemBox input[type=text]");
	const defaultBodyFont = document.querySelector('[data-bfont="onest"]');
	const defaultTitleFont = document.querySelector('[data-tfont="gloock"]');
	const defaultTheme = document.querySelector('[data-theme="brown"]');

	setInterval(() => {
		UpdateBodyFont();
		UpdateTitleFont();
		UpdateThemeColor();
	}, 100);

	selectClickEvent(widgetSizeItems);
	selectClickEvent(themeItems);
	selectClickEvent(titleFontItems);
	selectClickEvent(bodyFontItems);

	function UpdateThemeColor() {
		let themeSelected = document.querySelector(".select_theme .mySelect");

		// let currentMode = document.documentElement.classList;
		// currentMode.remove(...currentMode);

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
});
