import listagemController from "../../controllers/listagemController"
import { v4 as uuid } from 'uuid';
import IJogo from "../../interfaces/IJogo";
import inputRange from "./inputRange";

// Coleta as informações enviadas no formulario para serem tratadas 

export default function formularioPrincipal (){
    return (listagem: listagemController)=>{
        $("#form-adicionar-jogo").on("submit", function(e){
            e.preventDefault()
        
            const jogo: IJogo = {
                nome: "",
                categoria: "",
                plataforma: "",
                prioridade: "",
                id: uuid()
            } 
            const nome = $("#nome").val()?.toString().trim()
            const categoria = $("#categorias").val()?.toString()
            const plataforma = $("#plataformas").val()?.toString()
            const prioridade = $("#prioridade").val()?.toString()
        
            if(nome && categoria && plataforma && prioridade){
                jogo.nome = nome
                jogo.categoria = categoria
                jogo.plataforma = plataforma
                jogo.prioridade = prioridade
            } else {
                return alert("informações insuficientes")
            }
        
            listagem.submeterDados(jogo)
        })

        const iniciaInputRange = inputRange()
        iniciaInputRange()
    }
}
