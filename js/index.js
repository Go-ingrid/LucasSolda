
// BOTÃO VOLTAR AO TOPO
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

const form = document.getElementById("orcamentoForm");
const modal = document.getElementById("modalSucesso");
const btnOk = document.getElementById("btnOk");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // impede recarregar a página

  modal.style.display = "flex";
});

btnOk.addEventListener("click", function() {
  modal.style.display = "none";
  form.reset(); // limpa todos os campos
});