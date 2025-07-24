// Dark Mode Toggle
const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Load saved mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

// Language Toggle
const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => {
    const html = document.documentElement;
    html.lang = html.lang === 'ar' ? 'en' : 'ar';
    html.dir  = html.lang === 'ar' ? 'rtl' : 'ltr';
    langBtn.textContent = html.lang === 'ar' ? 'EN' : 'AR';
});

// Filter Articles
const filters = document.querySelectorAll('.filter');
const cards   = document.querySelectorAll('.card');

filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.filter;
    cards.forEach(card => {
        card.style.display = (target === 'all' || card.classList.contains(target)) ? 'block' : 'none';
    });
}));

// Form Submits
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح، شكراً لك!');
    e.target.reset();
});

document.getElementById('newsForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('تم الاشتراك بنجاح!');
    e.target.reset();
});