// Esse script pode ser usado caso queira adicionar mais interatividade.
const images = document.querySelectorAll('.image-container img');
    
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
