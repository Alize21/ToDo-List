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
  const task = document.createTextNode(input.value);
  taskContainer.appendChild(task);

  const hapusButton = document.createElement("button");
  const hapusTeks = document.createTextNode("Hapus task");
  hapusButton.appendChild(hapusTeks);
  taskContainer.appendChild(hapusButton);

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
});
