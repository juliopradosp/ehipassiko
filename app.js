
const dhammaQualities = [
    { pali: "Svākkhāto", trans: "O Dhamma é perfeitamente ensinado (pelo Buda)." },
    { pali: "Sandiṭṭhiko", trans: "Visível aqui e agora (perceptível nesta mesma vida)." },
    { pali: "Akāliko", trans: "Atemporal (dá frutos sem demora, não depende do tempo)." },
    { pali: "Ehipassiko", trans: "Que convida a 'vir e ver' (aberto à investigação pessoal)." },
    { pali: "Opanayiko", trans: "Que conduz adiante (direciona a mente para o Nibbana)." },
    { pali: "Paccattaṃ Veditabbo Viññūhi", trans: "A ser experimentado pessoalmente por cada um dos sábios." }
];

let currentIndex = 0;
const $paliContainer = $('#pali-word');
const $transContainer = $('#translation-text');

function typeWriterEffect() {
    const currentItem = dhammaQualities[currentIndex];

    $transContainer.css('opacity', '0');
    $paliContainer.empty();

    const chars = currentItem.pali.split('');
    chars.forEach((char, index) => {
        const charHtml = char === ' ' ? '&nbsp;' : char;
        const $span = $(`<span class="char">${charHtml}</span>`);
        $span.css('animation-delay', `${index * 0.05}s`);
        $paliContainer.append($span);
    });

    const typingDuration = chars.length * 50;

    setTimeout(() => {
        $transContainer.text(currentItem.trans).css('opacity', '1');
    }, typingDuration + 300);

    setTimeout(() => {
        $transContainer.css('opacity', '0');

        $paliContainer.find('.char').css({
            'transition': 'opacity 0.5s ease',
            'opacity': '0'
        });

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % dhammaQualities.length;
            typeWriterEffect();
        }, 600);

    }, typingDuration + 4000);
}

$(document).ready(function() {
    // Inicia o efeito das palavras
    typeWriterEffect();
});