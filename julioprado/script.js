const totaisOficiais = {
    antologias: {
        "Nas Palavras do Buda": 10,
        "Nobres Verdades, Nobre Caminho": 10,
        "Os Ensinamentos do Buda sobre Harmonia Social e Comunitária": 10
    },
    nikayas: {
        "DN": { nome: "Dīgha Nikāya", total: 34 },
        "MN": { nome: "Majjhima Nikāya", total: 152 },
        "SN": { nome: "Saṁyutta Nikāya", total: 7762 },
        "AN": { nome: "Aṅguttara Nikāya", total: 9557 },
        "Khp": { nome: "Khuddaka - Khuddakapāṭha", total: 9 },
        "Dhp": { nome: "Khuddaka - Dhammapada", total: 26 },
        "Ud": { nome: "Khuddaka - Udāna", total: 80 },
        "Itv": { nome: "Khuddaka - Itivuttaka", total: 112 },
        "Snp": { nome: "Khuddaka - Sutta Nipāta", total: 71 },
        "Vv": { nome: "Khuddaka - Vimānavatthu", total: 1289 },
        "Pv": { nome: "Khuddaka - Petavatthu", total: 814 },
        "Thag": { nome: "Khuddaka - Theragāthā", total: 1288 },
        "Thīg": { nome: "Khuddaka - Therīgāthā", total: 524 },
        "Ja": { nome: "Khuddaka - Jātaka", total: 547 },
    }
};

const dadosUsuario = {
    nome: "Júlio Prado",
    bio: "Um fluxo de processos e facetas pendulando entre caos e silêncio.",
    foto: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260621_102236565.jpg",

    jornada: {
        comDhamma: "O usuário ainda não escreveu nada aqui.",
        conheciDhamma: "O usuário ainda não escreveu nada aqui.",
        antesDhamma: "O usuário ainda não escreveu nada aqui."
    },

    leituras: {
        antologias: { "Nas Palavras do Buda": 3, "Nobres Verdades, Nobre Caminho": 0, "Os Ensinamentos do Buda sobre Harmonia Social e Comunitária": 0 },
        nikayas: { "DN": 0, "MN": 0, "SN": 0, "AN": 0, "Khp":0, "Dhp":26, "Ud":0, "Itv":0, "Snp":0, "Vv":0, "Pv":0, "Thag":0, "Thīg":0, "Ja":0}
    }
};

const dadosArtigos = [
    { id: "artigo-provisorio", data: "2026/09/06", titulo: "Artigo provisório", texto: "<p>Esse artigo é apenas um teste.</p><p>Em breve eu começo a escrever por aqui.<p/>" }
];

const dadosAlbuns = [
    { id: "grande-buda-ibiracu", titulo: "Grande Buda de Ibiraçu (maior Buda do ocidente) e Mosteiro Zen Morro da Vargem (primeiro mosteiro Zen-budista da América Latina)", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477257/IMG_20260620_110932634.jpg" },   
    { id: "encontro-interbudista", titulo: "1º Encontro Interbudista", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788391794/1000048387-01.jpg" },
    { id: "templos-kinkaku-ji-e-enkoji", titulo: "Templos Kinkaku-ji e Enkoji", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481086/1000021390-01.jpg" },
    { id: "luang-po-piak-2022", titulo: "Visita de Luang Pó Piak ao Brasil em 2022", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481785/1000069943.png" },
    { id: "templo-odsal-ling", titulo: "Templo Odsal Ling", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482518/IMG_20260322_113738144.jpg" },
    { id: "templo-zulai", titulo: "Templo Zulai", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484065/20190403175439.jpg" },
    { id: "torre-miroku", titulo: "Torre Miroku", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484520/IMG_20210919_151237737-01.jpg" }
];

const conteudoAlbuns = {

    "encontro-interbudista" : [
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788391794/1000048387-01.jpg" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788391813/VID_20260530_115633793.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788476549/vid-thumb.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788391794/1000048408-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788391795/1000048395-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788474694/2352352345.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788474694/33525236448.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788391799/955441f0-94b2-41b1-9471-1ba2805acd26.jpg" }
    ],

    "grande-buda-ibiracu" : [
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477257/IMG_20260620_110932634.jpg" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788477375/VID_88283712.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477570/VID_88283712-thumb.png" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788477372/VID_2282734.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477570/VID_2282734-thumb.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260621_110121817_BURST001.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477176/IMG_20260621_104555908.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260621_112552401.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260620_121307083.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260621_104246595.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477257/IMG_20260620_112156512.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477256/IMG_20260621_091914895.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477241/IMG_20260621_094631832.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477241/IMG_20260621_093217408.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477172/55326493.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477238/IMG_20260621_095524692.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477237/IMG_20260621_094945115.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477237/IMG_20260621_094855721.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477236/IMG_20260621_100800731.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477235/IMG_20260621_100405643.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477178/IMG_20260621_100148369.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477176/IMG_20260621_095842623.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788477175/IMG_20260621_102236565.jpg" }
        
    ],

    "templos-kinkaku-ji-e-enkoji" : [
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481083/1000021398-01.jpg" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788481191/VID_20250830.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481172/VID_20250830-thumb.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481137/1000022537-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481136/1000022535-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481086/1000021390-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481087/1000021404-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481088/10000055488jpg.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481084/1000021279-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481136/10000665973.jpg" },
    ],

     "luang-po-piak-2022" : [
        {tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481785/1000069943.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481787/1000235222.png" },
        { tipo: "video", url: "https://www.youtube.com/watch?v=UvvxJXZTEl0", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788481786/10000088671156.png" }
      ],

      "templo-odsal-ling" : [
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788483009/VID_20220724.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482733/VID_20220724-thumb.png" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788483030/VID_20260322.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482735/VID_20260322-thumb.png" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788482674/03-07-22_rinpoche.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482512/03-07-22_rinpoche.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482519/IMG_20260322_113307085.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482518/IMG_20260322_113738144.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482516/IMG_20260322_113435068.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482515/IMG_20260322_113332029.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788482514/IMG_20220724_090613492-01.jpg" }
    ],

    "templo-zulai" : [
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484065/20190403175439.jpg" },
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788484089/VID_20260322z.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484064/VID_20260322z-thumb.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484067/IMG_20260322_124541772.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484067/IMG_20220603_131147314-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484067/IMG_20260322_130150266.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484066/IMG_20260322_130830648.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484065/IMG_20220603_121225623-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484066/IMG_20260322_133911949.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484065/20220603_134816-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484065/IMG_20220603_121841817-01.jpg" }
    ],

    "torre-miroku" : [
        { tipo: "video", url: "https://res.cloudinary.com/nuxmz7hv/video/upload/v1788484531/VID_20210919.mp4", thumb: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484517/VID_20210919-thumb.png" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484523/IMG_20210919_145717624-02.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484522/IMG_20210919_135504235-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484521/IMG_20210919_133913631-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484520/IMG_20210919_151237737-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484519/IMG_20210919_144734894-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484519/IMG_20210919_144307078-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484518/IMG_20210919_151945137-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484517/IMG_20210919_144914628-01.jpg" },
        { tipo: "foto", url: "https://res.cloudinary.com/nuxmz7hv/image/upload/v1788484517/IMG_20210919_135605610.jpg" }
    ],
};



$(document).ready(function() {
    $('#userPhoto').attr('src', dadosUsuario.foto);
    $('#userName').text(dadosUsuario.nome);
    $('#userBio').text(dadosUsuario.bio);

    $(window).on('hashchange', router);
    if(!window.location.hash) window.location.hash = 'sobre-mim';
    else router();
});

function router() {
    const hash = window.location.hash.substring(1);
    const routeParts = hash.split('/');
    const mainRoute = routeParts[0];
    const subRoute = routeParts[1];

    if(['sobre-mim', 'leituras', 'artigos', 'galeria'].includes(mainRoute)) {
        $('#mainNav').show();
        $('.nav-link').removeClass('active');
        $(`.nav-link[data-target="${mainRoute}"]`).addClass('active');
    } else {
        $('#mainNav').hide();
    }

    const $content = $('#contentArea');

    $content.fadeOut(150, function() {
        $(this).empty();

        switch(mainRoute) {
            case 'sobre-mim': renderJornada($(this)); break;
            case 'leituras': renderLeituras($(this)); break;
            case 'artigos': subRoute ? renderArtigoCompleto($(this), subRoute) : renderListaArtigos($(this)); break;
            case 'galeria': subRoute ? renderAlbumCompleto($(this), subRoute) : renderListaAlbuns($(this)); break;
            default: window.location.hash = 'sobre-mim';
        }

        $(this).fadeIn(250, function() {
            if(mainRoute === 'leituras') animarBarrasProgresso();
        });
    });
}

function renderJornada($container) {
    const j = dadosUsuario.jornada;
    let html = `
        <div class="timeline-container">
            <div class="journey-item">
                <div class="journey-title">Minha vida com o Dhamma</div>
                <div class="journey-text">${j.comDhamma}</div>
            </div>
            <div class="journey-item">
                <div class="journey-title">Como conheci o Dhamma</div>
                <div class="journey-text">${j.conheciDhamma}</div>
            </div>
            <div class="journey-item">
                <div class="journey-title">Minha vida antes do Dhamma</div>
                <div class="journey-text">${j.antesDhamma}</div>
            </div>
        </div>
    `;
    $container.html(html);
}

function renderLeituras($container) {
    let html = `<div class="gamification-section"><div class="gamification-title">Antologias do Canône Páli:</div>`;
    for (const [livro, totalOficial] of Object.entries(totaisOficiais.antologias)) {
        const lido = dadosUsuario.leituras.antologias[livro] || 0;
        html += criarBarraProgresso("<a class='text-decoration-none' href='https://www.amazon.com.br/stores/author/B0DQHL1T3T/allbooks' target='_blank'>?</a>", livro, lido, totalOficial);
    }
    html += `</div><div class="gamification-section"><div class="gamification-title">Sutta pitaka - <a class='text-decoration-none' href='https://res.cloudinary.com/nuxmz7hv/image/upload/v1788486280/Tipitaka-jpeg-version.jpg' target='_blank'> Guia </a></div>`;
    for (const [sigla, info] of Object.entries(totaisOficiais.nikayas)) {
        const lido = dadosUsuario.leituras.nikayas[sigla] || 0;
        html += criarBarraProgresso(sigla, info.nome, lido, info.total);
    }
    html += `</div>`;
    $container.html(html);
}

function criarBarraProgresso(sigla, nomeCompleto, lido, total) {
    const porcentagem = total === 0 ? 0 : Math.round((lido / total) * 100);
    return `
        <div class="progress-item">
            <div class="progress-header">
                <strong>${sigla} - ${nomeCompleto}</strong>
                <span>${porcentagem}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar" data-width="${porcentagem}%" style="width: 0%"></div>
            </div>
            <div class="progress-stats">${lido} / ${total}</div>
        </div>`;
}

function animarBarrasProgresso() {
    $('.progress-bar').each(function() {
        const finalWidth = $(this).attr('data-width');
        $(this).css('width', finalWidth);
    });
}

function renderListaArtigos($container) {
    let html = `<div class="articles-container">`;
    dadosArtigos.forEach(artigo => {
        html += `
            <div class="article-item" onclick="window.location.hash = 'artigos/${artigo.id}'">
                <span class="article-date">${artigo.data}</span>
                <span class="article-title-list">${artigo.titulo}</span>
            </div>`;
    });
    html += `</div>`;
    $container.html(html);
}

function renderArtigoCompleto($container, artigoId) {
    const artigo = dadosArtigos.find(a => a.id === artigoId);
    if(!artigo) return;
    let html = `
        <div class="article-view">
            <a href="#artigos" class="back-btn">&larr; Voltar para Artigos</a>
            <h1>${artigo.titulo}</h1>
            <div class="article-meta">Publicado em ${artigo.data}</div>
            <div class="article-body">${artigo.texto}</div>
        </div>`;
    $container.html(html);
}

function renderListaAlbuns($container) {
    let html = `<div class="gallery-grid">`;
    dadosAlbuns.forEach(album => {
        html += `
            <div class="thumb-wrapper" onclick="window.location.hash = 'galeria/${album.id}'" title="${album.titulo}">
                <div class="thumb-1x1" style="background-image: url('${album.thumb}')"></div>
            </div>`;
    });
    html += `</div>`;
    $container.html(html);
}

function renderAlbumCompleto($container, albumId) {
    const albumData = conteudoAlbuns[albumId] || [];
    const nomeAlbum = dadosAlbuns.find(a => a.id === albumId)?.titulo || "Álbum";
   let html = `
        <a href="#galeria" class="back-btn">&larr; Voltar para Galeria</a>
        <h4 style="margin-bottom: 20px; color: var(--dhamma-primary);">${nomeAlbum}</h4>
        <div class="gallery-grid">`;

    albumData.forEach((media, index) => {
        const bg = media.tipo === 'foto' ? media.url : media.thumb;
        const wrapperClass = media.tipo === 'video' ? 'thumb-wrapper video' : 'thumb-wrapper';
        
        
        html += `
            <div class="${wrapperClass}" onclick="abrirModal(${index})">
                <img src="${bg}" loading="lazy" class="thumb-1x1-img" alt="Foto do álbum">
            </div>`;
    });
    html += `</div>`;
    $container.html(html);
    window.currentAlbumData = albumData;
}

window.abrirModal = function(index) {
    const media = window.currentAlbumData[index];
    const $modalContent = $('#modalMediaContent');
    $modalContent.empty();

    if (media.tipo === 'foto') {
        $modalContent.html(`<img src="${media.url}" class="media-full" alt="Foto Ampliada">`);
    } else if (media.tipo === 'video') {
        $modalContent.html(`
            <video controls class="media-full" autoplay>
                <source src="${media.url}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>`);
    }
    new bootstrap.Modal(document.getElementById('mediaModal')).show();
};

$('#mediaModal').on('hidden.bs.modal', function () {
    $('#modalMediaContent').empty();
});