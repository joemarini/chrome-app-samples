window.addEventListener("load", function (e) {
	window.addEventListener("paste", function (e) {
		if (e.clipboardData.types && e.clipboardData.types.length > 0) {
			e.preventDefault();
			document.querySelector("#txt1").value = "There are " + e.clipboardData.types.length + " data formats on the clipboard\n";
			for (i=0; i< e.clipboardData.types.length; i++) {
				document.querySelector("#txt1").value += e.clipboardData.types[i] + "\n";
			}
		}
	});
});