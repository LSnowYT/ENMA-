/* ================================================
   ENMA LANDING PAGE - JAVASCRIPT
   Todas as interações e animações
   ================================================ */

// Espera todo o DOM carregar antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. CONTROLE DO HEADER NO SCROLL
    // =============================================
    const header = document.getElementById('header');
    let ultimaPosicaoScroll = 0;
    
    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;
        
        // Se estiver rolando PARA BAIXO -> esconde header
        if (posicaoAtual > ultimaPosicaoScroll && posicaoAtual > 50) {
            header.classList.add('oculto');
        } 
        // Se estiver rolando PARA CIMA -> mostra header
        else {
            header.classList.remove('oculto');
        }
        
        ultimaPosicaoScroll = posicaoAtual;
    });


    // =============================================
    // 2. CLIQUE NO MENU PARA IR AO FORMULÁRIO
    // =============================================
    const botaoMenu = document.getElementById('menuFormulario');
    const secaoFormulario = document.getElementById('formulario');

    botaoMenu.addEventListener('click', () => {
        secaoFormulario.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });


    // =============================================
    // 3. EFEITO DE PARTÍCULAS AO CLICAR NO PÃO
    // =============================================
    const containerPao = document.querySelector('.bread-container');
    const containerParticulas = document.getElementById('particlesContainer');

    containerPao.addEventListener('click', (evento) => {
        // Posição do clique relativa ao container do pão
        const retangulo = containerPao.getBoundingClientRect();
        const posX = evento.clientX - retangulo.left;
        const posY = evento.clientY - retangulo.top;

        // Cria entre 12 e 20 partículas aleatoriamente
        const quantidadeParticulas = Math.floor(Math.random() * 9) + 12;

        for (let i = 0; i < quantidadeParticulas; i++) {
            
            // Cria elemento da partícula
            const particula = document.createElement('div');
            particula.classList.add('particle');
            
            // Posição inicial no local do clique
            particula.style.left = `${posX}px`;
            particula.style.top = `${posY}px`;
            
            // Movimento aleatório para cada partícula
            const movimentoX = (Math.random() - 0.5) * 180;
            const movimentoY = (Math.random() - 0.5) * 180 - 60;
            
            // Define variáveis CSS para animação
            particula.style.setProperty('--mov-x', `${movimentoX}px`);
            particula.style.setProperty('--mov-y', `${movimentoY}px`);
            
            // Adiciona no container
            containerParticulas.appendChild(particula);
            
            // Remove a partícula automaticamente após a animação acabar
            setTimeout(() => {
                particula.remove();
            }, 1200);
        }
    });


    // =============================================
    // 4. PREVENIR ENVIO PADRÃO DO FORMULÁRIO
    // =============================================
    const formulario = document.getElementById('cadastroForm');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(' Cadastro realizado com sucesso! Você receberá novidades em breve.');
        formulario.reset();
    });

});
