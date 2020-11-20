const prevBtn = document.querySelector('#btn-prev'),
    nextBtn = document.querySelector('#btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot')

let index = 0;
console.log(dots)
const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = (parameter) => {
    activeSlide(parameter)
    activeDot(parameter)
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
        clearInterval(interval)
    })
})




nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)


