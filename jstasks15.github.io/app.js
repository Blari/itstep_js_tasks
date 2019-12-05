//Случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//Формируем bootstrap сетку
function bootGrid(e) {
  let body = document.querySelector("body");
  let container = document.createElement("div");
  let row = document.createElement("div");
  let row2 = document.createElement("div");
  let col = document.createElement("div");
  let col1 = document.createElement("div");
  let col2 = document.createElement("div");

  let form = document.createElement("form");
  let mainDiv = document.createElement("div");
  let formDiv = document.createElement("div");
  let formDiv1 = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let btn = document.createElement("button");
  let formDiv2 = document.createElement("div");
  let btnDel = document.createElement("button");
  /* <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Кнопка</button>
  </div> */

  btnDel.classList.add("btn");
  //btnDel.classList.add("btn-outline-secondary");
  btnDel.classList.add("btn-warning");
  btnDel.setAttribute("type", "button");
  mainDiv.classList.add("input-group");
  formDiv.classList.add("custom-file");
  formDiv2.classList.add("input-group-prepend");
  input.classList.add("custom-file-input");
  input.setAttribute("id", "inputGroupFile04");
  input.setAttribute("type", "file");
  input.setAttribute("aria-describedby", "inputGroupFileAddon04");
  input.addEventListener("change", fileLoad);
  label.classList.add("custom-file-label");
  label.setAttribute("for", "inputGroupFile04");
  label.append("Choose file");
  btnDel.append("del");
  btnDel.addEventListener("click", delFoo);

  formDiv1.classList.add("input-group-append");
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "inputGroupFileAddon04");
  btn.append("add");
  btn.addEventListener("click", addBtn);

  col.classList.add("col-md-6");
  col.classList.add("d-flex");
  col.classList.add("justify-content-center");
  col1.classList.add("col-md-6");
  col1.classList.add("d-flex");
  col1.classList.add("justify-content-center");
  col2.classList.add("col-md-12");
  col2.classList.add("box");
  row.classList.add("row");
  row2.classList.add("row");
  container.classList.add("container");

  formDiv2.append(btnDel);
  formDiv.append(input);
  formDiv.append(label);
  formDiv1.append(btn);
  mainDiv.append(formDiv2);
  mainDiv.append(formDiv);
  mainDiv.append(formDiv1);
  form.append(mainDiv);

  col.append(form);
  row.append(col);
  row.append(col1);
  row2.append(col2);
  container.append(row);
  container.append(row2);
  body.prepend(container);
}

function addBtn() {
  let form = document.querySelector("form");
  let mainDiv = document.createElement("div");
  let formDiv = document.createElement("div");
  let formDiv1 = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let btn = document.createElement("button");
  let formDiv2 = document.createElement("div");
  let btnDel = document.createElement("button");

  formDiv2.classList.add("input-group-prepend");
  mainDiv.classList.add("input-group");
  formDiv.classList.add("custom-file");
  input.classList.add("custom-file-input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "inputGroupFile04");
  input.setAttribute("aria-describedby", "inputGroupFileAddon04");
  input.addEventListener("change", fileLoad);
  label.classList.add("custom-file-label");
  label.setAttribute("for", "inputGroupFile04");
  label.append("Choose file");

  btnDel.classList.add("btn");
  btnDel.addEventListener("click", delFoo);
  //btnDel.classList.add("btn-outline-secondary");
  btnDel.classList.add("btn-warning");
  formDiv1.classList.add("input-group-append");
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "inputGroupFileAddon04");
  btn.append("add");
  btnDel.append("del");
  btn.addEventListener("click", addBtn);
  formDiv2.append(btnDel);
  formDiv.append(input);
  formDiv.append(label);
  formDiv1.append(btn);
  mainDiv.append(formDiv2);
  mainDiv.append(formDiv);
  mainDiv.append(formDiv1);
  form.append(mainDiv);
}

function fileLoad() {
  this.nextSibling.innerHTML = this.files[0].name;
}
function delFoo(e) {
  e.preventDefault();
}
bootGrid();
