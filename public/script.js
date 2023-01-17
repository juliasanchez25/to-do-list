const fade = document.querySelector(".fade");

const toggleModal = (value) => {
  const modal = document.querySelector(`#${value}-modal`);
  modal.classList.toggle("modal-hide");
  fade.classList.toggle("fade-hide");

  const taskString = document.querySelector("#task-value").value;
  const task = JSON.parse(taskString);
  console.log(task);
};
