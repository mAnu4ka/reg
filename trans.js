let api = "https://finance-app-wepro.herokuapp.com/"
let routes = {
    register: "transactions/new",
}
let form = document.querySelector('form')

form.onsubmit = () => {
    event.preventDefault()
    
    let obj = {}
    let fm = new FormData(form)
    
    fm.forEach((value, key) => {
        obj[key] = value
        obj.wallet = Number(obj.wallet)
        var date = new Date()
        obj.ammount = date.getHours(),
        obj.type = "exprense"
        obj.id = Math.random()

        console.log(obj);
    })
    axios.post(api + routes.register, obj)
        .then(res => {
            if (res.status == 201 || res.status == 200) {
                let trans_2 = []
                trans_2.push(obj)
                localStorage.trans = JSON.stringify(obj)
                window.location.href = "./index3.html"
                return
            }
        })
}