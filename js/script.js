// ==================== JAVASCRIPT (3+ features) ====================

// 1. Welcome Prompt (asks for visitor name and adds greeting)
window.addEventListener('load', function () {
    const visitorName = prompt("👋 Welcome! What's your name?");

    if (visitorName && visitorName.trim() !== "") {
        const greetingHTML = `
            <p style="font-size: 1.25rem; font-weight: 600; color: #2c3e50; margin-bottom: 18px;">
                👋 Hi ${visitorName}! Thanks for visiting my interactive resume!
            </p>
        `;
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.insertAdjacentHTML('afterbegin', greetingHTML);
        }
    }
});

// 2. Show/Hide Toggle for extra projects
document.getElementById('toggle-projects').addEventListener('click', function () {
    const extra = document.getElementById('extra-projects');
    if (extra.style.display === 'none' || extra.style.display === '') {
        extra.style.display = 'block';
        this.textContent = 'Hide Additional Details';
    } else {
        extra.style.display = 'none';
        this.textContent = 'View More Project Details';
    }
});

// 3. Contact form validation + createElement / appendChild
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
        feedback.innerHTML = `<p style="color:#e74c3c;">❌ Please fill all fields!</p>`;
        return;
    }
    if (!email.includes('@')) {
        feedback.innerHTML = `<p style="color:#e74c3c;">❌ Please enter a valid email!</p>`;
        return;
    }

    const success = document.createElement('div');
    success.innerHTML = `<p style="color:#2ecc71;">✅ Thank you, ${name}! Message received.</p>`;
    feedback.appendChild(success);
    form.reset();
});

// 4. Project search filter
document.getElementById('project-search').addEventListener('input', function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? 'block' : 'none';
    });
});

// Animate progress bars
window.addEventListener('load', () => {
    document.querySelectorAll('.progress').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => { 
            bar.style.width = width + '%'; 
        }, 600);
    });
});

// ==================== JQUERY (2+ interactions) ====================
$(document).ready(function () {
    // jQuery 1: Dark mode toggle
    $('#dark-mode-btn').on('click', function () {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        $(this).text(isDark ? '☀️' : '🌙');
    });

    // jQuery 2: Click any skill to highlight
    $('.skill-item').on('click', function () {
        $(this).toggleClass('highlighted');
        if ($(this).hasClass('highlighted')) {
            $(this).css({ transform: 'scale(1.08)', transition: '0.3s' });
            setTimeout(() => $(this).css('transform', 'scale(1)'), 300);
        }
    });
});