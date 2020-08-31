# JavaScript - Eventos
## O que vamos aprender?
Você já aprendeu, neste bloco, a trabalhar com os elementos da sua página, como selecioná-los e manipular o Dom de forma a ligar o HTML com o JavaScript. Agora, irá aprender como interagir com o usuário através dos eventos na sua página.

Eventos são ações que podem ocorrer dentro da nossa página web quando o navegador faz uma determinada interação. Pode-se citar como exemplo, clicar com o mouse em algum elemento como imagem, texto, botão ou até mesmo em uma div. Eventos podem também estar relacionados com o carregamento da página ou o fechamento dela, você verá as interações mais utilizadas e como fazer para que funções sejam executadas na ocorrência de eventos.

### Você será capaz de:
* Adicionar uma ação à página que pode modificar elementos como cor, tamanho entre outros estilos;
* Aplicar funções a determinados elementos quando solicitado pelo usuário;
* Interagir com a janela do navegador através do objeto window.

### Por que isso é importante?
Os eventos em JavaScript tornam as aplicações web mais interessantes, pois permitem uma interação com o usuário. A cada clique do mouse ou tecla pressionada, uma resposta pode ser dada de forma dinâmica. Essa resposta é importante pois ajuda na comunicação, bem como deixa seu aplicativo ou página muito mais atrativo para quem está utlizando. Como bom desenvolvedor, tem algo mais emocionante do que deixar sua aplicação mais atrativa e dinâmica? Então, segue para o conteúdo que essa aula promete! :smile:

## Conteúdos
Tempo sugerido para realização: 30 minutos
### Parte 1 - Eventos e onload
Depois de saber a importância de um evento para uma aplicação web, é necessário entender como funciona o evento dentro da página. Neste caso, os eventos são disparados dentro da janela do navegador e costumam estar anexados a algum item específico que pode ser:
* Um único elemento, como um *botão*;
* Um conjunto de elementos, como um *menu de navegação* ou elementos dentro de uma *div*;
* A própria *janela* ao ser carregada.
* Entre muitos outros elementos, como caixa de inputs de um formulário.

#### Criando um evento
Imagine que ao carregar uma página por completo seja necessário emitir um alerta ao usuário: *"Página carregada por completo"*. Em JavaScript, o objeto window representa a janela do navegador e onload representa o carregamento da página. Veja abaixo como é possível emitir a mensagem de alerta:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de Evento</title>
  </head>
  <body>
    <script>
      window.onload = function() {
        alert('Página carregada por completo');
      };
    </script>
  </body>
</html>

```
Copie e cole esse código no vs code e salve como uma página *.html*. Ao carregar a página, será exibido uma mensagem de alerta ao usuário.

Assim como onload é um evento que ocorre na janela, existem outros tipos de eventos, que podem ocorrer em um determinado elemento na página, alguns deles são: **click, change e mouseOver**.
Agora, perceba como a interatividade acontece em um evento **click** no botão, observe as seguintes etapas:
![Evento JS](https://i.ibb.co/DMVPVP2/image-summer-job.jpg)

1. O botão é **clicado**.
2. O botão dispara um sinal: *"Um evento está ocorrendo"*.
3. Algum código está **escutando** o evento disparado.
4. Mudança na página de forma interativa.


### Parte 2 - Escutador de Eventos (addEventListener)
Após o evento disparar, é necessário que um código específico no JavaScript esteja pronto para escutar este disparo e realizar a devida modificação na página.  A função responsável por escutar o evento é a **addEventListener()**, ela ficará o tempo todo vigilante esperando o evento ocorrer no elemento. Este código sempre é atrelado a pelo menos um elemento, neste caso, o próprio botão que irá ser clicado. Veja abaixo sua utilização:
```JavaScript
button.addEventListener('click', function() {
    // sua função aqui
});
``` 
> Note que a função addEventListener recebe dois parâmetros: 'click' e 'function() {}'. 'Click' é o evento aguardado pelo escutador e 'function' a função escrita por você que deve ser chamada quando o botão for clicado.

Assim como 'click', existem muitos outros eventos que podem ser colocados como parâmetro da função addEventListener. A tabela abaixo mostra os mais utilizados:
Evento | Ocorre quando...
------ | -------
click  | o botão primário do mouse é pressionado e liberado
dblclick  | clique duplo com o mouse
mouseover  | quando o cursor do mouse está sobre algum elemento
mousemove  | quando o cursor do mouse está se movendo
mouseout  | quando o cursor do mouse se move pra fora do elemento
click  | o botão primário do mouse é pressionado e liberado
keydown | ao pressionar qualquer tecla do teclado
keyup | ao ser liberada qualquer tecla do teclado que estava pressionada
Acesse este [link](https://www.w3schools.com/jsref/dom_obj_event.asp) para conhecer outros eventos que podem ser utilizados.

Copie o código abaixo, cole no VS Code e salve como .html. Após salvar, visualize no seu navegador a página e veja o resultado desse código. Nesse momento, não se preocupe com o código CSS na tag <style>, foque na parte do HTML e JavaScript para entender melhor o addEventListener. 
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Mudando o texto na caixa</title>
    <style>
      body {
        width: 80%;
        margin: auto;
        font-size: 30px;
      }

      .textBox {
        align-items: center;
        border: 1px solid black;
        display: flex;
        height: 150px;
        margin-top: 20px;
        padding: 10px;
        width: 700px;
      }
    </style>
  </head>
  <body>
    Digite seu texto aqui:
    <input id="text" type="text" size="50">
    <br>
    <div class="textBox" id="textBox">Seu Texto aparecerá aqui!!!
    </div>
    <script>
      const text = document.querySelector('#text');
      function writeText() {
        const box = document.querySelector('.textBox');
        box.innerHTML = text.value;
      }
      text.addEventListener('change', writeText);
    </script>
  </body>
</html>

```
Dentro da tag <script>, é possível entender que o elemento com o id "text" é selecionado e a ele adicionado um addEventListener. O evento utilizado é o evento 'change', esse evento ocorre quando um elemento de um formulário é modificado. Observe que para o texto aparecer na caixa embaixo, é necessário que se clique fora da caixa de texto após a sua digitação. Isso ocorre pois o evento 'change' acontece com a mudança de estado desse elemento. Para entender melhor, substitua o evento 'change' por 'keyup'. Percebeu a diferença?

**Como segundo parâmetro do addEventListener é necessário passar uma função**, neste caso, é a função writeText criada. Nessa função, é selecionada a div de classe "textBox" e inserido o texto da caixa de texto dentro da "textBox".

Visualize agora este novo código e tente entender a sua funcionalidade. Mais uma vez, se concentre na parte em HTML e JavaScript. O CSS da tag <style> está apenas auxiliando para que a visualização no navegador seja mais agradável. Preste atenção na estilização com CSS inline colocada dentro da tag div, sua funcionalidade é colorir cada quadrado. Copie, cole todo o código abaixo no VS Code e abra no seu navegador. 
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Mudando a cor de fundo</title>
    <style>
      .color {
        cursor: pointer;
        height: 100px;
        margin: 20px;
        width: 100px;
      }

      .container {
        background-color: rgb(219 , 218 , 218);
        border-radius: 10px;
        height: 400px;
        padding: 10px;
        width: 140px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <center>Mude as cores do fundo da página:</center>
      <div class="color" id="blue" style="background-color: blue;"></div>
      <div class="color" id="red" style="background-color: red;"></div>
      <div class="color" id="green" style="background-color: green;"></div>
    </div>
    <script>
      function changeColorToBlue() {
        const bodyPage = document.body;
        bodyPage.style.backgroundColor = 'blue';
      }
      function changeColorToRed() {
        const bodyPage = document.body;
        bodyPage.style.backgroundColor = 'red';
      }

      const divBlue = document.querySelector('#blue');
      divBlue.addEventListener('click', changeColorToBlue);

      const divRed = document.querySelector('#red');
      divRed.addEventListener('mouseover', changeColorToRed);
    </script>
  </body>
</html>

``` 
Como pode notar, cada função muda a cor de fundo da página para uma determinada cor. Essas funções são chamadas de acordo com o evento que é passado no escutador de eventos. O evento 'click' chama a função que muda o fundo da página para cor azul ao clicar na div de fundo azul. O evento 'mouseover' chama a função que muda para vermelho ao passar o mouse em cima da div vermelha. Agora, crie uma nova função 'changeColorToGreen' e depois atribua à div verde um evento de duplo clique que chame esta função.
### Parte 3 -  Entendendo 'event.target'
Veja o vídeo abaixo. Nele, terá um exemplo prático do uso do addEventListener e uma propriedade para eventos chamada target.
[![Eventos em JavaScript](http://img.youtube.com/vi/MwR6IBrUdDA/0.jpg)](https://www.youtube.com/watch?v=MwR6IBrUdDA "Event JavaScript")


## Vamos fazer juntos!
Agora que você já conhece sobre os eventos do JavaScript, que tal fazermos um encontro ao vivo pelo Zoom para colocarmos juntos a mão na massa?
Aula ao vivo! Vamos pro Slack, onde o link estará disponível.

## Exercícios
Tempo sugerido para realização: 60 minutos

Agora é o momento de praticar a utilização dos eventos em JavaScript. Você criará eventos em botões e divs, além de criar funções que serão chamadas na ocorrência destes eventos.
Para realizar os exercicíos do 1 ao 5, você utilizará o código abaixo.
``` html
<!DOCTYPE html>
<html lang="pt-BR">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Ficha Cadastral</title>
    <style>
      .form {
        width: 550px;
      }

      .buttons {
        display: flex;
        justify-content: center;
      }

      .super-box {
        display: flex;
        justify-content: center;
        margin: 0;
      }

      button {
        margin: 10px;
      }

      .registration {
        align-items: center;
        border: solid 1px black;
        display: flex;
        flex-direction: column;
        height: 360px;
        width: 550px;
      }

      .box {
        align-items: center;
        background-color: rgb(228 , 226 , 226);
        border: solid 1px black;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        height: 50px;
        justify-content: center;
        margin: 10px;
        width: 50px;
      }
    </style>
  </head>
  <body>
    <div class="form">
      <fieldset id="field">
        <div class="line">
          <label for="name">Nome Completo:</label>
          <input name="name" id="name" type="text" size="60" required>
        </div>
        <div class="line">
          <label for="email">Email:</label>
          <input name="email" id="email" type="text" size="60" required>
        </div>
        <div class="line">
          <label for="adress">Endereço:</label>
          <input name="adress" id="adress" type="text" size="60" required>
        </div>
        <div class="line">
          <label for="city">Cidade:</label>
          <input name="city" id="city" type="text" size="60" required>
        </div>
      </fieldset>
      <div class="buttons">
        <button id="submit">Criar Ficha</button>
        <button id="reset">Limpar</button>
        <div class="box" id="blue" style="background-color: blue;"></div>
        <div class="box" id="red" style="background-color: red;"></div>
        <div class="box" id="green" style="background-color: green;"></div>
        <div class="box" id="size-20">20px</div>
        <div class="box" id="size-24">24px</div>
        <div class="box" id="size-28">28px</div>
      </div>
    </div>
    <div class="registration">
      <h1> Ficha Cadastral </h1>
      <div class="form-response" style="font-size: 18px;">
      </div>
    </div>
    <script>
    // seu código aqui !
    </script>
  </body>
</html>
``` 
Leia atentamente os enunciados. Dentro da tag <script>, faça o que se pede! 

1. Crie uma função que alerte assim que a página for toda carregada, utilizando 'onload' aprendido nesta aula. No alerta, faça aparecer a seguinte mensagem: "Crie sua ficha cadastral".

2. Ao clicar no botão 'Criar Ficha', pegue os valores digitados no formulário acima do botão e passe eles para a ficha cadastral abaixo, neste formato:
Ficha Cadastral
Nome: 'nome digitado'
Email: 'email digitado'
Endereço: 'endereço digitado'
Cidade: 'cidade digitada'
![Ficha](https://i.ibb.co/yyL2YVZ/ficha.png)

3. Ao clicar no botão 'Limpar', apague todos os valores da Ficha Cadastral abaixo, deixando limpa a ficha do cliente. 
**Dica: Você pode substituir o que está dentro da div por um valor vazio ("")**

4. Na página, existem 3 divs cada uma de uma cor. **Ao passar o mouse** por cima da div, faça com que o texto inserido na ficha cadastral fique com a cor correspondente a div que o mouse está em cima.

5. Assim como no exercício 4, faça com que o texto mude de acordo com a div. Desta vez, adicione um evento de **duplo clique** a cada uma e mude o tamanho de texto para o específico. Exemplo: Ao clicar duas vezes em '28px', o texto ficará com um tamanho de fonte de 28 píxels.

### Exercício Bônus : Jogo da velha
Para realizar o exercicío bônus, você utilizará o código abaixo.
``` html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Jogo da Velha</title>
    <style>
      body {
        margin: auto;
        width: 450px;
      }

      .box {
        align-items: center;
        border: solid 1px black;
        display: flex;
        justify-content: center;
        height: 150px;
        width: 150px;
      }

      .line {
        display: flex;
        flex-direction: row;
        width: 450px;
      }

      .circle {
        border: solid 10px blue;
        border-radius: 50%;
        height: 100px;
        width: 100px;
      }

      .cross {
        color: red;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 180px;
        padding-bottom: 30px;
      }

      button {
        margin: 15px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="game">
      <div class="line">
        <div class="box" style="border-left-width: 0;
          border-top-width: 0;"></div>
        <div class="box" style="border-top-width: 0;"></div>
        <div class="box" style="border-right-width: 0;
          border-top-width: 0;"></div>
      </div>
      <div class="line">
        <div class="box" style="border-left-width: 0;"></div>
        <div class="box"></div>
        <div class="box" style="border-right-width: 0;"></div>
      </div>
      <div class="line">
        <div class="box" style="border-left-width: 0;
          border-bottom-width: 0;"></div>
        <div class="box" style="border-bottom-width: 0;"></div>
        <div class="box" style="border-right-width: 0;
          border-bottom-width: 0;"></div>
      </div>
    </div>
    <div class="line">
      Escolha como começar:
      <button id="circle">Círculo</button>
      <button id="cross">X (Xis)</button>
    </div>
    <script>
    // seu código aqui!
    </script>
  </body>
</html>
```
O objetivo do exercício é criar um jogo da velha. Cada quadrado do jogo da velha é uma div de classe 'box'. Ao clicar em um quadrado, será marcado um x ou um círculo dentro da div, de acordo com o último clique. 
Crie o script do seu código dentro da tag <script> de acordo com os enunciados abaixo:
1. Adicione um evento JavaScript que chame uma função 'markFunction' ao clicar em qualquer uma div 'box'. *Dica: as divs estão todas dentro de uma div pai de classe 'game'.*
2. Faça uma função chamada 'markFunction' que cria um elemento div e o insere dentro da div 'box' correspondente ao clique.

Para realizar os números 3 e 4 do exercício, leia o texto abaixo:
Existem duas classes previamente criadas com o nome de 'circle' e 'cross'. A classe 'circle' se for adicionada a uma div fará um estilo de círculo em suas bordas.  A classe 'cross' estilizará um X. 
**Preste atenção pois na div com a classe 'cross' será necessário ter um 'x' minúsculo dentro dela. Já na div com a classe 'circle' não é necessário nada dentro da mesma, o círculo será formado automaticamente com a atribuição da classe**. 

3. Dentro da função 'markFunction' mude a classe do elemento div criado para 'circle', caso o último clique tenho sido um 'x'. Ou para 'cross', caso o último elemento formado tenha sido um círculo. Por padrão, comece o jogo com um círculo. Não esqueça que a div que receber a classe 'cross' precisa ter um 'x' **minúsculo** dentro dela.
4. Crie dois eventos para os botões de escolha inicial e uma função que modifica o padrão de início do jogo para 'circulo' ou 'x'. **Importante: uma vez já clicada a opção inicial, caso haja uma tentativa de outro clique, emita um alerta "Você já escolheu"**.


## Recursos adicionais (opcional)
E aí, gostou do que aprendeu até aqui? Nesta parte, nós colocamos outras referências para você se aprofundar sobre o tema. Artigos, tutoriais, livros etc.
* [Mais exercícios de addEventListener](https://www.mundojs.com.br/2019/06/10/exercicio-facil-evento-com-addeventlistener/)
* [Tutorial JS Eventos no W3 Schools](https://www.w3schools.com/js/js_events.asp)
* [GitHub Page com mais conteúdo explicativo](https://braziljs.github.io/eloquente-javascript/chapters/manipulando-eventos/)
* [Documentação sobre eventos no Developer Mozilla](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Events)
* [Tutorial addEventListener Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener)
