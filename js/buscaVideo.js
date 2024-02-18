const lista = document.querySelector("[data-lista]");

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
const barraDePesquisa = document.querySelector(".pesquisar__input");

botaoDePesquisa.addEventListener("click", () => buscarVideo());

barraDePesquisa.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        buscarVideo()
    }
});

function buscarVideo() {
    const videos = document.querySelectorAll('.videos__item');
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value.toLowerCase();
    videos.forEach((video) => {
      const titulo = video.querySelector('[data-video-titulo]').textContent.toLowerCase();
  
      video.style.display = dadosDePesquisa ? titulo.includes(dadosDePesquisa) ? 'block' : 'none' : 'block';
    });

    let contadorDeDisplayBlocks = 0

    videos.forEach((video) => {
        console.log(video.style.display)
        
        if (video.style.display == 'block') {
            contadorDeDisplayBlocks++
        }
        
      });
    
    if (contadorDeDisplayBlocks === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`
    }
  }