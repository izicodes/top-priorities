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
    const bodyTexts = document.querySelectorAll(".itemBox input[type=text]");
    const defaultBodyFont = document.querySelector('[data-bfont="onest"]');


	setInterval(() => {
        UpdateBodyFont();
	}, 100);

	selectClickEvent(widgetSizeItems);
	selectClickEvent(themeItems);
	selectClickEvent(titleFontItems);
	selectClickEvent(bodyFontItems);

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
        //  Body text selected font
        let bodySelectedFont = document.querySelector(".select_font_body .mySelect");
        if (bodySelectedFont == null) {
            defaultBodyFont.classList.toggle("mySelect");
            bodyTexts.forEach(function (input) {
                input.style.fontFamily = "'Onest', sans-serif";
            });
        }
        
        else {
            let bfont = bodySelectedFont.dataset.bfont;
            bodyTexts.forEach(function (input) {
                switch (bfont) {
                    case "onest":
                        input.style.fontFamily = "'Onest', sans-serif";
                        input.style.fontSize = "0.9rem";
    
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
                }
                else {
                    input.style.fontSize = "0.85rem";
                }
            })
        }
    }

    function UpdateTitleFont() {
        let bodySelectedFont = document.querySelector(".select_font_body .mySelect");
        if (bodySelectedFont == null) {
            defaultBodyFont.classList.toggle("mySelect");
            bodyTexts.forEach(function (input) {
                input.style.fontFamily = "'Onest', sans-serif";
            });
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




