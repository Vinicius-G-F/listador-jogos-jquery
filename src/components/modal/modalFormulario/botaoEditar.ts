import listagemController from "../../../controllers/listagemController";

export default function botaoEditar () {
    return (listagem: listagemController)=>{
        $("#lista-modal").on("click", ".botao-editar", function() {
            
            const botaoID = $(this).attr("id")
            const liElement = $(this).closest("li").attr("id");
        
            if(liElement && botaoID){
                listagem.ativarEdicao(liElement, botaoID)
            }
        
        });
    }
}
