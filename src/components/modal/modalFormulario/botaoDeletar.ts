import listagemController from "../../../controllers/listagemController";

export default function botaoDeletar () {
    return (listagem: listagemController)=>{
        $("#lista-modal").on("click", ".botao-remover", function() {
            const liElement = $(this).closest("li");
            const idRemover = liElement.attr("id");
            if(idRemover){
                listagem.removerJogoDaLista(idRemover)
            }
        });
    }
}
