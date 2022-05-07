let words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
let winCount = 0;
let lossCount = 0;
let guessCount = 0;
let target = '';
let puzzle = "";


let randomWord = () => {
    return words[Math.floor(Math.random()*(words.length))]
}


let publicInformation = (word) => {
    let temp = [];
    for (let i = 0; i < word.length; i++) {
        temp.push("_")
    } return temp
}

let public = document.getElementById('public');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let button = document.getElementById('newWord')

document.addEventListener('keydown', function(event) {
    let guess = event.key
    if (target.includes(guess)) {
        for (i=0;i<target.length;i++) {
            if (target[i] == guess) {
              puzzle[i] = guess
            }
          }
        guessCount++;
        let targetIndex = target.indexOf(guess);
        let puzzleString = puzzle.join('')
        public.innerHTML = puzzleString

        if (target == puzzleString) {
            winCount++;
            wins.innerHTML = winCount;
        }
    } else guessCount ++;

    // console.log(guessCount)
})

// public.innerHTML = publicInformation(test);
wins.innerHTML = winCount;
losses.innerHTML = lossCount;

startTheGameFunc = () => {
    target = randomWord();
    puzzle = publicInformation(target)
    public.innerHTML = puzzle.join('')
    guessCount = 0;
    console.log(target)
}

startTheGameFunc();

// startTheGame.addEventListener('click', startTheGameFunc())

button.addEventListener('click', function (event){
    startTheGameFunc()
})