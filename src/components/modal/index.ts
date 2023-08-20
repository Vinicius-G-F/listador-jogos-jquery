import listagemController from "../../controllers/listagemController";
import modalFormulario from "./modalFormulario/index";


export default function modal(){
    return (listagem: listagemController)=>{
        const iniciaModalFormulario = modalFormulario()
        iniciaModalFormulario(listagem)
        
        // Retorna os itens da lista do modal para o modo leitura quando o modal for fechado
        
        $('#listaModal').on('hidden.bs.modal', function () {
            listagem.carregarLista()
            $("#botao-salvar").addClass("d-none")
        });               
    }
}