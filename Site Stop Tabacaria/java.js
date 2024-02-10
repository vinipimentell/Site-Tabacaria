const imagemCentral = document.getElementById("imagem-central");
const btnNext = document.getElementById("btn-next");
const imagens = ["primeira_imagem.jpg.jpg", "segunda_imagem.jpg.jpg", "imagem3.jpg"];
let indiceImagemAtual = 0;

function alternarImagem() {
  const imagemAtual = imagemCentral.getAttribute("src");
  if (imagemAtual === "segunda_imagem.jpg.jpg") {
    imagemCentral.src = "primeira_imagem.jpg.jpg";
  } else {
    imagemCentral.src = "imagem3.jpg";
  }
}

btnNext.addEventListener("click", alternarImagem);

const images = [
  "primeira_imagem.jpg.jpg",
  "segunda_imagem.jpg.jpg",
  "terceira_imagem.jpg"
];

let currentImageIndex = 0;
const imageElement = document.getElementById("image");

function changeImage() {
  images = ["seta4.jpg"]
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const newImageSource = images[currentImageIndex];
  imageElement.src = newImageSource;
}