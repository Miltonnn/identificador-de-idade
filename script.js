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
