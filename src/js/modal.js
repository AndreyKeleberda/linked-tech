import refs from "./refs.js";
const { modalButton, modal, modalContent, closeModalBtn } = refs;
console.log(modalButton, modal, modalContent, closeModalBtn);

modalButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    modal.classList.remove("is-hidden");
  });
});

window.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
  console.log(e);
});

closeModalBtn.addEventListener("click", (e) => {
  modal.classList.add("is-hidden");
  modalContent.innerHTML = "";
});
