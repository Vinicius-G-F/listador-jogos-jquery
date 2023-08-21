import IJogo from "../interfaces/IJogo"

export default class botaoCadernoController {
    public ativarBotaoCaderno (listaDeJogos: IJogo[]){
        $("#mostrar-lista-btn").removeClass("d-none")
        this.botaoCadernoQuantidade(listaDeJogos.length)
    }

    public desativarBotaoCaderno(){
        $("#mostrar-lista-btn").addClass("d-none")
            
    }

    public botaoCadernoQuantidade(num: number){
        $("#itens-adicionados").text(num)
    }
}