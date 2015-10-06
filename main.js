var el;

function getLastModifiedText() {
	var lastModified = document.lastModified;
	if (typeof lastModified == "string" && lastModified.length > 0) {
		lastModified = new Date(lastModified).toISOString();
		return "<strong>Last Modified:</strong><br>" + lastModified + "<br><em>(timezone is UTC)</em>";
	} else {
		return "Could not determine a last modified date.";
	}
}

function showElement() {
	if (!el) {
		var lastModified = document.lastModified,
		el = document.createElement("div");
		el.className = "last-modified visible";
		el.innerHTML = getLastModifiedText();
		el.onclick = function(e) {
			e.preventDefault();
			hideElement(e.target);
		}
		document.body.appendChild(el);
	} else {
		el.className = "last-modified visible";
	}
}

function hideElement(el) {
	el.className = "last-modified hidden";
}

window.onload = function() {
	showElement();
}
