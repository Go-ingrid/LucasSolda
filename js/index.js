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



if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

  
    modal.style.display = "flex";
  });
}

if (btnOk) {
  btnOk.addEventListener("click", function() {
    modal.style.display = "none";
    if (form) {
      form.reset(); 
    }
  });
}
