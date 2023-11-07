/* 
 window.addEventListener("gamestarted", ev => console.log("gamestarted"))
 window.addEventListener("letter", ev => console.log("letter"))
 window.addEventListener("correctletter", ev => console.log("correctletter"))
 window.addEventListener("wrongletter", ev => console.log("wrongletter"))
 window.addEventListener("word", ev => console.log("word"))
 window.addEventListener("correctword", ev => console.log("correctword"))
 window.addEventListener("wrongword", ev => console.log("wrongword"))
 window.addEventListener("endgame", ev => console.log("endgame"))
*/

const css = document.createElement('link');

css.href = '/plugins/marcus-paulo/dojo-style.css';
css.rel = 'stylesheet';
css.type = 'text/css';

document.head.appendChild(css);


function applyDesktop(){
    const Desktop = document.createElement('div');
    Desktop.id = 'Desktop';

    const WorkStation = document.createElement('div');
    WorkStation.classList = 'main';

    const Bar = document.createElement('div');
    Bar.classList = 'bar';

    document.body.appendChild(Desktop);
    document.querySelector('div#Desktop').appendChild(WorkStation);
    document.querySelector('div#Desktop .main').appendChild(Bar)
}

function Kill(){
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
    document.querySelector('main').remove();
}

function main() { 
    applyDesktop();
    Kill();
}

main();