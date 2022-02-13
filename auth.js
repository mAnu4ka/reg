// Настройки API
let api = "https://finance-app-wepro.herokuapp.com/"
let routes = {
    register: "auth/signup",
    login: "auth/login"
}

// Регистрация пользователя
let form = document.querySelector('form')
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
                console.log(user);
                if (user.email == obj.email && user.password == obj.password) {
                    window.location.href = "./index3.html"
                }
                return
            }

        })
}