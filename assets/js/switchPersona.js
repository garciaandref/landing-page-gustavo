const toggleButton = document.getElementById("toggleButton");
const sections = document.querySelectorAll(".profile-section"); // Seleciona todas as seções

let activeIndex = 0; // Começa com a primeira seção visível (Professional)

function toggleSections() {
	// Oculta a seção ativa
	sections[activeIndex].classList.remove("active");

	// Alterna para a próxima seção
	activeIndex = (activeIndex + 1) % sections.length; // Alterna entre 0 e 1
	sections[activeIndex].classList.add("active");

	// Alterna a classe do botão para mover a chave
	toggleButton.classList.toggle("professional");
	toggleButton.classList.toggle("personal");
}

// Garante que a primeira seção (Professional) inicie visível
sections[0].classList.add("active");

// Adiciona o evento de clique ao botão
toggleButton.addEventListener("click", toggleSections);
