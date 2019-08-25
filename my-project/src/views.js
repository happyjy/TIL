export const render = tasks => {
  const task = tasks[0];
  return `
    <ul>
      ${task.map(task => `      
        <li>${task.title}</li>
      `).join('')}
    </ul>
    <div>
      <input type="text" id="input-task-title">
      <button type="button" id="button-add-task">Add Task</button>
    </div>
  `;
}