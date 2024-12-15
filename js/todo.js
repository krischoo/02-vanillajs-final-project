const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array 형식으로 저장
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();

	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
	updateToDoTitle();
}
function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);

	li.appendChild(button);
	li.appendChild(span);

	toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
	updateToDoTitle();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// string 형태 - 변환해주어야 함

console.log(savedToDos);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
	updateToDoTitle();
}

function updateToDoTitle() {
	const toDoTitle = document.querySelector(".todo-area h3");
	const thingsToDo = toDos.length;
	toDoTitle.innerText = `To Do List (${thingsToDo})`;
}
