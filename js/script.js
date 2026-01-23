//Ativar links menu
const links = document.querySelectorAll('nav .header-menu a');

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add('ativo');
  }
});

//Ativar itens lançamento
const parametros = new URLSearchParams(location.search);
parametros.forEach((p) => {
  const element = document.getElementById(p);
  if (element) {
    element.checked = true;
  }
});

//Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas dt button');

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', () => {
    const numPergunta = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(numPergunta);
    resposta.classList.toggle('ativa');
    pergunta.setAttribute(
      'aria-expanded',
      resposta.classList.contains('ativa'),
    );
  });
});

//Galeria bicicletas
const bicicletas = document.querySelectorAll('.bicicleta-imagens img');
const galeria = document.querySelector('.bicicleta-imagens');
bicicletas.forEach((bicicleta) => {
  bicicleta.addEventListener('click', () => {
    if (matchMedia('(min-width: 1000px)').matches) {
      galeria.prepend(bicicleta);
    }
  });
});

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.ClipboardJS) {
  new ClipboardJS('.introducao-conteudo p');
}
