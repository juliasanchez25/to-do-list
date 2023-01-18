const fade = document.querySelector(".fade");

const toggleModal = (value, taskString) => {
  const modal = document.querySelector(`#${value}-modal`);
  modal.classList.toggle("modal-hide");
  fade.classList.toggle("fade-hide");

  if (!taskString) return;
  console.log(taskString)
  const task = JSON.parse(taskString);
  console.log("task", task);
  document.querySelector("#task-edit-value").value = task.task;

  document.querySelector("#edit-task").action = `/update/${task._id}`;
  document.querySelector("#delete-task").action = `/delete/${task._id}`;

  console.log(task);
};
