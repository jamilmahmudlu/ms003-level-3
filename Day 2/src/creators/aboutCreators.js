const p = document.querySelector('.about-content p')
const ul = document.querySelector('.about-content ul')

const UlLiTemplate = (key,value) => {
    return `<li><span>${key}</span>${value}</li>`
}

export const bindAboutPart = (data) => {
    console.log(data)
    p.textContent = data.description
    ul.innerHTML = ''
    
    ul.innerHTML += UlLiTemplate("Full name", data.fullName)
    ul.innerHTML += UlLiTemplate("Birth date", data.birthDate)
    ul.innerHTML += UlLiTemplate("Address", data.address)
    ul.innerHTML += UlLiTemplate("Email", data.email)
    ul.innerHTML += UlLiTemplate("Website", data.website)
}