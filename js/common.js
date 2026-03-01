/* ============================================
   FEMA Act 1999 — Interactive Explainer
   Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initAccordions();
  initTabs();
  initQuizzes();
  initThemeToggle();
  initCounters();
  initTooltips();
  initSmoothScrollLinks();
  initProgressReading();
});

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ---------- Accordions ---------- */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      // Optionally close siblings
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(sib => {
        if (sib !== item) sib.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ---------- Tabs ---------- */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const btns = tabGroup.querySelectorAll('.tab-btn');
    const container = tabGroup.parentElement;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        container.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.toggle('active', panel.id === target);
        });
      });
    });
  });
}

/* ---------- Quizzes ---------- */
function initQuizzes() {
  document.querySelectorAll('.quiz-box').forEach(quiz => {
    const opts = quiz.querySelectorAll('.quiz-opt');
    const feedback = quiz.querySelector('.quiz-feedback');
    let answered = false;
    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const isCorrect = opt.dataset.correct === 'true';
        opt.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          // Show correct
          opts.forEach(o => { if (o.dataset.correct === 'true') o.classList.add('correct'); });
        }
        if (feedback) {
          feedback.classList.add('show', isCorrect ? 'correct' : 'wrong');
          feedback.textContent = isCorrect
            ? '✓ Correct! ' + (feedback.dataset.correct || '')
            : '✗ Not quite. ' + (feedback.dataset.wrong || '');
        }
      });
    });
  });
}

/* ---------- Theme Toggle ---------- */
function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('fema-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fema-theme', next);
    btn.textContent = next === 'light' ? '🌙' : '☀️';
  });
  // Sync button label
  const initial = document.documentElement.getAttribute('data-theme');
  btn.textContent = initial === 'light' ? '🌙' : '☀️';
}

/* ---------- Number Counter Animation ---------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = parseInt(el.dataset.duration || '1500', 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(eased * target);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- Tooltips (touch support) ---------- */
function initTooltips() {
  if ('ontouchstart' in window) {
    document.querySelectorAll('.tooltip').forEach(tip => {
      tip.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('active'));
        tip.classList.add('active');
      });
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.tooltip')) {
        document.querySelectorAll('.tooltip.active').forEach(t => t.classList.remove('active'));
      }
    });
  }
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------- Reading Progress Bar ---------- */
function initProgressReading() {
  const bar = document.querySelector('.reading-progress .fill');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ---------- Interactive Diagram Helpers ---------- */

// Creates a simple animated connection line between two SVG elements
function drawConnection(svg, x1, y1, x2, y2, color = '#58a6ff') {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1); line.setAttribute('y1', y1);
  line.setAttribute('x2', x2); line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', '2');
  line.classList.add('draw-line');
  svg.appendChild(line);
  return line;
}

// Animated flow particles
function createFlowParticle(container, path, duration = 3000) {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: absolute;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
    pointer-events: none;
    z-index: 10;
  `;
  container.appendChild(particle);
  
  const anim = particle.animate(
    path.map(p => ({ left: p.x + 'px', top: p.y + 'px' })),
    { duration, iterations: Infinity, easing: 'linear' }
  );
  return { particle, anim };
}

/* ---------- SVG Org Chart Generator ---------- */
function generateOrgChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const width = container.clientWidth;
  const nodeW = 160, nodeH = 60, gapX = 40, gapY = 80;
  
  let svg = `<svg width="${width}" height="${data.levels * (nodeH + gapY) + 40}" class="diagram-svg">`;
  
  // Calculate positions
  data.nodes.forEach(node => {
    const x = node.col * (nodeW + gapX) + 20;
    const y = node.level * (nodeH + gapY) + 20;
    
    // Draw connections to parent
    if (node.parent !== undefined) {
      const parent = data.nodes[node.parent];
      const px = parent.col * (nodeW + gapX) + 20 + nodeW / 2;
      const py = parent.level * (nodeH + gapY) + 20 + nodeH;
      svg += `<line x1="${px}" y1="${py}" x2="${x + nodeW/2}" y2="${y}" 
              stroke="#30363d" stroke-width="2" class="draw-line"/>`;
    }
    
    // Draw node
    svg += `<rect x="${x}" y="${y}" width="${nodeW}" height="${nodeH}" rx="8" 
            fill="${node.color || '#161b22'}" stroke="${node.borderColor || '#30363d'}" stroke-width="2"/>`;
    svg += `<text x="${x + nodeW/2}" y="${y + nodeH/2 + 5}" text-anchor="middle" 
            fill="${node.textColor || '#e6edf3'}" font-size="13" font-weight="600" font-family="Inter, sans-serif">${node.label}</text>`;
  });
  
  svg += '</svg>';
  container.innerHTML = svg;
}

/* ---------- Utility: Format Indian currency ---------- */
function formatINR(num) {
  return '₹' + num.toLocaleString('en-IN');
}

/* ---------- Create interactive slider with display ---------- */
function createSlider(containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const label = document.createElement('label');
  label.textContent = config.label;
  
  const display = document.createElement('span');
  display.style.cssText = 'font-weight: 700; color: var(--accent); margin-left: 0.5rem;';
  display.textContent = config.format ? config.format(config.value) : config.value;
  label.appendChild(display);
  
  const input = document.createElement('input');
  input.type = 'range';
  input.min = config.min;
  input.max = config.max;
  input.value = config.value;
  input.step = config.step || 1;
  
  input.addEventListener('input', () => {
    display.textContent = config.format ? config.format(input.value) : input.value;
    if (config.onChange) config.onChange(parseFloat(input.value));
  });
  
  container.appendChild(label);
  container.appendChild(input);
  
  return input;
}
