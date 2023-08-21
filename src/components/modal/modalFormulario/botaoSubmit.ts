import listagemController from "../../../controllers/listagemController";
import IJogo from "../../../interfaces/IJogo";

export default function botaoSubmit () {
    return (listagem: listagemController)=>{
        $("#form-editar-jogo").on("submit", function(e){
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
}
