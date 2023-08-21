export default class formPrincipalController{
    public apagarFormulario () {
        $("#nome").val('')
        $("#categorias").val('')
        $("#plataformas").val('')
        $("#range-value").text('1')
        $("#prioridade").val('1')
    }
}