const btnAtendimento = document.querySelector(".js-atendimento");
const modal = document.querySelector(".js-modal-box")

btnAtendimento.addEventListener("click", () => {
    modal.classList.add("ativo");
});