import inputRangeController from "./controllers/inputRangeController"
import listagemController  from "./controllers/listagemController"
import IJogo from "./interfaces/IJogo"
import { v4 as uuid } from 'uuid';


// Controla o valor na caixa acima do input range

const inputRange = new inputRangeController()
const listagem = new listagemController()

$(".input-range").on("input", function(){
    let novoValor = $(this).val() + ''
    inputRange.atualizaValor(novoValor)
})



// Coleta as informações enviadas no formulario para serem tratadas 

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



// Adiciona um escutatador de eventos no modal para os botões de deletar e editar

$("#lista-modal").on("click", ".botao-remover", function() {
    const liElement = $(this).closest("li");
    const idRemover = liElement.attr("id");
    if(idRemover){
        listagem.removerJogoDaLista(idRemover)
    }
});

$("#lista-modal").on("click", ".botao-editar", function() {
    
    const botaoID = $(this).attr("id")
    const liElement = $(this).closest("li").attr("id");

    if(liElement && botaoID){
        listagem.ativarEdicao(liElement, botaoID)
    }
    escutadorFormModal()
});


// Botão aumentar e diminuir posição da fila no modal

$("#lista-modal").on("click","#botao-diminuir", function(){
    const inputNumber = $(this).next()
    const inputNumberModal = inputNumber?.val()?.toString()
    if(inputNumberModal){
        if(parseInt(inputNumberModal) < 2){
            return
        } else {    
            inputNumber?.val(parseInt(inputNumberModal) - 1)
        }
    } else {
        inputNumber.val(1)
    }
})

$("#lista-modal").on("click","#botao-aumentar", function(){
    const inputNumber = $(this).prev()
    const inputNumberModal = inputNumber?.val()?.toString()
    if(inputNumberModal){
        inputNumber?.val(parseInt(inputNumberModal) + 1)
    } else {
        inputNumber.val(1)
    } 
})


// Retorna os itens da lista do modal para o modo leitura quando o modal for fechado

$('#listaModal').on('hidden.bs.modal', function () {
    listagem.carregarLista()
    $("#botao-salvar").addClass("d-none")
});


// Pegar dados do Modal para edição da lista


function escutadorFormModal(){
    $("#form-editar-jogo").off("submit").on("submit", function(e){
        e.preventDefault()
        let jogos: IJogo[] = []
        let listaDadoForm = []
        const dadosCapturados = $(this).serializeArray()
        let ids: string[] = []
        $("#lista-modal li").each(function(){
            if($(this).hasClass("li-editavel")){
                ids.push(this.id)
            }
        })

        for(let i = 0; i < dadosCapturados.length; i += 4){
            listaDadoForm.push(dadosCapturados.slice(i, i + 4))
        }
        
        listaDadoForm = listaDadoForm.map(lista=>{
            return lista.map(({value})=>{
                return value
            })
        })

        listaDadoForm.forEach(((listaValores, i)=>{
            const jogo: IJogo = {
                nome: listaValores[0],
                categoria: listaValores[1],
                plataforma: listaValores[2],
                prioridade: listaValores[3],
                id: ids[i]
            }

            jogos.push(jogo)
        }))


        listagem.editarDados(jogos)

    })
}


