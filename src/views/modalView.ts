import IJogo from "../interfaces/IJogo"

export default class modalView{

    public removerJogoModal(id: string){
        $("#" + id).fadeOut()
        setTimeout(()=> $("#" + id).remove(), 400)
    }

    public ativarEdicao(idLI: string, idDoBotao: string, listaDeJogos: IJogo[]){  
        this.aletaraJogoView(idLI, idDoBotao, listaDeJogos)
        $("#botao-salvar").removeClass("d-none")
    }

    public carregarListaModal (listaDeJogos: IJogo[]){
        let liTAGs = ""

        listaDeJogos.forEach(jogo=>{

            liTAGs = liTAGs + this.liNaoEhEditavel(jogo)          
        })

        $("#lista-modal").html(liTAGs)
        
    }

    public fecharModal(){
        $('#listaModal').modal('hide');
    }

    private aletaraJogoView(idLI: string, idDoBotao: string, listaDeJogos: IJogo[]){
        const reverterTags = $("#" + idDoBotao).hasClass("editar--pressionado")
        const elementoOriginal = $("#" + idLI);
        const jogoSelecionado = listaDeJogos.find(jogo=> jogo.id === idLI)
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

    private liNaoEhEditavel(jogo: IJogo){
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

    private liEhEditavel(jogo: IJogo){
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
}