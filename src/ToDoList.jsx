import React from "react";
import "./index.css";
// import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const ToDoList = (props) => {
  return (
    <>
      <li>
          <div className='icon'>
          <DeleteIcon className='icon_del' onClick={() => {
            props.del(props.id);
          }}/>
          </div>
        {props.text}
      </li>
    </>
  );
};
export default ToDoList;
