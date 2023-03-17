console.log("Welcome to tic tac toe")
let music = new Audio("music.wav")
let ting = new Audio("Ting.mp3")
let turn = "X";
let game = 1;

const changeturn = () => {
    return turn === "X" ? "O" : "X"
}
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            game = 0;
            music.play();
            document.querySelector(".infogame").innerText = boxtexts[e[0]].innerText + " Won"
            
        }
    })

}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            checkwin();
            if (game === 1) {
                document.getElementsByClassName("infogame")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

btn.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X"
    game=1;
    document.getElementsByClassName("infogame")[0].innerText = "Turn for " + turn;
})