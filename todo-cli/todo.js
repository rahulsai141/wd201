const compareoverdue = (date1, date2) => {
  const [year1, month1, day1] = date1.split('-').map(Number);
  const [year2, month2, day2] = date2.split('-').map(Number);
  if (year1 < year2) {
    return true;
  }
  if (year1 == year2) {
    if (month1 < month2) {
      return true;
    }
    if (month1 == month2) {
      if (day1 < day2) {
        return true;
      }
    }
  }
  return false;
};
const compareduetoday = (date1, date2) => {
  const [year1, month1, day1] = date1.split('-').map(Number);
  const [year2, month2, day2] = date2.split('-').map(Number);
  if (year1 == year2 && month1 == month2 && day1 == day2) {
    return true;
  }
  return false;
};
const compareduelater = (date1, date2) => {
  const [year1, month1, day1] = date1.split('-').map(Number);
  const [year2, month2, day2] = date2.split('-').map(Number);
  if (year1 > year2) {
    return true;
  }
  if (year1 == year2) {
    if (month1 > month2) {
      return true;
    }
    if (month1 == month2) {
      if (day1 > day2) {
        return true;
      }
    }
  }
  return false;
};

// const compare=()=>{
//   const date1=new Date(date1);
// }
const todoList = () => {
  all = [];
  const add = todoItem => {
    all.push(todoItem);
  };
  const markAsComplete = index => {
    all[index].completed = true;
    console.log(all);
  };

  const overdue = () => {
    let i = 0;
    const due = [];
    console.log(due);
    while (i < all.length) {
      if (compareoverdue(all[i].dueDate, today) && all[i].completed == false) {
        due.push(all[i].title);
      }
      i++;
    }
    return due;

    // Write the date check condition here and return the array
    // of overdue items accordingly.
  };

  const dueToday = () => {
    let i = 0;
    const nodue = [];
    console.log(nodue);
    while (i < all.length) {
      if (compareduetoday(all[i].dueDate, today)) {
        nodue.push(all[i].title);
      }
      i++;
    }
    return nodue;
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  };

  const dueLater = () => {
    let i = 0;
    const later = [];
    console.log(later);
    while (i < all.length) {
      if (compareduelater(all[i].dueDate, today) && all[i].completed == false) {
        later.push(all[i].title);
      }
      i++;
    }
    return later;

    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  };

  const toDisplayableList = list => {
    let i = 0;
    while (i < list.length) {
      console.log(list[i]);
      i++;
    }
    // Format the To-Do list here, and return the output string
    // as per the format given above.
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split('T')[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
todos.add({ title: 'Pay rent', dueDate: today, completed: true });
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });

console.log('My Todo-list\n');

console.log('Overdue');
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log('\n');

console.log('Due Today');
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log('\n');

console.log('Due Later');
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log('\n\n');
