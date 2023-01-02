
const task_input = document.querySelector(".task")
const button = document.querySelector(".add")
const to_do = document.querySelector(".needTodo")


//adds itesm
button.addEventListener('click', addTask);
function addTask(event) {
    event.preventDefault();

    if (!task_input.value) {
        alert("You need to add some text")
        return;
    }
}