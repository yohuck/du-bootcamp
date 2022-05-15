// Sets the time at the top of the page
let current = $("#currentDay");


let timeNow = 15;


// setInterval(function(){
//     current.text(moment().format('dddd, MMM Do. h:mm:ss a'));
//     timeNow = moment().format('HH.mm');
//     console.log(timeNow);
// }, 1000)

// Accesses the rows by time
let nineAM = $("#09");
let tenAM = $('#10');
let elevenAM = $('#11');
let twelvePM = $('#12');
let onePM = $('#13');
let twoPM = $('#14');
let threePM = $('#15');
let fourPM = $('#16');
let fivePM = $('#17');
let latePM = $('#23');

let workDay = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, latePM];

workDay.forEach( element => {
    if (element[0].id < timeNow){
        element[0].classList.add('past')
        console.log(element[0].id)
    } else if (element[0].id == timeNow ){
        element[0].classList.add('current')
    } else element[0].classList.add('future')
    element[0].addEventListener('click', function(){
        console.log(element[0].id)
    })
})