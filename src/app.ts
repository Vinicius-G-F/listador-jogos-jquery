import modal from "./components/modal/index"
import formularioPrincipal from "./components/formularioPrincipal/index"
import listagemController from "./controllers/listagemController"

const listagem = new listagemController()

const iniciaFormularioPrincipal = formularioPrincipal()
const iniciaModal = modal()

iniciaFormularioPrincipal(listagem) 
iniciaModal(listagem)

