let all = document.querySelectorAll('.text')
let forms = document.querySelectorAll('[name=' + 'regisrter' + ']')
let input = document.querySelectorAll('input')
let a = document.querySelector('a')
let api = "https://finance-app-wepro.herokuapp.com/"
let counter = 0
let routes = {
    register: "auth/signup",
    login: "auth/login"
}
let regexes = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    number: /^[0-9]+$/,
    name: /^[a-z ,.'-]+$/i,
    password: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
}

const set_field_success = (element) => {
    element.classList.remove('bad')
    element.classList.add('nice')
    element.getAttribute('class', 'nice')
}


const set_field_error = (element, text) => {
    element.classList.remove('nice')
    element.classList.add('bad')
    element.getAttribute('class', text)
}
for (let form of forms) {
    form.onsubmit = () => {
        event.preventDefault()
        let obj = {}
        let fm = new FormData(form)



        fm.forEach((a, b) => {
            obj[a] = b
            let field = form.querySelector('*[name=' + b + ']')
            let counter_have_to = form.querySelectorAll('*[name]').length

            if (field.getAttribute('data-required') !== null) {
                if (field.value.trim().length == 0) {
                    set_field_error(field, 'bad')
                    counter--
                    return
                } else if (field.getAttribute('data-regex')) {
                    if (regexes[field.getAttribute('data-regex')].test(field.value) == true) {
                        set_field_success(field, 'nice')
                        obj[b] = a
                        counter++
                        return
                    } else {
                        set_field_error(field, 'bad')
                        counter--
                        return
                    }
                }
                set_field_success(field, 'nice')
                obj[b] = a
                counter++
                return

            } else {
                set_field_success(field, 'nice')
                obj[b] = a
                counter++
                return
            }

        })
        axios.post(api + routes.register, obj)
            .then(res => {
                if (res.status == 200 || res.status == 201) {
                    localStorage.user = JSON.stringify(res.data)
                    window.location.href = "./index3.html"
                    return
                }

                throw new Error(":(")
            })
            .catch(err => {
                Error_nosack()
            })
        console.log(counter)
        console.log(input.length)
    }
}
const Error_nosack = (element, text) => {
    for (let item of input) {
        // item == set_field_success(field, 'nice')
    }
}