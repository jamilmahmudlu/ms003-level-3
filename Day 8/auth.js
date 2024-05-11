const username = document.getElementById('username');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const password = document.getElementById('password');
const formRegister = document.getElementById('formRegister');

async function registerUser(e) {
    e.preventDefault()

    const user = {
        username: username.value,
        email: email.value,
        fullname: fullname.value,
        password: password.value,
        isActive: true
    }

    const resJson = await fetch("http://localhost:4444/users/create", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const result = await resJson.json()
    console.log(result)

}

const onLoad = async() =>{
    formRegister.addEventListener('submit', registerUser)
}

document.addEventListener('DOMContentLoaded', onLoad)