

const options = document.querySelectorAll('.choice-btn')

options.forEach((btn,i) => {
    btn.addEventListener('click', ()=>{        
        window.location.href=`./result.html?score=${num}&you=${i}`
    })
})
