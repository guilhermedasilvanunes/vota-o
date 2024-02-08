let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')


verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let título = Number(document.getElementById('título').value)


    console.log(nome,idade,título)


})
