import IJogo from '../interfaces/IJogo';

export default class comunicaAPIController {
    protected pegaListaAPI() {
        return $.get('http://localhost:3000/jogos')
    }
    protected adicionaJogoAPI(jogo: IJogo){
        $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/jogos',
                data: JSON.stringify(jogo),
                contentType: 'application/json', 
                success: function(response) {

                },
                error: function(error) {
                  console.error('Erro na solicitação POST', error);

                }
              });
    }

    protected atulizaJogoAPI(jogo: IJogo){
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:3000/jogos/' + jogo.id,
            data: JSON.stringify(jogo),
            contentType: 'application/json',
            success: function(response) {

            },
            error: function(error) {
            console.error('Erro na solicitação PUT', error);

            }
        });
    }
    protected deletaJogoAPI(id: string){
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/jogos/' + id, 
            success: function(response) {

            },
            error: function(error) {
            console.error('Erro na solicitação DELETE', error);
            }
        });
    }
}
