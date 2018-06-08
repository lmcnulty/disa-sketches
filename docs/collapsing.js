function makeCollapsing() {
	let expansionHeaders = document.getElementsByTagName("expansion-header");
	for (let i = 0; i < expansionHeaders.length; i++) {
		if (expansionHeaders[i].expandable) {continue;}
		let collapsingText = expansionHeaders[i].nextElementSibling;
		if (collapsingText.tagName != "COLLAPSING-TEXT") {
			console.log(collapsingText);
			throw "an expansion-header is not followed by a collapsing-text";
		}
		if (!collapsingText.getAttribute("data-expanded")) {			
			collapsingText.style.display = "none";
		}
		
		expansionHeaders[i].addEventListener("click", () => {
			console.log(collapsingText);
			if (collapsingText.style.display == "none") {
				collapsingText.style.display = "block";				
			} else {
				collapsingText.style.display = "none";
			}
		}, false);
		expansionHeaders[i].expandable = true;
	}
}