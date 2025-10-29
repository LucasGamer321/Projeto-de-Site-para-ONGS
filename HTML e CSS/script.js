// 🌿 Espera o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // 1️⃣ MENU / HEADER INTERATIVO
  // =============================

  // Destacar link ativo no menu
  const links = document.querySelectorAll(".nave a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("ativo");
    }
  });

  // Menu responsivo (hamburger simples)
  const nav = document.querySelector(".nave");
  const toggle = document.createElement("div");
  toggle.classList.add("menu-toggle");
  toggle.innerHTML = "☰";
  document.querySelector(".navebar").prepend(toggle);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("aberto");
  });

  // =============================
  // 2️⃣ FORMULÁRIO DE CADASTRO
  // =============================

  const form = document.querySelector("form");
  if (form) {

    const cpfInput = document.querySelector("#cpf");
    const telefoneInput = document.querySelector("#telefone");
    const cepInput = document.querySelector("#cep");

    // Máscara de CPF
    cpfInput?.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 11) valor = valor.slice(0, 11);
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = valor;
    });

    // Máscara de telefone
    telefoneInput?.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 11) valor = valor.slice(0, 11);
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
      e.target.value = valor;
    });

    // Máscara de CEP
    cepInput?.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 8) valor = valor.slice(0, 8);
      valor = valor.replace(/(\d{5})(\d{3})$/, "$1-$2");
      e.target.value = valor;
    });

    // Mensagem de sucesso ao enviar
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();

      const msg = document.createElement("div");
      msg.textContent = "✅ Cadastro enviado com sucesso!";
      msg.classList.add("mensagem-sucesso");
      form.appendChild(msg);

      setTimeout(() => msg.remove(), 4000);
    });
  }

  // =============================
  // 3️⃣ PROJETOS — ANIMAÇÕES
  // =============================

  const projetos = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
      }
    });
  }, { threshold: 0.3 });

  projetos.forEach(projeto => observer.observe(projeto));

});