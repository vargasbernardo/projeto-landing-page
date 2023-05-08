let formBtn = document.getElementById('form-btn')
let mensagemInput = document.getElementById('mensagem')
let telefoneInput = document.getElementById('telephone')
let emailInput = document.getElementById('email')
let nomeInput = document.getElementById('full-name') 
const formArray = []


formBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let formDataObj = {}
    formDataObj.nome = nomeInput.value
    formDataObj.email = emailInput.value
    formDataObj.telefone = telefoneInput.value
    formDataObj.mensagem = mensagemInput.value
    formArray.push(formDataObj)


    document.querySelector('.form-container').innerHTML = `
    <p id="mensagem-form">Agradecemos sua mensagem, responderemos o mais rápido possível para o email <b>${formDataObj.email}</b></p>
    <img src="icones/Orion_read-email.png" id="email-img" />
    `
    

})

console.log(formArray)
