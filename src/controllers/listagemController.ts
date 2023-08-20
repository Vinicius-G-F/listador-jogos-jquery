import IJogo from "../interfaces/IJogo" 
import modalView from "../views/modalView";
import comunicaAPIController from "./comunicaAPIController";

export default class listagemController extends comunicaAPIController {
    private listaDeJogos: IJogo[] = [];

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
        this.adicionaJogoBotaoCaderno()

    }

    public removerJogoDaLista (id: string) {
        $("#" + id).fadeOut()
        setTimeout(()=> $("#" + id).remove(), 400)
        this.listaDeJogos = this.listaDeJogos.filter(item=> item.id != id)
        if(this.listaDeJogos.length < 1){
            $("#mostrar-lista-btn").addClass("d-none")
            $('#listaModal').modal('hide');
        }
        $("#itens-adicionados").text(this.listaDeJogos.length)
        this.deletaJogoAPI(id)
    }

    public ativarEdicao (idLI: string, idDoBotao: string) {
        this.alterarTagParaInput(idLI, idDoBotao)
        $("#botao-salvar").removeClass("d-none")

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

    public carregarLista (){
        let liTAGs = ""

        this.listaDeJogos.forEach(jogo=>{

            liTAGs = liTAGs + this.liNaoEhEditavel(jogo)          
        })

        $("#lista-modal").html(liTAGs)
        
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

    private alterarTagParaInput(idLI: string, idDoBotao: string) {
        const reverterTags = $("#" + idDoBotao).hasClass("editar--pressionado")
        const elementoOriginal = $("#" + idLI);
        const jogoSelecionado = this.listaDeJogos.find(jogo=> jogo.id === idLI)
        if(jogoSelecionado) {
            if(reverterTags){
                
                const liReadOnly = this.liNaoEhEditavel(jogoSelecionado)
                const novoElemento = $(liReadOnly)
                elementoOriginal.replaceWith(novoElemento);

            } else {
                
                const liParaEdicao = this.liEhEditavel(jogoSelecionado)
                const novoElemento = $(liParaEdicao)
                elementoOriginal.replaceWith(novoElemento);
        }}
    }
    

    private adicionaJogoBotaoCaderno (){
        $("#mostrar-lista-btn").removeClass("d-none")
        $("#itens-adicionados").text(this.listaDeJogos.length)
        this.carregarLista()
        this.apagarFormulario()
    }

    private apagarFormulario () {
        $("#nome").val('')
        $("#categorias").val('')
        $("#plataformas").val('')
        $("#range-value").text('1')
        $("#prioridade").val('1')
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

    private liNaoEhEditavel (jogo: IJogo){
        const nomeSemEspaco = jogo.nome.replace(/\s+/g, "").trim()
        const idRemover = nomeSemEspaco + "-remover";
        const idEditar = nomeSemEspaco + "-editar";
        return `
        <li class="border-bottom border-dark mb-2" id="${jogo.id}">
            <div class="d-flex align-items-center gap-3">
                <h3 id="titulo-${nomeSemEspaco}" class="fs-3 titulo-jogo-modal border-0">${jogo.nome} 
                </h3>
                <div class="fs-6 d-flex align-items-center gap-2 ms-auto">
                    <button class="botao-editar bg-roxo" id="${idEditar}" title="editar" type="button"><i class="bi bi-pencil"></i></button>
                    <button class="botao-remover bg-roxo" id="${idRemover}" title="remover" type="button"><i class="bi bi-trash"></i></button>
                </div>
            </div> 
            <p class="fs-5 border-0" class="item-categoria" id="categoria-${nomeSemEspaco}">${jogo.categoria}</p>
            <p class="fs-5 border-0" class="item-plataforma" id="plataforma-${nomeSemEspaco}">${jogo.plataforma}</p>
            <p class="fs-5 border-0" class="item-prioridade" id="prioriade-${nomeSemEspaco}">Posição na fila: ${jogo.prioridade}</p>
        </li>
    `
    }

    private liEhEditavel (jogo: IJogo){
        return `
        <li class="d-flex flex-column gap-2 border-bottom border-dark mb-2 li-editavel" id="${jogo.id}">
                <div class="d-flex align-items-center gap-3">
                    <input value="${jogo?.nome}" name="nomeDoJogo" class="fs-3 titulo-jogo-modal titulo-input-modal border-0 rounded bg-roxo" required>
                    <div class="fs-6 d-flex align-items-center gap-2 ms-auto">
                        <button class="botao-editar bg-roxo editar--pressionado" id="botao-editar" title="editar" type="button"><i class="bi bi-pencil"></i></button>
                        <button class="botao-remover bg-roxo" id="botao-remover" title="remover" type="button"><i class="bi bi-trash"></i></button>
                    </div>
                </div> 
                <select required class="form-select categoria-input-modal border-0 bg-roxo" id="categorias-modal" name="categoria" aria-label="categorias" >
                    <option value="">Escolha uma categoria</option>
                    <option ${jogo?.categoria === "Ação / Combate" ? "selected" : ""} value="Ação / Combate">Ação / Combate</option>
                    <option ${jogo?.categoria === "Imersivo" ? "selected" : ""} value="Imersivo">Imersivo</option>
                    <option ${jogo?.categoria === "jogo online" ? "selected" : ""} value="jogo online">jogo online</option>
                    <option ${jogo?.categoria === "Horror / Survival" ? "selected" : ""} value="Horror / Survival">Horror / Survival</option>
                    <option ${jogo?.categoria === "Estratégia" ? "selected" : ""} value="Estratégia">Estratégia</option>
                    <option ${jogo?.categoria === "Esportes" ? "selected" : ""} value="Esportes">Esportes</option>
                </select>
                <select required class="form-select border-0 bg-roxo plataforma-input-modal" id="plataformas-modal" name="plataformas" aria-label="plataformas">
                    <option value="">Escolha a plataforma desse jogo</option>
                    <option value="PC" ${jogo?.plataforma === "PC" ? "selected" : ""}>PC</option>
                    <option value="Xbox" ${jogo?.plataforma === "Xbox" ? "selected" : ""}>Xbox</option>
                    <option value="PS" ${jogo?.plataforma === "PS" ? "selected" : ""}>PS</option>
                    <option value="Nintendo" ${jogo?.plataforma === "Nintendo" ? "selected" : ""}>Nintendo</option>
                </select>
                <div class="d-flex gap-3">
                    <p class="fs-5 border-0" class="item-prioridade" id="prioriade-">Posição na fila: </p>
                    <div><button class="bg-roxo" type="button" title="-" id="botao-diminuir"><i class="bi bi-dash-circle"></i></button><input value="${jogo?.prioridade}" id="input-number-modal" name="prioridade" type="number" class="bg-roxo prioridade-input-modal" title="digite o numero" style="width: 35px;"><button type="button" class="bg-roxo" title="+" id="botao-aumentar"><i class="bi bi-plus-circle"></i></button></div>
                </div>
            </li>
        `
    }

    private pegaListaInicial (){
        this.pegaListaAPI()
        .then((listaDeJogos)=> {
            this.listaDeJogos = listaDeJogos
            this.adicionaJogoBotaoCaderno()
        })
          .catch(function(error) {
            console.error('Erro ao obter lista de jogos', error);
          });

    }
}