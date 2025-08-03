const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Terminer';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    taskItem.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
}