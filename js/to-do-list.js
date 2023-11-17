document.getElementById('to-do-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const toDoInput = document.getElementById('to-do');
    const toDoText = toDoInput.value.trim();

    if (toDoText !== '') {
        createToDoItem(toDoText);
        toDoInput.value = '';
    }
});

function createToDoItem(text) {
    const toDoList = document.getElementById('to-do-list')
}
