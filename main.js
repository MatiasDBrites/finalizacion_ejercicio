let inputElement = document.querySelector("input"),
  formElement = document.querySelector("form"),
  listElement = document.querySelector("ul"),
  totalTask = document.getElementById("footer__total");

let taskList = ["Aprender a Programas", "Sacar el Perro"];

function lista() {
  listElement.innerHTML = "";
  taskList.forEach((item) => {
    let newItem = document.createElement("li");

    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

    let enlace = document.createElement("a");
    enlace.classList.add("delete");
    enlace.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    newItem.appendChild(enlace);

    listElement.appendChild(newItem);
  });

  totalTask.innerHTML = taskList.length;

  inputElement.value = "";
}

lista();

function addTask() {
  if(inputElement.value) {
    taskList.push(inputElement.value);
    lista();
  }
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
