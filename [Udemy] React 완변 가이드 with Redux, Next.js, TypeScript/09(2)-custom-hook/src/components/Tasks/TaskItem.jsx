import React from 'react';
import classes from './TaskItem.module.css';

function TaskItem(props) {
  return <li className={classes.task}>{props.children}</li>;
}

export default TaskItem;
