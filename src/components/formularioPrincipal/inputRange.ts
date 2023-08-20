// Controla o valor na caixa acima do input range

export default function inputRange() {
    return ()=>{
        $(".input-range").on("input", function(){
            let novoValor = $(this).val() + ''
            $("#range-value").text(novoValor)
        })
    }
}
