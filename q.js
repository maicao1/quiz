let currentPage = 1;
let score = 0;

// Mostra a página atual e esconde as outras
function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, index) => {
    page.classList.remove("active");
    if (index === pageNumber - 1) {
      page.classList.add("active");
    }
  });
}

// Inicia ou reinicia o quiz
function startQuiz() {
  currentPage = 2;
  score = 0;
  showPage(2);
}

// Responde a pergunta e avança
function responder(pergunta, correto) {
  if (correto) score++;
  currentPage++;
  if (currentPage <= 8) {
    showPage(currentPage);
  } else {
    // Página de resultado
    document.getElementById("score").innerText = `Você acertou ${score} de 7 perguntas!`;
    showPage(9);
  }
}

// Mostrar a tela inicial ao carregar
window.onload = () => {
  showPage(1);
};

