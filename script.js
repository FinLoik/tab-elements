

// при нажатии убирались все кроме нужных tab

// let items = document.querySelectorAll('.img-container')

// function invsee (i) {
//     for (i;i < items.length; i++) {
//         items[i].style.display = 'none'
//     }
// } 
// invsee(1)

// let tab = document.querySelectorAll('.tab-element')

// tab.forEach(function(element) {
//     element.onclick = showF
// })

// function showF () {
//     invsee(0)
//     let data = this.getAttribute('data')

//     document.querySelector(`.img-container[data="${data}"]`).style.display = 'block'


//     tab.forEach(function (element) {
//         element.classList.remove('active')
//     })

//     this.classList.add("active");
// }

let items = document.querySelectorAll('.img-container')
let tab = document.querySelectorAll('.tab-element')

tab.forEach(function(element) {
    element.onclick = galleryF
})

function galleryF () {
    let data = this.getAttribute('data')
    invesee()
    document.querySelector(`.img-container[data="${data}"]`).style.display = 'block'

    tab.forEach(function(element) {
        element.classList.remove('active')
    })
    this.classList.add('active')
}

function invesee () {
    for (i=0;i<items.length;i++) {
        items[i].style.display = 'none'
    }   
}

// -------------------------------------
document.querySelector('.point').onmouseenter = function () {
    this.style.display = 'none'
} 
document.querySelector('.action-btn-section button').ondblclick = function () {
    this.innerHTML = 'Coupon - #JECK2241'
    console.log(this.innerHTML)
} 

// circle
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

  
document.querySelector('.rainbow-circle').onmousewheel = function () {
    let r,g,b
    r = random(1,999)
    g = random(1,999)
    b = random(1,999)
    console.log(r,g,b)
    this.style.backgroundColor = `rgb(${r},${g},${b})`
    document.querySelector('.rainbow-circle p').innerHTML = `rgb (${r},${g},${b})`
    return false
}