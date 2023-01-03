
const task_input = document.querySelector(".task")
const button = document.querySelector(".add")
const to_do = document.querySelector(".needTodo")

//adds itesm
button.addEventListener("click", add_Task);

function add_Task(event) {
    event.preventDefault();

    // this code gets the value of what is written
    const text = task_input.value

    // this if statement makes sure that there is text or it will send an alert message
    if (!text) {
        alert("You need to add some text")
        return;
    }

    //this code creates a new div called tod0
    const newdiv_todo = document.createElement("div")
    newdiv_todo.classList.add("todo")

    //this code creates a new div called do
    const new_div = document.createElement("div")
    new_div.classList.add("do")

    //this code puts new_div inside newdiv_todo
    newdiv_todo.appendChild(new_div)
    to_do.appendChild(newdiv_todo)

    //this creates a new input inside new_dev
    const new_input = document.createElement("input")
    new_input.classList.add("required")
    new_input.value = text
    new_input.setAttribute("readonly", "readonly")

    //this code resets the input field
    task_input.value = ""

    new_div.appendChild(new_input)

     // this creates a new button inside new_dev
    const delete_button = document.createElement("button")
    delete_button.classList.add("delete")
    delete_button.innerText = 'Delete';
    new_div.appendChild(delete_button)



    // this code deletes
    delete_button.addEventListener("click", () => {
        newdiv_todo.removeChild(new_div)
    })



}