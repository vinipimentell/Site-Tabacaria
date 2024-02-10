const images = [
    "primeira_imagem.jpg.jpg",
    "segunda_imagem.jpg.jpg",
    "terceira_imagem.jpg"
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("image");
  
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageSource = images[currentImageIndex];
    imageElement.src = newImageSource;
  }