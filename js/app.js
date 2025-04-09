/*H1 SPAN*/

const investimentoSpan = document.querySelector('header section .left h1 span');
const textoOriginal = " É investimento!";
const velocidadeEscrever = 150; 
const velocidadeApagar = 75;
const delayVoltar = 1500;     

function escrever(texto, elemento, velocidade, callback) {
    let i = 0;
    elemento.textContent = '';
    const intervalId = setInterval(() => {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
            if (callback) {
                callback();
            }
        }
    }, velocidade);
}

function apagar(elemento, velocidade, callback) {
    let texto = elemento.textContent;
    const intervalId = setInterval(() => {
        if (texto.length > 0) {
            texto = texto.slice(0, -1);
            elemento.textContent = texto;
        } else {
            clearInterval(intervalId);
            if (callback) {
                callback();
            }
        }
    }, velocidade);
}

function iniciarEfeito() {
    escrever(textoOriginal, investimentoSpan, velocidadeEscrever, () => {
        setTimeout(() => {
            apagar(investimentoSpan, velocidadeApagar, () => {
                setTimeout(iniciarEfeito, delayVoltar);
            });
        }, delayVoltar);
    });
}

window.onload = iniciarEfeito;

/*IMG MEXENDO*/

document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('.app img');

    imagens.forEach((img, index) => {
        let angulo = 0;
        let direcao = 1;

        setInterval(() => {
            const deslocamentoY = Math.sin(angulo) * 5;
            const rotacao = Math.sin(angulo) * 2;

            img.style.transform = `translateY(${deslocamentoY}px) rotate(${rotacao}deg)`;

            angulo += 0.35 * direcao;
        }, 10 + index * 10);
    });
});
