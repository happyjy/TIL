import { render } from './views';
import { bindEvents } from './lisenter';

// console.log("Hello, world !!");
const tasks = [
  {id: 1, title: 'Sleep', completed: false},
  {id: 2, title: 'Wake up', completed: false},
];

const bindEvents = (id, eventType, callback) => {
  const el = document.getElementById
  el.addEventListener(eventType, callback);
}

const el = document.getElementById('app');
// el.innerHTML = 'Hello, world !!!';
el.innerHTML = render(tasks);
bindEvents();