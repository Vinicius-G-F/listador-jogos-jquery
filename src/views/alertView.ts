import { v4 as uuid } from "uuid"

export default class alertView {
    private tipoDeAlerta: "success" | "danger" = "success"
    private mensagem: string = ""
    private id: string = uuid()

    constructor(tipoDeAlerta: "success" | "danger", mensagem: string) {
        this.tipoDeAlerta = tipoDeAlerta
        this.mensagem = mensagem

    }

    public exibeAlerta(){
        $("body").append(this.alertTemplate())
        setTimeout(()=>{
            $(`#${this.id}`).fadeOut()
            setTimeout(()=>{
                $(`#${this.id}`).remove()
            }, 300)
        }, 5000)
    }

    private alertTemplate(){
        return `
        <div id="${this.id}" class="alert alert-${this.tipoDeAlerta} alert-dismissible" role="alert">
            <div>${this.mensagem}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }
}