

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
}

function invesee () {
    for (i=0;i<items.length;i++) {
        items[i].style.display = 'none'
    }   
}