const splashScreen = document.getElementById('splash-screen');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const totalDuration = 9000;
const intervalTime = 80;
const totalSteps = totalDuration / intervalTime;
let currentStep = 0;

const splashInterval = setInterval(() => {
    currentStep++;
    const percentage = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
    progressBar.style.width = percentage + '%';
    progressText.textContent = 'Cargando... ' + percentage + '%';
    if (currentStep >= totalSteps) {
        clearInterval(splashInterval);
        progressBar.style.width = '100%';
        progressText.textContent = '¡Listo! Bienvenido 🇩🇴';
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 350);
    }
}, intervalTime);

const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuToggle = document.getElementById('menu-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const navButtons = document.querySelectorAll('#sidebar .nav-btn');
const sections = document.querySelectorAll('.section');

function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

function navigateTo(sectionId) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById('sec-' + sectionId);
    if (target) target.classList.add('active');

    navButtons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
        navigateTo(section);
    });
});

function renderProvincias() {
    const grid = document.getElementById('provincias-grid');
    grid.innerHTML = provincias.map(p => `
        <div class="card" style="text-align:center;padding:12px;" onclick="openProvinciaModal('${p.nombre}')">
            <img src="${p.img}" alt="${p.nombre}" style="height:100px;object-fit:cover;border-radius:10px;" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80'">
            <h4 style="font-size:0.85rem;margin-top:6px;">${p.nombre}</h4>
            <p style="font-size:0.7rem;color:var(--text-muted);">${p.desc.substring(0, 45)}...</p>
        </div>
    `).join('');
}

renderProvincias();

function openProvinciaModal(nombre) {
    const p = provincias.find(pr => pr.nombre === nombre) || provincias[0];
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-title').textContent = '📍 ' + p.nombre;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-actividades').textContent = 'Actividades recomendadas: senderismo, gastronomía local, visitas culturales y exploración de paisajes naturales.';
    document.getElementById('destino-modal-overlay').classList.add('active');
}

function openDestinoModal(key) {
    const d = destinosInfo[key];
    if (!d) return;
    document.getElementById('modal-img').src = d.img;
    document.getElementById('modal-title').textContent = d.title;
    document.getElementById('modal-desc').textContent = d.desc;
    document.getElementById('modal-actividades').textContent = d.act;
    document.getElementById('destino-modal-overlay').classList.add('active');
}

function closeDestinoModal() {
    document.getElementById('destino-modal-overlay').classList.remove('active');
}

function getChatbotResponse(query) {
    const q = query.toLowerCase().trim();
    for (const [key, response] of Object.entries(chatbotKnowledge)) {
        if (q.includes(key)) return response;
    }
    if (q.includes('playa') || q.includes('playas')) return 'Las mejores playas incluyen Punta Cana (Bávaro), Samaná (Rincón), Pedernales (Bahía de las Águilas), y Puerto Plata (Playa Dorada). ¡Todas espectaculares!';
    if (q.includes('montaña') || q.includes('montañas')) return 'Para montañas frescas visita Jarabacoa, Constanza y Valle Nuevo. Ideales para senderismo, rafting y clima fresco.';
    if (q.includes('comida') || q.includes('gastronomia')) return 'Prueba el sancocho, la bandera dominicana, mofongo, pescado frito con tostones, y dulces típicos como el majarete. ¡Delicioso!';
    if (q.includes('historia') || q.includes('cultura')) return 'La Zona Colonial de Santo Domingo es el corazón histórico. También visita el Museo de las Casas Reales y la Fortaleza Ozama.';
    return chatbotKnowledge['default'];
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const chatMessages = document.getElementById('chat-messages');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);
    input.value = '';

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        botMsg.textContent = getChatbotResponse(message);
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

let isLoggedIn = false;

function doLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    isLoggedIn = true;
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('profile-area').style.display = 'block';
    document.getElementById('profile-name').textContent = email.split('@')[0];
    document.getElementById('profile-email').textContent = email;
    document.getElementById('perfil-subtitle').textContent = 'Bienvenido de vuelta, viajero';
}

function doLogout() {
    isLoggedIn = false;
    document.getElementById('login-area').style.display = 'block';
    document.getElementById('profile-area').style.display = 'none';
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('perfil-subtitle').textContent = 'Inicia sesión para ver tu historial y deseos';
}

function sendContactEmail() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    const subject = encodeURIComponent('Contacto TravelMate - ' + name);
    const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\nMensaje:\n' + message);
    window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=info@travelmate.com&su=' + subject + '&body=' + body,
        '_blank'
    );
}

document.getElementById('destino-modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeDestinoModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDestinoModal();
        closeSidebar();
    }
});
