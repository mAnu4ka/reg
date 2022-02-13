// Настройки API
let api = "https://finance-app-wepro.herokuapp.com/"
let routes = {
    register: "auth/signup",
    login: "auth/login"
}

// Регистрация пользователя
let form = document.querySelector('form')
let input = document.querySelectorAll('input')
const Erroridk = () => {
    for (let item of input){
        item.classList.add('bad')
        let p = document.createElement("p");
        item.after(p)
        p.classList.add('dont_hit')
        p.innerText = 'Ведите все правельно'
    }
}
console.log(api + routes.login);
form.onsubmit = () => {
    event.preventDefault()

    let obj = {}
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value
    })
    console.log(obj);
    axios.get(api + routes.login, obj)
        .then(res => {
            if (res.status == 200 || res.status == 201) {
                let user = JSON.parse(localStorage.user)
                console.log(user.password);
                if (user.email == obj.email && user.password == obj.password) {
                    window.location.href = "./index3.html"
                    return
                } else {
                    Erroridk()
                }
                return
            }

        })
}