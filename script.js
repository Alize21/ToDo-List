const button = document.querySelector(".button");
const input = document.querySelector("#input");
const myTasks = document.querySelector("#tasks");

button.addEventListener("click", function () {
  // cek jika user memasukkan input yang benar
  if (input.value.trim() == "") {
    alert("Input tidak valid!");
    return;
  }

  const taskContainer = document.createElement("li");
  const task = document.createElement("p");
  task.textContent = input.value;

  taskContainer.appendChild(task);

  const hapusButton = document.createElement("button");
  const hapusTeks = document.createTextNode("Hapus task");
  hapusButton.appendChild(hapusTeks);
  taskContainer.appendChild(hapusButton);

  const completeButton = document.createElement("button");
  completeButton.textContent = "Tandai sebagai selesai";
  completeButton.classList.add("completed-button");
  taskContainer.appendChild(completeButton);

  taskContainer.classList.add("task");
  hapusButton.classList.add("hapus-task");
  myTasks.appendChild(taskContainer);

  input.value = "";
});

myTasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("hapus-task")) {
    const taskToRemove = e.target.parentElement;
    myTasks.removeChild(taskToRemove);
  }

  if (e.target.classList.contains("completed-button")) {
    const taskToMark = e.target.parentElement;
    taskToMark.classList.toggle("completed");
  }
});
