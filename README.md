<h2>Sobre o Projeto:</h2>

<h4>Services:</h4>
<p>- Rotas.jsx: Onde está às routes dá Home e Dog Page.</p>

<h4>Pages:</h4>
<p>Home.jsx - Simplesmente pondo o <strong>Link</strong>, para a Dog Page.</p>

<p>Card.jsx - Aqui é onde a magia ocorre.</p>

<p>- Ln 8: Criando o useState onde vai ser guardada às informações sobre os Dogs.</p>

<p>- Ln 9: Aqui está sendo criado um valor boleano, explicarei mais a frente o motivo.</p>

<p>- Ln 11: Usando axios para melhor manejo da API utilizando o get() para acessar a API e o then() que é uma <strong>PROMISE</strong>, para esperar uma resposta dá API.</p>

<p>- Ln 13: Utilizando o setDoggo, para armazenar às infos da API.</p>

<p>- Ln 14: Aqui estou setando o valor para <strong>TRUE</strong>, porque ao acessar a página "Dog Page", a imagem fica quebrada (alt=""), ao clicar no botão a msg é exibida, fazendo que o alt saia, por isso na Ln 24 está o {status && ~}, porque tanto a imagem quanto o status tem que ser true, fazendo assim que a mensagem não seja exibida, já que não tem nenhuma imagem ali no momento.</p>

<h2>Link Page: https://doggo-cosme.netlify.app</h2>