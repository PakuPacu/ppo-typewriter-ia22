document.addEventListener('DOMContentLoaded', function () {
    let myParagraph;
  
    // Função para lidar com a mudança no DOM
    function handleDomChanges(mutationsList, observer) {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          myParagraph = document.querySelector('#main-container p');
          console.log('Parágrafo vinculado:', myParagraph.textContent);
          observer.disconnect();
        }
      });
    }
  
    // Criar um observador para detectar mudanças no DOM
    const observer = new MutationObserver(handleDomChanges);
  
    const targetNode = document.getElementById('main-container');
  
    const config = { childList: true };
  
    // Iniciar o observador
    observer.observe(targetNode, config);
  });
  