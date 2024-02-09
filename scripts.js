let diss = document.getElementsByClassName('diss')
let first = document.getElementsByClassName('first')
let second = document.getElementsByClassName('second')

let textArr = [
    "Ты уверена?",
    "Давай я тебе помогу",
    "Я сейчас уберу эту кнопку",
    "Подумай лучше",
]

function move() {

    if (textArr.length == 0) {
        diss[0].style = 'display: none;'
    } else {
    
        diss[0].value = textArr[textArr.length - 1]
        textArr.pop();
    }

}

function clickkk() {
    console.log(first)
    first[0].style = 'display: none;'
    second[0].style = 'display: block;'
}

