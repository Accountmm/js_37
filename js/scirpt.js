const product = {
    crazy: {
        name: "crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: "cheeseburger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: "dburger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop')


btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const parent = btn.closest(".card"),
            parentId = parent.getAttribute('id')
        product[parentId].amount++
        basketInfo()
    })
})

function basketInfo() {
    for (const key in product) {
        const pk = product[key]
        const productCard = document.querySelector(`#${key}`),
            span = productCard.querySelector('.card__item');
        if (pk.amount) {
            span.classList.add('active')
            span.innerHTML = pk.amount
        } else {
            span.classList.remove('active')
        }
    }
}
const cardImg = document.querySelectorAll('.card__img'),
    heaferImg = document.querySelector('.header__img');

cardImg.forEach(img => {
    img.addEventListener(`click`, function () {
        let atribute = img.getAttribute(`src`)
        return heaferImg.setAttribute(`src`,atribute) 
    })
})
// console.log(c_imgs);
// c_img.addEventListener(`click`,sendImg)

// function sendImg() {

// }