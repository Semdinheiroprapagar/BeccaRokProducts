document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Header ao rolar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animação de elementos ao scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                const animation = element.getAttribute('data-aos');
                const delay = element.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animate__animated', `animate__${animation}`);
                    element.style.opacity = 1;
                }, delay);
                
                element.removeAttribute('data-aos');
            }
        });
    }
    
    // Inicializar animações
    if (document.querySelectorAll('[data-aos]').length > 0) {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Executar uma vez no carregamento
    }
    
    // Carrossel de imagens
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (carousel && carouselItems.length > 0) {
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        
        // Inicializar indicadores
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        // Função para atualizar o carrossel
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Atualizar indicadores
            if (indicators.length > 0) {
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
            
            // Pré-carregar próximas imagens para transições mais suaves
            const nextIndex = (currentIndex + 1) % totalItems;
            const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
            
            // Garantir que as próximas imagens estejam carregadas
            const nextItem = carouselItems[nextIndex].querySelector('img');
            const prevItem = carouselItems[prevIndex].querySelector('img');
            
            if (nextItem && nextItem.getAttribute('src')) {
                const preloadNext = new Image();
                preloadNext.src = nextItem.getAttribute('src');
            }
            
            if (prevItem && prevItem.getAttribute('src')) {
                const preloadPrev = new Image();
                preloadPrev.src = prevItem.getAttribute('src');
            }
        }
        
        // Avançar para o próximo slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }
        
        // Voltar para o slide anterior
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }
        
        // Ir para um slide específico
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        // Adicionar event listeners aos botões
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                stopAutoplay();
                setTimeout(startAutoplay, 5000);
            });
            
            prevBtn.addEventListener('click', function() {
                prevSlide();
                stopAutoplay();
                setTimeout(startAutoplay, 5000);
            });
        }
        
        // Adicionar event listeners aos indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                stopAutoplay();
                setTimeout(startAutoplay, 5000);
            });
        });
        
        // Navegar com as teclas de seta
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                nextSlide();
                stopAutoplay();
                setTimeout(startAutoplay, 5000);
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                stopAutoplay();
                setTimeout(startAutoplay, 5000);
            }
        });
        
        // Autoplay do carrossel
        let autoplayInterval;
        
        function startAutoplay() {
            // Reduzir o tempo para 3 segundos (3000ms) para transições mais rápidas
            autoplayInterval = setInterval(nextSlide, 3000);
        }
        
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }
        
        // Iniciar autoplay imediatamente
        startAutoplay();
        
        // Parar autoplay quando o mouse estiver sobre o carrossel
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoplay);
            carouselContainer.addEventListener('mouseleave', startAutoplay);
            
            // Suporte para toque em dispositivos móveis
            carouselContainer.addEventListener('touchstart', stopAutoplay);
            carouselContainer.addEventListener('touchend', startAutoplay);
        }
        
        // Garantir que o carrossel continue funcionando mesmo se o usuário mudar de aba e voltar
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'visible') {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
        
        // Inicializar o carrossel
        updateCarousel();
        
        // Adicionar swipe para dispositivos móveis
        let touchStartX = 0;
        let touchEndX = 0;
        
        carouselContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        carouselContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe para a esquerda (próximo slide)
                nextSlide();
            } else if (touchEndX > touchStartX + 50) {
                // Swipe para a direita (slide anterior)
                prevSlide();
            }
        }
    }
    
    // Formulário de contato para WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            return sendWhatsApp(e);
        });
    }
    
    // Animação de botões do WhatsApp
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });
    
    // Responsividade para dispositivos móveis
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            if (header) {
                header.style.padding = '15px 20px';
            }
        } else {
            if (header) {
                header.style.padding = window.scrollY > 50 ? '10px 50px' : '15px 50px';
            }
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    
    // Funcionalidade do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle da classe active para a questão atual
                this.classList.toggle('active');
                
                // Alternar o ícone
                const icon = this.querySelector('.faq-toggle i');
                if (this.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
                
                // Fechar outras questões abertas (comportamento de acordeão)
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                        otherQuestion.classList.remove('active');
                        const otherIcon = otherQuestion.querySelector('.faq-toggle i');
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                });
            });
        });
    }
});

// Função para enviar mensagem via WhatsApp
function sendWhatsApp(event) {
    event.preventDefault();
    
    // Obter valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Criar mensagem para WhatsApp
    let whatsappMessage = `Olá! Sou ${name}.\n\n`;
    whatsappMessage += `Email: ${email}\n`;
    if (phone) whatsappMessage += `Telefone: ${phone}\n`;
    whatsappMessage += `\nMensagem: ${message}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp (sem o +)
    const whatsappNumber = '16994549960';
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Adicionar animação ao botão
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    submitBtn.classList.add('pulse');
    submitBtn.innerHTML = 'Redirecionando... <i class="fas fa-spinner fa-spin"></i>';
    
    // Pequeno atraso para mostrar a animação antes de redirecionar
    setTimeout(() => {
        // Redirecionar para o WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpar formulário
        document.getElementById('contactForm').reset();
        
        // Restaurar botão
        submitBtn.classList.remove('pulse');
        submitBtn.innerHTML = 'Enviar via WhatsApp <i class="fab fa-whatsapp"></i>';
    }, 1000);
    
    return false;
} 