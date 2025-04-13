const options = [
    {
        key: '0',
        path: '../images/icon-paper.svg',
        alt: 'paper'
    },
    {
        key: '1',
        path: '../images/icon-scissors.svg',
        alt: 'scissors'
    },
    {
        key: '2',
        path: '../images/icon-rock.svg',
        alt: 'rock'
    }
]

const newParams = new URLSearchParams(document.location.search);
if (!newParams.has('score') || !newParams.has('you')){
    window.location.href='./index.html'
}

const youImg = document.getElementById('you-img')
const youPicked = Number(newParams.get('you'))
youImg.src = options[youPicked].path
youImg.alt = options[youPicked].alt

const houseImg = document.getElementById('house-img')
const housePicked = Math.floor(Math.random()*options.length)
houseImg.src = options[housePicked].path
houseImg.alt = options[housePicked].alt

setTimeout(()=>{
    defineWinner()
}, 1000) 

let scoreNum = Number(newParams.get('score'))
const defineWinner = () =>{
    const resultTxt = document.querySelector('.results-txt')

    if (youPicked === housePicked){
        resultTxt.textContent = 'Tie'
    } else if (youPicked - housePicked > 0 || youPicked - housePicked === -2){
        resultTxt.textContent = 'You win'
        scoreNum += 1
    } else {
        resultTxt.textContent = 'You lose'
        scoreNum = scoreNum === 0 ? 0 : scoreNum - 1
    }
    console.log(scoreNum);
    
    defineScore(scoreNum)
    document.querySelector('.results-block').style = 'display:flex'
}


const againBtn = document.querySelector('.again-btn')
againBtn.addEventListener('click', ()=>{
    window.location.href=`./index.html?score=${scoreNum}`
})