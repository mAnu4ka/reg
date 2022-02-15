let email = document.querySelector('.email')
let idk = document.querySelector('.idk')
let web = document.querySelector('.name')
let ser = document.querySelector('.ser')
let greed = document.querySelector('.greed')

let user = JSON.parse(localStorage.user)

email.innerText = user.email
idk.innerText = user.email + ' '
web.innerText = user.name + ' '
ser.innerText = user.secondName

let wolet = JSON.parse(localStorage.wolet)
let wolet_2 = []
wolet_2.push(wolet)
if (wolet_2.length >= 1) {
    for (let item of wolet_2) {
        let div = document.createElement('div')
        let rub = document.createElement('p')
        let p = document.createElement('p')

        rub.innerText = item.currency
        p.innerText = item.name
        rub.classList.add('rub')
        div.classList.add('item', 'i1')

        greed.append(div)
        div.append(p, rub)
    }
} else createEror('кошелькa') 

let transaction = JSON.parse(localStorage.trans)

if (transaction.length >= 1) createElement()
else createEror('транзакции')

const createElement = () => {
    for (let item of transaction) {
        let div1 = document.createElement('div')
        let sp1 = document.createElement('span')
        let sp2 = document.createElement('span')
        let sp3 = document.createElement('span')
        let sp4 = document.createElement('span')
        let sp5 = document.createElement('span')

        sp1.innerText = item.id
        sp2.innerText = item.wallet
        sp3.innerText = item.category
        sp4.innerText = item.note
        sp5.innerText = item.ammount
        div1.classList.add('trans')

        greed.append(div1)
        div1.append(sp1, sp2, sp3, sp4, sp5)
    }
}
const createEror = (text) =>{
    let p = document.createElement('p')

    p.innerText = 'У вас нет' + text +':('
    p.classList.add("sorry")
    greed.append(p)
}