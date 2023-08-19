import IJogo from '../interfaces/IJogo';

export default class comunicaAPIController {
    public pegaLista() {
        return $.get('http://localhost:3000/jogos')
    }
    public adicionaJogo(jogo: IJogo){
        $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/jogos',
                data: JSON.stringify(jogo),
                contentType: 'application/json', 
                success: function(response) {
                  console.log('Solicitação POST bem-sucedida', response);

                },
                error: function(error) {
                  console.error('Erro na solicitação POST', error);

                }
              });
    }

    public atulizaJogo(jogo: IJogo){
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:3000/jogos/' + jogo.id,
            data: JSON.stringify(jogo),
            contentType: 'application/json',
            success: function(response) {
            console.log('Solicitação PUT bem-sucedida', response);

            },
            error: function(error) {
            console.error('Erro na solicitação PUT', error);

            }
        });
    }
    public deletaJogo(id: string){
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/jogos/' + id, 
            success: function(response) {
            console.log('Solicitação DELETE bem-sucedida', response);

            },
            error: function(error) {
            console.error('Erro na solicitação DELETE', error);
            }
        });
    }
}

// // fazendo um crud no jquery :o

// $.get('http://localhost:3000/jogos', function(data) {
//     // A função de retorno será chamada quando a resposta for recebida
//     console.log(data); // 'data' contém os dados da resposta (lista de jogos)
    
//     // Agora você pode manipular os dados, como exibir na página
//     // ou realizar outras operações com eles
//   });

//   var dados = {
//     titulo: 'Novo Jogo 2',
//     genero: 'Ação',
//     id: uuid()
//   };

//   $.ajax({
//     type: 'POST',
//     url: 'http://localhost:3000/jogos', // URL do servidor JSON
//     data: JSON.stringify(dados), // Converte os dados em uma string JSON
//     contentType: 'application/json', // Define o tipo de conteúdo da solicitação
//     success: function(response) {
//       console.log('Solicitação POST bem-sucedida', response);
//       // Faça algo com a resposta, se necessário
//     },
//     error: function(error) {
//       console.error('Erro na solicitação POST', error);
//       // Lide com erros, se necessário
//     }
//   });


//     var dadosAtualizados = {
//       titulo: 'Jogo Atualizado',
//       genero: 'Aventura'
//     };
  
//     // ID do jogo que você deseja atualizar
//     var jogoId = 1;
  
//     $.ajax({
//       type: 'PUT',
//       url: 'http://localhost:3000/jogos/' + jogoId, // URL do jogo específico
//       data: JSON.stringify(dadosAtualizados),
//       contentType: 'application/json',
//       success: function(response) {
//         console.log('Solicitação PUT bem-sucedida', response);
//         // Faça algo com a resposta, se necessário
//       },
//       error: function(error) {
//         console.error('Erro na solicitação PUT', error);
//         // Lide com erros, se necessário
//       }
//     });
  


//         // ID do jogo que você deseja excluir
//         var jogoId = 4;
      
//         $.ajax({
//           type: 'DELETE',
//           url: 'http://localhost:3000/jogos/' + jogoId, // URL do jogo específico
//           success: function(response) {
//             console.log('Solicitação DELETE bem-sucedida', response);
//             // Faça algo com a resposta, se necessário
//           },
//           error: function(error) {
//             console.error('Erro na solicitação DELETE', error);
//             // Lide com erros, se necessário
//           }
//         });

      