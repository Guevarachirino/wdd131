const input = document.querySelector('#favchap');

const button = document.querySelector('button');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'x';

const list = document.querySelector('list');
const li = document.createElement('li');
li.textContent = input.value;

li.append(deleteButton);
list.append(li);


