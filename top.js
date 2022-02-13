let email = document.querySelector('.email')
let idk = document.querySelector('.idk')
let web = document.querySelector('.name')
let ser = document.querySelector('.ser')

let user = JSON.parse(localStorage.user)

email.innerText = user.email
idk.innerText = user.email + ' '
web.innerText = user.name + ' '
ser.innerText = user.secondName
