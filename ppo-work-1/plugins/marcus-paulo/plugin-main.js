// Função para criar um elemento HTML com atributos
function createElement(tagName, attributes) {
    const element = document.createElement(tagName);
    for (const key in attributes) {
        element[key] = attributes[key];
    }
    return element;
}
// Função para aplicar o paragrafo dentro do sei container
function applayParagraph() {
    const paragraph = document.querySelector('.text > p')
    paragraph.id = 'paragraph'
    textContainer.appendChild(paragrafC)
    document.getElementById('p-container').appendChild(paragraph)
}

let pY = -4; // é o 'y' do paragrafo

function cursorOverflow() {
    const cursorPage = document.querySelector('span.current').getBoundingClientRect();
    const paraphPage = document.getElementById('p-container').getBoundingClientRect();
    const paragraph = document.getElementById('paragraph');

    function checkOverflow() {
        if (cursorPage.top > paraphPage.bottom) {
            paragraph.style.transform = `translateY(${pY}rem)`;
            pY -= 4;
            console.log('subiu');
            return true; 
        }
        return false;  
    }
    function animate() {
        if (checkOverflow()) 
            return;

        requestAnimationFrame(animate);
    }
    // Inicia a animação
    requestAnimationFrame(animate);
}

function gameLogic() {
    window.addEventListener('keyup', cursorOverflow)
    requestAnimationFrame(gameLogic);
}
// Adiciona o CSS 
const css = createElement('link', {
    rel: 'stylesheet',
    href: 'plugins/marcus-paulo/plugin-style.css',
});

document.head.appendChild(css);

// Remove elementos indesejados
document.querySelector('.score').remove();

document.querySelector('header').remove();

document.querySelector('footer').remove();

// fake ass loading, só para literalmente evitar em usar promices, mas é legalzinho
function getRandomElement(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

const arrayDeTexto = ['is happy', 'is depressed', 'is Varela', 'is: git push', 'is Prompt Ipsum', '(null)', 'its a typemonkey', 'is you'];
const elementoAleatorio = getRandomElement(arrayDeTexto);

const loading = createElement('div', { id: 'loading' });

const sloading = createElement('span', { textContent: `Prompt Ipsum ${elementoAleatorio}, state: -1%` });

document.body.appendChild(loading);
loading.appendChild(sloading)

// Nome do projeto
const PromptIpsum = createElement('header', { 
    id: 'name',
    textContent: 'attempt III: PrompIpsum, 10/11/2023'
});

// Cria o tab no topo e o container dos botões
const topTab = createElement('div', { id: 'top-tab' });

const bntC = createElement('div', { id: 'bnt-flex' });

const bntQuestion = createElement('div', { className: 'bnt', id: 'question' });
const bntClose = createElement('div', { className: 'bnt', id: 'close' });
const bntIgnore = createElement('div', { className: 'bnt', id: 'ignore' });

// Cria o 'footer' da janela
const spanC = createElement('div', { id: 'span-flex' });
const scLetter = createElement('span', { textContent: 'PlaceHolder1'} );
const sDiv = createElement('span', { textContent: '|'} );
const swLetter = createElement('span', { textContent: 'PlaceHolder2'} );

// Cria o Container do paragrafo
const paragrafC = createElement('div', { id: 'p-container' });
// Cria um flex-container para os botões
const bntFlex = createElement('div', { id: 'bnt-flex' });

// Acessa a lib de icones da google
const icons = createElement('link', {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,0',
});

// Coloca os elementos desejados no HTML
document.head.appendChild(icons);
document.body.appendChild(PromptIpsum);

const textContainer = document.querySelector('main div.text');
textContainer.id = 'text-container'
textContainer.appendChild(topTab);
textContainer.appendChild(spanC);
spanC.appendChild(scLetter);
spanC.appendChild(sDiv);
spanC.appendChild(swLetter);

topTab.appendChild(bntFlex);

bntFlex.appendChild(bntClose);
bntFlex.appendChild(bntQuestion);
bntFlex.appendChild(bntIgnore);

// O PIOR main de todos, um ferrando timer como um main kskksksk 
setTimeout(function main() {
    document.getElementById('loading').classList.add('HeartStop');
    applayParagraph()
    gameLogic()
    setTimeout(() => {
        document.getElementById('loading').remove()
    }, 1000)
}, 1000,)






/* não sei se vai precisar :/
 const Bquest = createElement('span', {
     classList: 'material-symbols-outlined',
     textContent: 'arrow_outward',
 });
 */


/* tbm ñ sei
const Bclose = createElement('span', {
    classList: 'material-symbols-outlined',
    textContent: 'close',
});
*/

//bntClose.appendChild(Bclose);
//bntQuestion.appendChild(Bquest);

/*
function removeCurrentRowClass() {
    const elementsWithCurrentRowClass = document.querySelectorAll('.current-row');
    
    elementsWithCurrentRowClass.forEach(element => {
        element.classList.remove('current-row');
    });
}
*/