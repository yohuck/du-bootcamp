
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]



// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	$("#factText").text(booFacts[number])
})








$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})




$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})



// $("#boxGrow").on("click", function() {
// 	// Increase the size of the box.
// 	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
// })

// // When the boxShrink button is clicked...
// $("#boxShrink").on("click", function() {
// 	// Decrease the size of the box.
// 	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
// })