const btnAtendimento = document.querySelector(".js-atendimento");
const modal = document.querySelector(".js-modal-box");
const btnFechar = document.querySelector(".js__modal--btnFechar");

btnAtendimento.addEventListener("click", () => {
    modal.classList.add("ativo");
});

btnFechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
});