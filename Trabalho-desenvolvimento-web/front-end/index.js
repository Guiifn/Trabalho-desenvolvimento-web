// =============================
// DATABASE SIMULADO
// =============================
const usuarios = [
    {
        email: "teste@email.com",
        senha: "123",
        pontos: 35
    }
];

// =============================
// FUNÇÃO LOGIN
// =============================
function login() {
    const emailInput = document.getElementById("email").value;
    const senhaInput = document.getElementById("senha").value;

    const usuario = usuarios.find(u => u.email === emailInput && u.senha === senhaInput);

    if (usuario) {
        atualizarInterfaceUsuario(usuario);
        alert(`Bem-vindo de volta! Você possui ${usuario.pontos} pontos.`);
    } else {
        alert("Erro: Credenciais inválidas.");
    }
}

// =============================
// ATUALIZAÇÃO DE UI
// =============================
function atualizarInterfaceUsuario(user) {
    const pointsDisplay = document.getElementById("user-points");
    const pointsBar = document.getElementById("points-bar");

    // Animação numérica simples
    pointsDisplay.innerText = user.pontos;
    
    // Calcula progresso (baseado em meta de 50 pontos)
    let percent = (user.pontos / 50) * 100;
    pointsBar.style.width = (percent > 100 ? 100 : percent) + "%";
    
    // Scroll suave para a seção de fidelidade
    document.getElementById("fidelidade").scrollIntoView({ behavior: 'smooth' });
}

// Efeito de transparência no scroll da Navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = '#000';
    } else {
        nav.style.padding = '20px 0';
        nav.style.background = 'rgba(11, 11, 11, 0.95)';
    }
});