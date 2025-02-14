const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let currentEditTask = null;

function addTask() {
    if (inputBox.value === '') {
        alert("You must type something");
    } else {
        if (currentEditTask) {
            currentEditTask.firstChild.textContent = inputBox.value;
            currentEditTask = null;
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; 
            li.appendChild(span);

            let edit = document.createElement("button1");
            edit.innerHTML = "\u270F"; 
            edit.className = "edit-btn";
            li.appendChild(edit);

            listContainer.appendChild(li);
        }
        inputBox.value = ""; 
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains("edit-btn")) {
       
        let li = e.target.parentElement;
        currentEditTask = li; 
        inputBox.value = li.firstChild.textContent; 
        inputBox.focus(); 
    }
});

