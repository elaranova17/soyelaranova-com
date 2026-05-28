// ============================================
//   ELARA NOVA — REDISEÑO 2026
//   JavaScript para animaciones y timeline
//   ============================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // TIMELINE: Progresión al scroll
  // ============================================
  const steps = document.querySelectorAll('.timeline-step');
  const progress = document.getElementById('timelineProgress');

  if (steps.length > 0 && progress) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');

          // Calcular progreso
          const activeSteps = document.querySelectorAll('.timeline-step.is-active').length;
          const totalSteps = steps.length;
          progress.style.height = `${(activeSteps / totalSteps) * 100}%`;
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-50px'
    });

    steps.forEach(step => observer.observe(step));
  }

  // ============================================
  // CAJONES: Efecto ripple al clic
  // ============================================
  const toolCards = document.querySelectorAll('.tool-card');

  toolCards.forEach(card => {
    card.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ============================================
  // BOTÓN CÍRCULO: Efecto magnético sutil
  // ============================================
  const btnCirculo = document.querySelector('.btn-circulo');

  if (btnCirculo) {
    btnCirculo.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.03)`;
    });

    btnCirculo.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  }

  // ============================================
  // CURSOS: Animación de entrada al scroll
  // ============================================
  const cursoCards = document.querySelectorAll('.curso-card');

  if (cursoCards.length > 0) {
    const cursoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150); // Stagger de 150ms
        }
      });
    }, { threshold: 0.2 });

    cursoCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      cursoObserver.observe(card);
    });
  }

  // ============================================
  // PRODUCTOS: Animación de entrada al scroll
  // ============================================
  const productoCards = document.querySelectorAll('.producto-card');

  if (productoCards.length > 0) {
    const productoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 100);
        }
      });
    }, { threshold: 0.2 });

    productoCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      productoObserver.observe(card);
    });
  }

  // ============================================
  // CLIENTES: Animación de entrada
  // ============================================
  const clientCards = document.querySelectorAll('.client-card');

  if (clientCards.length > 0) {
    const clientObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 200);
        }
      });
    }, { threshold: 0.2 });

    clientCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      clientObserver.observe(card);
    });
  }

  // ============================================
  // HEADER: Cambio de opacidad al scroll
  // ============================================
  const header = document.querySelector('.elara-header'); // ajustar selector según tu tema

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
      }
    });
  }

});

// ============================================
// KEYFRAMES CSS (inyectar dinámicamente)
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleEffect {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
