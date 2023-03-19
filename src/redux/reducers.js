const initialState = {
  listTask: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TODO_LIST/AddTask':
      return {
        ...state,
        listTask: [...state.listTask, payload.task],
      };

    case 'TODO_LIST/checkedTodo':
      let itemFind = state.listTask.find((item) => item.id === payload.id);
      let currentArray = [...state.listTask];
      currentArray.splice(state.listTask.indexOf(itemFind), 1, {
        ...itemFind,
        isChecked: true,
      });

      return {
        ...state,
        listTask: currentArray,
      };

    case 'TODO_LIST/deleteTodo':
      let currentArrays = [...state.listTask];
      currentArrays.splice(payload.id, 1);
      return {
        ...state,
        listTask: currentArrays,
      };

    default:
      return state;
  }
};

export default rootReducer;
