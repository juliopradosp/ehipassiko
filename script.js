let db = null;
let currentUserId = null;
let currentUserData = null;

$(document).ready(async function() {
    try {
        
        const response = await fetch('./data/users.json');
        db = await response.json();
        
        
        $(window).on('hashchange', router);
        router();
        
    } catch (e) {
        console.error("Erro ao carregar banco de dados JSON:", e);
        $('#contentArea').html("<p>Erro ao carregar os dados do usuário.</p>");
    }
});

function router() {
    const hash = window.location.hash.substring(1);
    const routeParts = hash.split('/');
    
    //mapeamento:usuario/secao/subsecao
    const userId = routeParts[0]; 
    const mainRoute = routeParts[1] || 'sobre-mim';
    const subRoute = routeParts[2]; 

    // Busca o usuário 
    currentUserData = db.usuarios[userId];
    
    // SE O USUÁRIO NÃO EXISTIR:
    if(!currentUserData) {
        $('#profileHead, #userBio, #mainNav').hide();
        
        // Exibe uma mensagem de erro
        $('#contentArea').html(`
            <div class='text-center mt-5'>
                <h3 style='color: var(--dhamma-primary); font-family: Merriweather, serif;'>Usuário não encontrado</h3>
                <p style='color: #666;'>O perfil que você está tentando acessar não existe ou o link está incorreto.</p>
                <a href='./index.html' class='btn-inscrever mt-3' style='font-size: 1rem; padding: 10px 25px; min-width: auto;'>Ir para o início</a>
            </div>
        `).show();
        
        return;
    }

    // SE O USUÁRIO EXISTIR:
    // cabeçalho e bio  visíveis
    $('#profileHead, #userBio').show();

    // Atualiza cabeçalho
    if (currentUserId !== userId) {
        currentUserId = userId;
        $('#userPhoto').attr('src', currentUserData.dadosUsuario.foto);
        $('#userName').text(currentUserData.dadosUsuario.nome);
        $('#userBio').text(currentUserData.dadosUsuario.bio);
        
        // Atualiza dinamicamente os links
        $('.nav-link').each(function() {
            const target = $(this).data('target');$(this).attr('href', `#${currentUserId}/${target}`);
        });
    }

    // Lida com a exibição do menu de abas
    if(['sobre-mim', 'leituras', 'artigos', 'galeria'].includes(mainRoute)) {
        $('#mainNav').show();
        $('.nav-link').removeClass('active');$(`.nav-link[data-target="${mainRoute}"]`).addClass('active');
    } else {
        $('#mainNav').hide();
    }

    // Lida com o carregamento do conteúdo interno
    const $content =$('#contentArea');
    $content.fadeOut(150, function() {$(this).empty();

        switch(mainRoute) {
            case 'sobre-mim': renderJornada($(this)); break;
            case 'leituras': renderLeituras($(this)); break;
            case 'artigos': subRoute ? renderArtigoCompleto($(this), subRoute) : renderListaArtigos($(this)); break;
            case 'galeria': subRoute ? renderAlbumCompleto($(this), subRoute) : renderListaAlbuns($(this)); break;
            default: window.location.hash = `${currentUserId}/sobre-mim`;
        }

        $(this).fadeIn(250, function() {
            if(mainRoute === 'leituras') animarBarrasProgresso();
        });
    });
}

function renderJornada($container) {
    const j = currentUserData.dadosUsuario.jornada;
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
    const totais = db.configuracoes.totaisOficiais;
    let html = `<div class="gamification-section"><div class="gamification-title">Antologias do Canône Páli:</div>`;
    
    for (const [livro, totalOficial] of Object.entries(totais.antologias)) {
        const lido = currentUserData.dadosUsuario.leituras.antologias[livro] || 0;
        html += criarBarraProgresso("<a class='text-decoration-none' href='https://www.amazon.com.br/stores/author/B0DQHL1T3T/allbooks' target='_blank'>?</a>", livro, lido, totalOficial);
    }
    
    html += `</div><div class="gamification-section"><div class="gamification-title">Sutta pitaka - <a class='text-decoration-none' href='https://res.cloudinary.com/nuxmz7hv/image/upload/v1788486280/Tipitaka-jpeg-version.jpg' target='_blank'> Guia </a></div>`;
    
    for (const [sigla, info] of Object.entries(totais.nikayas)) {
        const lido = currentUserData.dadosUsuario.leituras.nikayas[sigla] || 0;
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
        const finalWidth = $(this).attr('data-width');$(this).css('width', finalWidth);
    });
}

function renderListaArtigos($container) {
    let html = `<div class="articles-container">`;
    currentUserData.dadosArtigos.forEach(artigo => {
        html += `
            <div class="article-item" onclick="window.location.hash = '${currentUserId}/artigos/${artigo.id}'">
                <span class="article-date">${artigo.data}</span>
                <span class="article-title-list">${artigo.titulo}</span>
            </div>`;
    });
    html += `</div>`;
    $container.html(html);
}

function renderArtigoCompleto($container, artigoId) {
    const artigo = currentUserData.dadosArtigos.find(a => a.id === artigoId);
    if(!artigo) return;
    let html = `
        <div class="article-view">
            <a href="#${currentUserId}/artigos" class="back-btn">&larr; Voltar para Artigos</a>
            <h1>${artigo.titulo}</h1>
            <div class="article-meta">Publicado em ${artigo.data}</div>
            <div class="article-body">${artigo.texto}</div>
        </div>`;
    $container.html(html);
}

function renderListaAlbuns($container) {
    let html = `<div class="gallery-grid">`;
    currentUserData.dadosAlbuns.forEach(album => {
        html += `
            <div class="thumb-wrapper" onclick="window.location.hash = '${currentUserId}/galeria/${album.id}'" title="${album.titulo}">
                <div class="thumb-1x1" style="background-image: url('${album.thumb}')"></div>
            </div>`;
    });
    html += `</div>`;
    $container.html(html);
}

function renderAlbumCompleto($container, albumId) {
    const albumData = currentUserData.conteudoAlbuns[albumId] || [];
    const nomeAlbum = currentUserData.dadosAlbuns.find(a => a.id === albumId)?.titulo || "Álbum";
    
    let html = `
        <a href="#${currentUserId}/galeria" class="back-btn">&larr; Voltar para Galeria</a>
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
    const $modalContent =$('#modalMediaContent');
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