
const options = document.querySelectorAll('.choice-btn')
const score = document.querySelector('.score-num')
const num = Number(score.textContent)
options.forEach((btn,i) => {
    btn.addEventListener('click', ()=>{        
        window.location.href=`../pages/result.html?score=${num}&you=${i}`
    })
})
