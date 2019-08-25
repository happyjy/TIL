import { render } from './views';

test('render', () => {
  const tasks = [
    {id: 1, title: 'Sleep', completed: false},
    {id: 2, title: 'Wake up', completed: false},
  ];

  //https://jestjs.io/docs/en/expect#expectstringcontainingstring
  const html = render(tasks);
  expect(html).toMatch('<ul');
  expect(html).toMatch('Sleep');
  expect(html).toMatch('Wake up');
  expect(html).toMatch('Add Task');

});