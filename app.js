var letterArray;

$(document).ready(function() {
	letterArray = createLetterArray();

	$(document).on("click", changeLetter);
	$(document).on("touchstart", changeLetter);
	$(document).on("keyup", changeLetter);

	$(window).on("resize", function() {
		$("#letters").css("left", ($(window).width() - $("#letters").outerWidth()) * .5)
			.css("top", ($(window).height() - $("#letters").outerHeight()) * .4);
	});

	changeLetter();
});


function changeLetter() {
	var letterIndex = Math.floor(Math.random() * letterArray.length);

	$("#letters").removeClass("active").addClass("inactive");

	setTimeout(function() {
		$("#letters").html(letterArray[letterIndex])
			.removeClass("inactive")
			.css("left", ($(window).width() - $("#letters").outerWidth()) * .5)
			.css("top", ($(window).height() - $("#letters").outerHeight()) * .4)
			.addClass("active");

		letterArray.remove(letterIndex);

		if (letterArray.length == 0) {
			letterArray = createLetterArray();
		}

		return false;
	}, 150);

	return false;
}


function createLetterArray() {
	var letters = [];
	
	for (var i = 0; i < 26; i++) {
		letters.push(String.fromCharCode(i + 65) + String.fromCharCode(i + 97));
	}
	
	return letters;
}


// Function by John Resig, MIT licensed
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
