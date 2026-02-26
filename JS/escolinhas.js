// Exemplo de JavaScript para interatividade adicional (caso necessário)
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });
  
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  