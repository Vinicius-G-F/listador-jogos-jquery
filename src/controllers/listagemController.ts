import IJogo from "../interfaces/IJogo" 
import temValorRepetidoListas from "../util/comparaListasJogos";
import alertView from "../views/alertView";
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
        if(!this.validaJogoOuJogos(jogo)){
            return
        }


        this.listaDeJogos.push(jogo);
        this.ordenarLista()
        try{
            this.adicionaJogoAPI(jogo)
        } catch(e){
            console.log(e)
        }
        this.botaoCaderno.ativarBotaoCaderno(this.listaDeJogos)
        this.carregarLista()
        this.fromPrincipal.apagarFormulario()
        this.exibeAlerta("success", "Jogo adicionado com sucesso!")
    }

    public removerJogoDaLista (id: string) {
        this.modalView.removerJogoModal(id)
        this.listaDeJogos = this.listaDeJogos.filter(item=> item.id != id)
        if(this.listaDeJogos.length < 1){
            this.botaoCaderno.desativarBotaoCaderno()
            this.modalView.fecharModal()
        }
        this.botaoCaderno.botaoCadernoQuantidade(this.listaDeJogos.length)
        try {
            this.deletaJogoAPI(id)
        } catch(e){
            console.log(e)
        }
        this.exibeAlerta("success", "Jogo removido com sucesso!")
    }

    public ativarEdicao (idLI: string, idDoBotao: string) {
        this.modalView.ativarEdicao(idLI, idDoBotao, this.listaDeJogos)

    }

    public editarDados(jogos: IJogo[]) {
        if(!this.validaJogoOuJogos(jogos)){
            return
        }

        jogos.forEach(jogo=>{
            this.listaDeJogos = this.listaDeJogos.map(item=>{
                if(item.id === jogo.id){
                    return jogo
                }
                return item
            })
            try{
                this.atulizaJogoAPI(jogo)
            } catch(e){
                console.log(e)
            }
        })
        this.ordenarLista()
        this.carregarLista()
        this.exibeAlerta("success", "Jogo(s) alterado(s) com sucesso!")
    }

    public carregarLista(){
        this.modalView.carregarListaModal(this.listaDeJogos)
    }

    private exibeAlerta(tipo: "success" | "danger", mensagem: string){
        const alerta = new alertView(tipo, mensagem)
        alerta.exibeAlerta()
    }

    private validaJogoOuJogos(jogo: IJogo | IJogo[]){
        if(jogo instanceof Array){
            const nomeRepetido = temValorRepetidoListas()
            const prioridadeRepetido = temValorRepetidoListas()

            if(jogo.length === 1){
                if(this.temNomeRepetidoJogo(jogo[0])){
                    console.log("repetiu")
                    this.exibeAlerta("danger", "Esse jogo ja foi adicionado!")
                    return false
                }

                if(this.temPrioridadeRepetidoJogo(jogo[0])) {
                    this.exibeAlerta("danger", "Esse lugar na fila esta ocupado!")
                    return false
                } 
            } else {
                if(nomeRepetido(jogo, this.listaDeJogos, "nome")){
                    this.exibeAlerta("danger", "Esse jogo ja foi adicionado!")
                    return false
                }
        
                if(prioridadeRepetido(jogo, this.listaDeJogos, "prioridade")){
                    this.exibeAlerta("danger", "Esse lugar na fila esta ocupado!")
                    return false
                }}

            return true
            } else {
                if(this.temNomeRepetidoJogo(jogo)){
                    this.exibeAlerta("danger", "Esse jogo ja foi adicionado!")
                    return false
                }

                if(this.temPrioridadeRepetidoJogo(jogo)) {
                    this.exibeAlerta("danger", "Esse lugar na fila esta ocupado!")
                    return false
                }
                return true
            }
    }

    private ordenarLista(){
        this.listaDeJogos = this.listaDeJogos.sort((jogo1, jogo2)=> {
            if (jogo1.prioridade > jogo2.prioridade) {
                return 1;
              }
              if (jogo1.prioridade < jogo2.prioridade) {
                return -1;
              }
              return 0;
        })
    }

    private temNomeRepetidoJogo(jogo: IJogo): boolean{
        return this.listaDeJogos.some(jogoGuardado => {
            if(jogo.id === jogoGuardado.id){
                return false
            }
            return jogo.nome === jogoGuardado.nome
        })
    }
    
    private temPrioridadeRepetidoJogo(jogo: IJogo): boolean{
        return this.listaDeJogos.some(jogoGuardado => {
            if(jogo.id === jogoGuardado.id){
                return false
            }
            return jogo.prioridade === jogoGuardado.prioridade
        })
    }

    private pegaListaInicial (){
        this.pegaListaAPI()
        .then((listaDeJogos)=> {
            if(listaDeJogos.length < 1){
                return
            }
            this.listaDeJogos = listaDeJogos
            this.ordenarLista()
            this.botaoCaderno.ativarBotaoCaderno(this.listaDeJogos)
            this.carregarLista()
        })
          .catch(function(error) {
            console.error('Erro ao obter lista de jogos', error);
          });

    }
}