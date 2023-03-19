import Button from '@atlaskit/button';
import React from 'react';
import { EMPTY_STRING } from '../../constants/common';
import './index.css';

const TodoItem = (props) => {
  const { content, checkedItem, deleteItem, index } = props;

  return (
    <>
      {content.isChecked ? (
        <div className="itemChecked" key={index}>
          <h3>{content.name ? content.name : EMPTY_STRING}</h3>
          <div className="buttonWrapper">
            <Button
              appearance="primary"
              onClick={() => checkedItem(content.id)}
            >
              Checked
            </Button>
            <Button appearance="danger" onClick={() => deleteItem(index)}>
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <div className="item" key={index}>
          <h3>{content.name ? content.name : EMPTY_STRING}</h3>
          <div className="buttonWrapper">
            <Button
              appearance="primary"
              onClick={() => checkedItem(content.id)}
            >
              Checked
            </Button>
            <Button appearance="danger" onClick={() => deleteItem(index)}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
