function openModal(imageSrc, name, height, weight, position, aniversario) {
    const modal = document.getElementById('playerModal');
    const modalImage = document.getElementById('modalImage');
    const playerName = document.getElementById('playerName');
    const playerStats = document.getElementById('playerStats');

    modalImage.src = imageSrc;
    playerName.textContent = name;

    playerStats.innerHTML = `
        Altura: ${height}<br>
        Peso: ${weight}<br>
        Posição: ${position}<br>
        Data de Nascimento: ${aniversario}
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('playerModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Fechar o modal ao pressionar a tecla 'Esc'
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
