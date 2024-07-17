

  document.addEventListener('DOMContentLoaded', function() {
 

  //IMPLEMENTANDO O HEADER EM TUDO

  fetch('./HTML/header.html')

    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      //BOTÃO TO-TOP

      const scrollToTop = document.querySelector("#buttom-top")
      console.log(scrollToTop)
      
      scrollToTop.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));


}); //FECHAMENTO do DOMContentLoaded
