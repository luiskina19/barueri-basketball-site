// Obter elementos do pop-up
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopup');

// Mostrar o pop-up assim que a página for carregada
window.onload = function() {
    popup.style.display = 'flex'; // Exibe o pop-up ao carregar a página
};

// Fechar o pop-up quando clicar no botão de fechar
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // Esconde o pop-up
});

// Fechar o pop-up quando clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
