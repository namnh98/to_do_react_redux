import React from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const TodoList = (props) => {
  const { data, checkedItem, deleteItem } = props;
  return (
    <div className="containerList">
      {data.map((item, index) => {
        return (
          <TodoItem
            content={item}
            index={index}
            checkedItem={checkedItem}
            deleteItem={deleteItem}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
