const todoList = require('../todo');

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe('TodoList Test Suite', () => {
  // beforeAll(() => {
  //   add({
  //     title: 'Test todo',
  //     completed: false,
  //     dueDate: new Date().toLocaleDateString('en-CA'),
  //   });
  // });
  test('Should add new todo', () => {
    const todoItemsCount = all.length;
    add({
      title: 'Test todo',
      completed: false,
      dueDate: new Date().toLocaleDateString('en-CA'),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test('Should mark a todo as complete', () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test('Should retrieve the overdue items', () => {
    add({
      title: 'Overdue todo',
      completed: false,
      dueDate: '2024-03-31',
    });
    const overDueItems = overdue();
    expect(overDueItems.length).toBe(1);
    expect(overDueItems[0].title).toBe('Overdue todo');
  });

  test('Should retrieve the due today items', () => {
    add({
      title: 'Due today todo',
      completed: false,
      dueDate: '2024-04-04',
    });

    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(1);
    //expect(dueTodayItems[0].title).toBe('DueToday Items');
  });

  test('Should retrieve the duelater items', () => {
    add({
      title: 'Due Later',
      completed: false,
      dueDate: '2024-04-06',
    });
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(1);
  });
});
