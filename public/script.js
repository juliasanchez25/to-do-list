const fade = document.querySelector(".fade");

const toggleModal = (value) => {
  const modal = document.querySelector(`#${value}-modal`);
  modal.classList.toggle("modal-hide");
  fade.classList.toggle("fade-hide");
};
