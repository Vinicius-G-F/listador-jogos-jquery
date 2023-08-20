export default function inputNumber () {
    return ()=>{
        // Botão aumentar e diminuir posição da fila no modal
        
        $("#lista-modal").on("click","#botao-diminuir", function(){
            const inputNumber = $(this).next()
            const inputNumberModal = inputNumber?.val()?.toString()
            if(inputNumberModal){
                if(parseInt(inputNumberModal) < 2){
                    return
                } else {    
                    inputNumber?.val(parseInt(inputNumberModal) - 1)
                }
            } else {
                inputNumber.val(1)
            }
        })
        
        $("#lista-modal").on("click","#botao-aumentar", function(){
            const inputNumber = $(this).prev()
            const inputNumberModal = inputNumber?.val()?.toString()
            if(inputNumberModal){
                inputNumber?.val(parseInt(inputNumberModal) + 1)
            } else {
                inputNumber.val(1)
            } 
        })
    }
}
