const taskDescription = document.getElementById('taskDescription');
const taskSubmit = document.getElementById('taskSubmit');
const taskReset = document.getElementById('taskReset');
const tasks = document.getElementById('tasks');

const isLogging = true;

const jslog = (text) => {
	if (!isLogging) return;

	console.log(text);
};

const addNewEntry = (text, targetElem) => {
	// create the list element itself
	const task = document.createElement('li');

	// create a p and a checkbox
	const paragraph = document.createElement('p');
	const checkbox = document.createElement('input');

	// fill in the content
	paragraph.innerText = text;
	checkbox.setAttribute('type', 'checkbox');

	// assemble the final entry
	task.append(checkbox);
	task.append(paragraph);

	targetElem.prepend(task);
};

// fired when pressing enter or the add button
const handleEnter = (event) => {
	if (event.code === 'Enter' || event.type === 'click') {
		addNewEntry(taskDescription.value, tasks);
		handleReset();
	}
};

// reset button handler
const handleReset = () => {
	jslog('reset');

	taskDescription.value = '';
};

/*
 * assign event handlers
 */
taskDescription.addEventListener('keydown', (e) => {
	handleEnter(e);
});

taskSubmit.addEventListener('click', (e) => {
	handleEnter(e);
});

taskReset.addEventListener('click', (e) => {
	handleReset();
});
