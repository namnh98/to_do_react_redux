import Button from '@atlaskit/button';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todoList } from '../../redux/selector';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, checkedTodo, deleteTodo } from '../../redux/actions';
import TodoList from '../ToDoList';
import Textfield from '@atlaskit/textfield';
import './index.css';

const TextfieldStyled = styled(Textfield)`
  margin-right: 8px;
  background-color: white;
  color: black;
`;

const MainTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const listTasks = useSelector(todoList);

  const addNewTask = (text) => {
    setTask(text.currentTarget.value);
  };

  const handleAdd = () => {
    if (task) {
      let items = { id: uuidv4(), name: task };
      dispatch(addTodo({ task: items }));
      setTask('');
    }
  };

  const checkedItem = (id) => {
    dispatch(checkedTodo({ id }));
  };

  const deleteItem = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="container">
      <div className="main">
        <h3>TO DO LIST</h3>
        <div className="inputWrapper">
          <TextfieldStyled value={task} onChange={addNewTask} />
          <Button onClick={handleAdd}>Thêm</Button>
        </div>
        <TodoList
          data={listTasks}
          checkedItem={checkedItem}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default MainTodo;
