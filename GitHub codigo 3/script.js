  const imagem = document.getElementById("minha-imagem");
  const imagemAlternativa = "https://via.placeholder.com/200x150"; // Substitua pela sua imagem

  imagem.addEventListener("click", function() {
    if (imagem.src.includes("200")) {
      imagem.src = imagemAlternativa;
    } else {
      imagem.src = "https://via.placeholder.com/200"; // Voltar para a imagem inicial
    }
  });
