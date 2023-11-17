document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('to-do-form');
    const todoInput = document.getElementById('to-do');
    const todoList = document.getElementById('to-do-list');

    // Function to add a new to-do item
    function addTodoItem(event) {
        event.preventDefault(); // Prevent form submission

        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('to-do-item', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

            const todoContent = document.createElement('p');
            todoContent.classList.add('m-0');
            todoContent.textContent = todoText;

            const doneButton = document.createElement('button');
            doneButton.classList.add('btn', 'btn-danger');
            doneButton.textContent = 'Done';
            doneButton.addEventListener('click', function () {
                listItem.remove(); // Remove the clicked item
            });

            listItem.appendChild(todoContent);
            listItem.appendChild(doneButton);

            todoList.appendChild(listItem);

            todoInput.value = ''; // Clear the input field
        }
    }

    todoForm.addEventListener('submit', addTodoItem);
});