const btnTheme = document.getElementById('btn-theme');
let tema = 'claro'


btnTheme.addEventListener('click', () => {
    const themeController = document.querySelector('span');
    
    if (tema === 'claro') {
        tema = 'escuro';
        btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
        temaEscuro();
    } else {
        tema = 'claro';
        btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        temaClaro();
    }

    themeController.id = tema;
});

function temaClaro() {
    document.documentElement.style.setProperty('--cor-background', '#f9f9f9');
    document.documentElement.style.setProperty('--cor-principal', '#111');
    document.documentElement.style.setProperty('--cor-secundaria', '#222');
    document.documentElement.style.setProperty('--cor-background-section', 'white');
    document.documentElement.style.setProperty('--cor-sombra', '#aaa');
    document.documentElement.style.setProperty('--cor-card-anotacao', '#131313');
}

function temaEscuro() {
    document.documentElement.style.setProperty('--cor-background', '#111');
    document.documentElement.style.setProperty('--cor-principal', '#f9f9f9');
    document.documentElement.style.setProperty('--cor-secundaria', '#bbbbbb');
    document.documentElement.style.setProperty('--cor-background-section', '#131313');
    document.documentElement.style.setProperty('--cor-sombra', '#00000079');
    document.documentElement.style.setProperty('--cor-card-anotacao', '#f9f9f9');
}