function create(elementType) {
	let newElement = document.createElement(elementType);
	for (let i = 1; i < arguments.length; i++) {
		let currentArgument = arguments[i];		
		if (typeof(currentArgument) === 'string') {
			newElement.innerHTML += currentArgument;
		} else if (Array.isArray(currentArgument)) {
			for (let j = 0; j < arguments[i].length; j++) {
				if (typeof(arguments[i][j]) === 'string') {
					newElement.innerHTML += currentArgument[j];		
				} else {	
					newElement.appendChild(currentArgument[j]);
				}
			}
		} else if (currentArgument instanceof Element) {
			newElement.appendChild(currentArgument);
		} else {
			Object.getOwnPropertyNames(currentArgument).forEach(
				function (val, idx, array) {
					newElement.setAttribute(val, currentArgument[val]);
				}
			);
		}
	}
	return newElement;
}

function makeCollapsing() {
	let expansionHeaders = document.getElementsByTagName("expansion-header");
	for (let i = 0; i < expansionHeaders.length; i++) {
		if (expansionHeaders[i].expandable) {continue;}
		let collapsingText = expansionHeaders[i].nextElementSibling;
		if (collapsingText.tagName != "COLLAPSING-TEXT") {
			console.log(collapsingText);
			throw "an expansion-header is not followed by a collapsing-text";
		}
		
		expansionHeaders[i].appendChild(create("div", "<", {id: "expand-arrow-" + i, style: "float: right;"}));		
		
		if (!collapsingText.getAttribute("data-expanded")) {			
			collapsingText.style.display = "none";
		} else {
			document.getElementById("expand-arrow-" + i).style.transform = "rotate(-90deg)";
		}
		
		
		
		expansionHeaders[i].addEventListener("click", () => {
			console.log(collapsingText);
			if (collapsingText.style.display == "none") {
				collapsingText.style.display = "block";
				document.getElementById("expand-arrow-" + i).style.transform = "rotate(-90deg)";
			} else {
				collapsingText.style.display = "none";
				document.getElementById("expand-arrow-" + i).style.transform = "rotate(0deg)";
			}
		}, false);
		expansionHeaders[i].expandable = true;
		
		
	}
}