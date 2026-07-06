// ================= J A V A S C R I P T - PARTE 1 =================

// Configuração das Secções do Menu
const modules = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'dropshipping', name: 'Dropshipping' },
    { id: 'hotmart', name: 'Hotmart' },
    { id: 'escalepay', name: 'EscalePay' },
    { id: 'kiwify', name: 'Kiwify' },
    { id: 'cakto', name: 'Cakto' },
    { id: 'mocambique', name: 'Estratégias para Moçambique' },
    { id: 'mentalidade', name: 'Mentalidade & Execução' }
];

// Inicialização Dinâmica dos Menus
function initApp() {
    const nav = document.getElementById('main-nav');
    const grid = document.getElementById('dashboard-grid');
    
    modules.forEach(mod => {
        const navBtn = document.createElement('button');
        navBtn.innerText = mod.name;
        navBtn.id = `nav-btn-${mod.id}`;
        navBtn.onclick = () => navigateTo(mod.id);
        nav.appendChild(navBtn);

        if(mod.id !== 'dashboard') {
            const gridBtn = document.createElement('button');
            gridBtn.className = 'btn btn-outline';
            gridBtn.style.padding = '20px';
            gridBtn.style.fontSize = '15px';
            gridBtn.innerText = mod.name;
            gridBtn.onclick = () => navigateTo(mod.id);
            grid.appendChild(gridBtn);
        }
    });
}
// ================= J A V A S C R I P T - PARTE 2 =================

// Controle de Telas Globais
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Sistema de Login Simplificado com Senha Universal
function handleLogin() {
    const passwordInput = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');
    
    if (passwordInput === "Dominaagora123") {
        errorElement.style.display = 'none';
        showScreen('app-wrapper');
        navigateTo('dashboard');
    } else {
        errorElement.style.display = 'block';
    }
}

// Navegação entre Módulos de Conteúdo
function navigateTo(moduleId) {
    document.querySelectorAll('.app-view').forEach(view => view.style.display = 'none');
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`view-${moduleId}`).style.display = 'block';
    document.getElementById(`nav-btn-${moduleId}`).classList.add('active');
    
    const footer = document.getElementById('dash-footer');
    if(moduleId === 'dashboard') {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Executar inicialização do menu ao carregar o ficheiro
initApp();
