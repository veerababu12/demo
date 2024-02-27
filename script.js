function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskInput.value}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentNode;
    taskList.removeChild(li);
}
