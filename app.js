let darkmode = document.querySelector('#mySwitch')
darkmode.addEventListener('change', ozgar)

function ozgar() {
    if (!darkmode.checked) {
        let body = document.querySelector('body')
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    } else {
        let body = document.querySelector('body')
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    }
}



