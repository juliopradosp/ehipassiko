document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("app-root");
    const navLinks = document.querySelectorAll(".nav-link");
    let articlesData = [];

    // Função principal de Roteamento (Router)
    async function handleRoute() {
        // Pega a URL após o '#' (ex: /pratica/artigo-1)
        let hash = window.location.hash.substring(1) || "/home";
        let parts = hash.split("/").filter(p => p);
        let baseRoute = parts[0] || "home";
        let articleSlug = parts[1] || null;

        // Esconde todas as páginas e mostra a atual com animação
        document.querySelectorAll(".page-view").forEach(page => {
            page.classList.add("d-none");
            page.classList.remove("fade-in"); 
        });

        const activePage = document.getElementById(`page-${baseRoute}`);
        if(activePage) {
            activePage.classList.remove("d-none");
            // Força o reflow para reiniciar a animação CSS
            void activePage.offsetWidth;
            activePage.classList.add("fade-in");
        }

        // Atualiza estilo da Navbar
        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === `#/${baseRoute}`) {
                link.classList.add("active");
            }
        });

        // Lógica específica para a página PRÁTICA (Mini blog)
        if(baseRoute === "pratica") {
            if(articlesData.length === 0) {
                await loadArticlesList();
            }
            if(articleSlug) {
                loadArticleContent(articleSlug);
            } else {
                document.getElementById("article-content").innerHTML = `<p class="text-muted text-center mt-5">Selecione um artigo na lista ao lado para ler.</p>`;
                updateActiveArticleInList(null);
            }
        }
    }

    // Carrega o JSON da lista de artigos
    async function loadArticlesList() {
        try {
            const response = await fetch("artigos.json");
            articlesData = await response.json();
            renderArticlesList();
        } catch (error) {
            document.getElementById("article-list").innerHTML = "<p class='text-danger text-sm'>Erro ao carregar lista de artigos.</p>";
            console.error("Erro ao buscar artigos:", error);
        }
    }

    // Renderiza a barra lateral (scroll) na página Prática
    function renderArticlesList() {
        const listContainer = document.getElementById("article-list");
        listContainer.innerHTML = ""; // Limpa o loading

        articlesData.forEach(artigo => {
            const btn = document.createElement("a");
            btn.href = `#/pratica/${artigo.slug}`;
            btn.className = "article-btn text-decoration-none";
            btn.setAttribute("data-slug", artigo.slug);
            btn.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>${artigo.titulo}</span>
                    <small class="text-muted" style="font-size: 0.75rem;">${artigo.data}</small>
                </div>
            `;
            listContainer.appendChild(btn);
        });
    }

    // Baixa o HTML do artigo específico e injeta na div vazia
    async function loadArticleContent(slug) {
        const contentDiv = document.getElementById("article-content");
        contentDiv.innerHTML = `<div class="text-center mt-5"><div class="spinner-border text-warning" role="status"></div><p>Carregando ensinamentos...</p></div>`;
        
        try {
            const response = await fetch(`artigos/${slug}.html`);
            if(!response.ok) throw new Error("Artigo não encontrado");
            const html = await response.text();
            
            // Injeta o HTML e adiciona animação
            contentDiv.innerHTML = html;
            contentDiv.classList.remove("fade-in");
            void contentDiv.offsetWidth; // Força o reflow para a animação reiniciar
            contentDiv.classList.add("fade-in");
            
            updateActiveArticleInList(slug);

            // Rolagem suave para o topo do artigo
            setTimeout(() => {
                const navbar = document.querySelector('.custom-navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0; // Pega a altura real do seu menu
                
                // Calcula a posição do elemento na página
                const elementPosition = contentDiv.getBoundingClientRect().top + window.scrollY;
                
                // Subtrai a altura do menu e mais 20px de margem visual
                const offsetPosition = elementPosition - navbarHeight - 20;

                // Rola a tela até a posição calculada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);

        } catch (error) {
            contentDiv.innerHTML = `<div class="alert alert-danger">Desculpe, o artigo não pôde ser carregado.</div>`;
        }
    }

    // Destaca o artigo atual na barra de rolagem
    function updateActiveArticleInList(slug) {
        document.querySelectorAll(".article-btn").forEach(btn => {
            btn.classList.remove("active");
            if(btn.getAttribute("data-slug") === slug) {
                btn.classList.add("active");
            }
        });
    }

    // --- LÓGICA DO MODAL DE MÍDIA (FOTOS E VÍDEOS LOCAIS) ---
    const mediaModal = document.getElementById('mediaModal');
    if (mediaModal) {
        const modalVideo = document.getElementById('modalVideo');
        
        mediaModal.addEventListener('show.bs.modal', event => {
            // O elemento exato que o usuário clicou
            const triggerElement = event.relatedTarget;
            
            // Tenta pegar o tipo. Se não tiver 'data-type', ele assume que é 'image' por padrão!
            const type = triggerElement.getAttribute('data-type') || 'image'; 
            const desc = triggerElement.getAttribute('data-desc') || '';
            
            const imgContainer = document.getElementById('modalImageContainer');
            const videoContainer = document.getElementById('modalVideoContainer');
            const modalImage = document.getElementById('modalImage');
            
            document.getElementById('modalDescription').textContent = desc;

            if (type === 'local-video') {
                const videoSrc = triggerElement.getAttribute('data-video-src');
                
                imgContainer.classList.add('d-none');
                videoContainer.classList.remove('d-none');
                
                modalVideo.src = videoSrc;
                modalVideo.load();
                
                // O setTimeout ajuda a evitar bloqueios de autoplay dos navegadores
                setTimeout(() => {
                    const playPromise = modalVideo.play();
                    // Tratamento de erro silencioso caso o navegador bloqueie o autoplay
                    if (playPromise !== undefined) {
                        playPromise.catch(error => console.log("O usuário precisa dar play manualmente."));
                    }
                }, 150);
                
            } else {
                // É uma FOTO. Tenta pegar o 'data-src'. Se não tiver, pega o 'src' direto
                const imgSrc = triggerElement.getAttribute('data-src') || triggerElement.getAttribute('src');
                
                videoContainer.classList.add('d-none');
                imgContainer.classList.remove('d-none');
                modalImage.src = imgSrc;
            }
        });

        // Quando o modal fechar, limpa tudo
        mediaModal.addEventListener('hidden.bs.modal', event => {
            modalVideo.pause();
            modalVideo.src = "";
            document.getElementById('modalImage').src = "";
        });
    }

    // Ouve as mudanças no Hash da URL (ao clicar em links ou voltar/avançar no navegador)
    window.addEventListener("hashchange", handleRoute);
    
    // Inicia a rota na primeira vez que a página carrega
    handleRoute();

    // Para a data do footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // --- BLOQUEIO DE BOTÃO DIREITO NAS IMAGENS ---
    document.addEventListener('contextmenu', function(event) {
        // Verifica se o elemento clicado tem a classe da galeria ou é a imagem do modal
        if (event.target.classList.contains('gallery-img') || event.target.id === 'modalImage') {
            event.preventDefault(); // Cancela a abertura do menu
        }
    });
});