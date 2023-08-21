import IJogo from "../interfaces/IJogo" 
import modalView from "../views/modalView";
import botaoCadernoController from "./botaoCadernoController";
import comunicaAPIController from "./comunicaAPIController";
import formPrincipalController from "./formPrincipalController";

export default class listagemController extends comunicaAPIController {
    private listaDeJogos: IJogo[] = [];
    private modalView: modalView = new modalView()
    private botaoCaderno = new botaoCadernoController()
    private fromPrincipal = new formPrincipalController()

    constructor(){
        super()
        this.pegaListaInicial()
    }

    public submeterDados(jogo: IJogo ){
        if(!this.validaDados(jogo)){
            return
        }
        
        this.listaDeJogos.push(jogo);
        this.adicionaJogoAPI(jogo)
        this.botaoCaderno.ativarBotaoCaderno(this.listaDeJogos)
        this.carregarLista()
        this.fromPrincipal.apagarFormulario()

    }

    public removerJogoDaLista (id: string) {
        this.modalView.removerJogoModal(id)
        this.listaDeJogos = this.listaDeJogos.filter(item=> item.id != id)
        if(this.listaDeJogos.length < 1){
            this.botaoCaderno.desativarBotaoCaderno()
            this.modalView.fecharModal()
        }
        this.botaoCaderno.botaoCadernoQuantidade(this.listaDeJogos.length)
        this.deletaJogoAPI(id)
    }

    public ativarEdicao (idLI: string, idDoBotao: string) {
        this.modalView.ativarEdicao(idLI, idDoBotao, this.listaDeJogos)

    }

    public editarDados(jogo: IJogo | IJogo[]) {
        if(!this.validaDados(jogo)){
            return
        }
        if(jogo instanceof Array){
            jogo.forEach(jogo=>{
                this.listaDeJogos = this.listaDeJogos.map(item=>{
                    if(item.id === jogo.id){
                        return jogo
                    }
                    return item
                })
                this.atulizaJogoAPI(jogo)
            })
            this.carregarLista()
        }
    }

    public carregarLista(){
        this.modalView.carregarListaModal(this.listaDeJogos)
    }

    private validaDados(jogo: IJogo | IJogo[]){
        if(this.jogoDuplicado(jogo)){
            alert("Esse jogo ja foi adicionado.")
            return false
        }
        if(this.jogoNaMesmaPosicao(jogo)) {
            alert("Essa posição ja esta em uso.")
            return false
        }
        return true
        
    }

    private jogoDuplicado (jogoEnviado: IJogo | IJogo[])  {
        if(jogoEnviado instanceof Array){
            let repetiu = false
            jogoEnviado.forEach(jogoAhVerificar=>{
                this.listaDeJogos.forEach((jogoGuardado, indexJogoGuardado) =>{
                    if(jogoGuardado.id === jogoAhVerificar.id){
                        return repetiu
                    }

                    if(jogoEnviado[indexJogoGuardado]?.id === jogoGuardado.id){
                        return repetiu = jogoEnviado[indexJogoGuardado].nome === jogoAhVerificar.nome
                    }

                    return repetiu = jogoGuardado.nome === jogoAhVerificar.nome
            })})
            return repetiu
        } else {
        
        return this.listaDeJogos.some(jogo =>{
            if(jogo.id === jogoEnviado.id){
                return false
            }
            return jogo.nome === jogoEnviado.nome

        })}

    }

    private jogoNaMesmaPosicao (jogoEnviado: IJogo | IJogo[])  {
        if(jogoEnviado instanceof Array){

            let repetiu = false

            jogoEnviado.forEach(jogoAhVerificar=>{
                this.listaDeJogos.forEach((jogoGuardado, indexJogoGuardado) =>{
                    if(jogoGuardado.id === jogoAhVerificar.id){
                        return repetiu
                    }

                    if(jogoEnviado[indexJogoGuardado]?.id === jogoGuardado.id){
                        return repetiu = jogoEnviado[indexJogoGuardado].prioridade === jogoAhVerificar.prioridade
                    }

                    return repetiu = jogoGuardado.prioridade === jogoAhVerificar.prioridade
            })})

            return repetiu

        } else {
        return this.listaDeJogos.some(jogo=>{
            if(jogo.id === jogoEnviado.id){
                return false
            }
            return jogo.prioridade === jogoEnviado.prioridade
        })}
    }

    private pegaListaInicial (){
        this.pegaListaAPI()
        .then((listaDeJogos)=> {
            if(listaDeJogos.length < 1){
                return
            }
            this.listaDeJogos = listaDeJogos
            this.botaoCaderno.ativarBotaoCaderno(this.listaDeJogos)
            this.carregarLista()
        })
          .catch(function(error) {
            console.error('Erro ao obter lista de jogos', error);
          });

    }
}