let api = "https://finance-app-wepro.herokuapp.com/"
let routes = {
    register: "wallet/new",
}

// Регистрация пользователя
let form = document.querySelector('form')
let input = document.querySelectorAll('input')
console.log(api + routes.login);
const set_field_error = (element, text) => {
    element.classList.remove('nice')
    element.classList.add('bad')
    element.getAttribute('class', text)
    for (let item of input) {
        item.classList.add('bad')
        let p = document.createElement("p");
        item.after(p)
        p.classList.add('dont_hit')
        p.innerText = 'Ведите все правельно'
    }
}
form.onsubmit = () => {
    event.preventDefault()

    let obj = {}
    let fm = new FormData(form)
    obj.user = Math.random()

    fm.forEach((value, key) => {
        obj[key] = value
        console.log(obj);
    })
    axios.post(api + routes.register, obj)
        .then(res => {
            if (res.status == 200 || res.status == 201) {
                localStorage.wolet = JSON.stringify(obj)
                window.location.href = "./index3.html"
                return
            } else console.log('я даун');
        })
}