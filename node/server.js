// IMPORTANDO O MODULO EXPRESS

const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇOES 
app.use(express.json())
// CRIANDO UMA ROTA PARA A API
app.get('/home', (req, res) => {
    res.send('Hello World')
})


// CRIANDO UMA ROTA PARA A API
app.get('/states', (req, res) => {
    res.send({
        'Ceará': 10,
        'Bahia': 8,
        'Pernambuco': 7.78
    })
})


//SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000


app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)

})