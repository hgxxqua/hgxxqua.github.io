
function clear() {
 const listContainer = document.getElementById('list');
    const answer = prompt('Do you really want to delete all items? (y/n)');
    if (answer === 'y') {
        listContainer.innerHTML = '';
    } else if (answer === 'n') {
        return;
    } else {
        alert('answer y or n please');
    }
}

function add() {
    const listContainer = document.getElementById('list');

    const item = document.createElement('div');

    const newItem = prompt('New task?');

    item.innerHTML = `${newItem} <button onclick="deleteItem(this)" id="del">⛔</button><br>`;

    listContainer.appendChild(item);

}
