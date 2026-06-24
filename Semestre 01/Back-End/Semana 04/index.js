const express = require("express");

const server = express();

// Criando o Endpoint

// Adicione isso para a página inicial funcionar:
server.get("/bomdia", (req, res) => { // Remova o espaço aqui
    res.send("Agora funcionou!");
});



server.listen(4789, () => {

    console.log('PlayStation é melhor que Xbox!!!')    

})