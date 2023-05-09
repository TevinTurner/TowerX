const container = document.querySelector('.container')
const text = document.querySelector('.text')

const totalBreatheTime = 7500
const breatheInTime = (totalBreatheTime / 5) * 2
const breatheOutTime = totalBreatheTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Inhale!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout (() => {
            text.innerText = 'Exhale!'
            container.className = 'container shrink'
        }, breatheOutTime)
    }, breatheInTime)
}

setInterval(breatheAnimation, totalBreatheTime)