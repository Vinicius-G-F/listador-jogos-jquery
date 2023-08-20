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
