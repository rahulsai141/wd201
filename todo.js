const comparedate = date => {
  return new Date(date) - new Date(formattedDate(new Date()));
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
  };

  const overdue = () => {
    return all.filter(todo => {
      return comparedate(todo.dueDate) < 0 && !todo.completed;
    });
  };

  const dueToday = () => {
    return all.filter(todo => {
      return comparedate(todo.dueDate) === 0;
    });
  };

  const dueLater = () => {
    return all.filter(todo => {
      return comparedate(todo.dueDate) > 0;
    });
  };

  // const toDisplayableList = list => {
  //   list
  //     .map(todo => {
  //       const box = todo.completed ? '[x]' : '[]';
  //       const displayDate =
  //         comparedate(todo.dueToday) === 0 ? '' : todo.dueToday;
  //       return `${box} ${todo.title} ${displayDate}`;
  //     })
  //     .join('\n');
  // };

  const toDisplayableList = list => {
    return list
      .map(todo => {
        const box = todo.completed ? '[x]' : '[]';
        const displayDate = comparedate(todo.dueDate) === 0 ? '' : todo.dueDate;
        return `${box} ${todo.title} ${displayDate}`;
      })
      .join('\n');
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

const formattedDate = d => {
  return d.toISOString().split('T')[0];
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
