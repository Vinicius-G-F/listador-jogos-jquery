import IJogo from "../interfaces/IJogo";

export default function temValorRepetidoListas(){
    return (listaSubmetida : any[], listaArmazenada: any[], valorAhVerificar: string)=>{
        const novaLista = listaSubmetida.concat(listaArmazenada)
        
        for (let i = 0; i < listaSubmetida.length; i++) {
            let repeticoes = 0
            listaSubmetida.forEach((jogoAhVerificar)=>{
                if(jogoAhVerificar[valorAhVerificar] === listaSubmetida[i][valorAhVerificar]){
                    repeticoes++
                }
            })
            if(repeticoes > 1){
                return true
            }
        }

        for (let i = 0; i < listaSubmetida.length; i++) {
            let repeticoes = 0
            
            novaLista.forEach(jogoNovaLista=>{
                if(jogoNovaLista[valorAhVerificar] === listaSubmetida[i][valorAhVerificar]){
                    repeticoes++
    
                }
                
            }) 
            if(repeticoes > 2){
                return true
            }
            
        }
        return false
    }

}