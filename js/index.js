const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    voltarTopo.classList.add("mostrar");
  } else {
    voltarTopo.classList.remove("mostrar");
  }
});

voltarTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Lógica do Formulário
const form = document.getElementById("orcamentoForm");
const modal = document.getElementById("modalSucesso");
const btnOk = document.getElementById("btnOk");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Impede recarregar a página

    // Coleta os dados do formulário
    const formData = new FormData(form);

    // Envia os dados via AJAX para o FormSubmit
    fetch("https://formsubmit.co/ajax/SEU_EMAIL_REAL@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        modal.style.display = "flex";
      } else {
        alert("Erro ao enviar formulário. Tente novamente.");
      }
    })
    .catch(error => {
      alert("Erro de conexão. Tente novamente.");
    });
  });
}

if (btnOk) {
  btnOk.addEventListener("click", function() {
    modal.style.display = "none";
    if (form) {
      form.reset(); // Limpa todos os campos
    }
  });
}
