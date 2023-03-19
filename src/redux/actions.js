export const addTodo = (task) => {
  return {
    type: 'TODO_LIST/AddTask',
    payload: task,
  };
};

export const checkedTodo = (id) => {
  return {
    type: 'TODO_LIST/checkedTodo',
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'TODO_LIST/deleteTodo',
    payload: id,
  };
};
