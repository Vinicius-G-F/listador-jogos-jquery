import listagemController from "../../../controllers/listagemController"
import botaoDeletar from "./botaoDeletar"
import botaoEditar from "./botaoEditar"
import botaoSubmit from "./botaoSubmit"
import inputNumber from "./inputNumber"

export default function modalFormulario(){
    return (listagem: listagemController)=>{
        const iniciaBotaoSubmit = botaoSubmit()
        const iniciaBotaoEditar = botaoEditar()
        const iniciaBotaoDeletar = botaoDeletar()
        const iniciaInputNumber = inputNumber()

        iniciaBotaoSubmit(listagem)
        iniciaBotaoEditar(listagem)
        iniciaBotaoDeletar(listagem)
        iniciaInputNumber()
    }
}