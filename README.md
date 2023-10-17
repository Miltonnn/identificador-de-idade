# Projeto de Verificação de Idade e Gênero

<p>Este é um pequeno projeto web que permite ao usuário inserir seu ano de nascimento e selecionar o sexo (masculino ou feminino) 
para verificar em qual faixa etária ele se encontra e exibir uma mensagem apropriada juntamente com uma imagem representativa. 
O projeto é composto por uma página HTML e um arquivo JavaScript para manipular os dados e exibir os resultados.</p>

## Conteúdo do Projeto

<p>O projeto contém os seguintes arquivos:</p>

* `index.html`: Este é o arquivo HTML principal que contém a estrutura da página web, os elementos de entrada de dados (ano de nascimento e sexo),
  um botão para realizar a verificação e um espaço para exibir os resultados. Além disso, há um link para o arquivo JavaScript responsável pela lógica da aplicação.

* `script.js`: Este é o arquivo JavaScript que contém a função verificar(), que é acionada quando o botão "Verificar" é pressionado.
   A função pega os dados inseridos pelo usuário, calcula a idade com base no ano de nascimento e determina o gênero selecionado para,
   em seguida, exibir uma mensagem e uma imagem correspondente.

  ## Instruções de Uso

  <p>Para utilizar este projeto, siga as seguintes etapas:</p>
    
    1. Abra o arquivo `index.html` em um navegador da web.
    2. Insira o seu ano de nascimento no campo "Ano de Nascimento". Certifique-se de que o ano inserido seja válido e que não seja maior que o ano atual.
    3. Selecione o seu sexo, escolhendo entre "Masculino" ou "Feminino".
    4. Clique no botão "Verificar".
    5. O resultado será exibido abaixo do botão de verificação, mostrando uma mensagem apropriada e uma imagem representativa da faixa etária e gênero identificados.
 
  ## Exemplo de Uso

    * Se você inserir o ano de nascimento como "1990" e selecionar "Masculino", a mensagem
    poderá ser: "Você é um homem adulto com 33 anos" e uma imagem representativa de um homem adulto será exibida.
    * Se você inserir o ano de nascimento como "2005" e selecionar "Feminino",
   a mensagem poderá ser: "Você é uma adolescente moça com 18 anos" e uma imagem representativa de uma adolescente será exibida.

  ## Autor

  <p>Este projeto foi criado por Milton Andrade. Para entrar em contato com o autor, você pode enviar um e-mail para miltonandrade2919@gmail.com.
   Este projeto é uma aplicação simples para fins didáticos e pode ser personalizado e expandido de acordo com suas necessidades.
   Divirta-se explorando e adaptando o código conforme necessário.</p>
  



<p>Função que utilizei para calcular a idade e retornar, juntamente com uma imagem, de acordo com o gênero solicitado.</p>

```javascript
function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = fsex[0].checked ? 'Homem' : 'Mulher';
        let imgSrc = '';
        let mensagem = '';

        if (genero === 'Homem') {
            if (idade <= 10) {
                imgSrc = 'criançaHomem.jpg';
                mensagem = 'Você é um menino criança!';
            } else if (idade < 21) {
                imgSrc = 'adolescenteHomem.jpg';
                mensagem = 'Você é um adolescente rapaz!';
            } else if (idade < 50) {
                imgSrc = 'adultoHomem.jpg';
                mensagem = 'Você é um homem adulto!';
            } else {
                imgSrc = 'idosoHomem.jpg';
                mensagem = 'Você é um homem idoso.';
            }
        } else {
            if (idade <= 10) {
                imgSrc = 'criançaMulher.jpg';
                mensagem = 'Você é uma menina criança!';
            } else if (idade < 21) {
                imgSrc = 'adolescenteMulher.jpg';
                mensagem = 'Você é uma adolescente moça!';
            } else if (idade < 50) {
                imgSrc = 'adultoMulher.jpg';
                mensagem = 'Você é uma mulher adulta!';
            } else {
                imgSrc = 'idosaMulher.jpg';
                mensagem = 'Você é uma mulher idosa.';
            }
        
        }

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.setAttribute('src', imgSrc);

        res.style.textAlign = 'center';
        res.innerHTML = `${mensagem} Com ${idade} anos.`;
        res.appendChild(img);
    }
}

```

<p>Acessar -> https://miltonnn.github.io/identificador-de-idade/</p>
