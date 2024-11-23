import express from "express";
import cors from "cors";
import conteudo from "./conteudo.js";
import dev from "./Dev.js";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())
servidor.get("/", function(requisicao, resposta){
    resposta.json({ mensagem:"Olá Mundo"})
})
servidor.get("/card", function(requisicao, resposta){
    resposta.status(200).json(conteudo)
})
servidor.get("/dev", function(requisicao, resposta){
    resposta.status(200).json(dev)
})
servidor.get("*"), function(requisicao, resposta){
    resposta.sendStatus(404)
}
servidor.listen(4000, function(){
    console.log("servidor funcionando");
    console.log("https://localhost:4000/");
})

