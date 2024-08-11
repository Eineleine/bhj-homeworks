const tasksInput = document.querySelector('.tasks__input');
const btnTasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const btnRemove = [...document.getElementsByClassName('task__remove')];
const tasks = [...document.getElementsByClassName('task')];
btnTasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (tasksInput.value !== '') {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        tasksList.append(newTask);
        const newTaskTitle = document.createElement('div');
        newTaskTitle.className = 'task__title';
        newTaskTitle.innerText = tasksInput.value;
        newTask.append(newTaskTitle);
        const newDelete = document.createElement('a');
        newDelete.className = 'task__remove';
        newDelete.innerHTML = '&times;';
        newDelete.setAttribute('href', '#');
        newTask.append(newDelete);
        newDelete.addEventListener('click', () => {
            tasksList.removeChild(newTask);
        });
        newDelete.removeEventListener;
        tasksInput.value = '';
    } else {alert('Введите текст!');}
});
