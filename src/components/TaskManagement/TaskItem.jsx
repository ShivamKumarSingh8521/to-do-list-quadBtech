import React from 'react';

const TaskItem = ({ task, isCompleted, onAction, isNightMode }) => {
  return (
    <li style={isNightMode ? { ...styles.taskItem, backgroundColor: '#444', color: '#fff' } : styles.taskItem}>
      <span style={isCompleted ? { textDecoration: 'line-through', color: '#aaa' } : {}}>
        {task}
      </span>
      {isCompleted ? (
        <button onClick={onAction} style={isNightMode ? { ...styles.deleteButton, backgroundColor: '#e57373' } : styles.deleteButton}>Delete</button>
      ) : (
        <input type="checkbox" onChange={onAction} style={styles.checkbox} />
      )}
    </li>
  );
};

const styles = {
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    fontSize: '16px',
    borderBottom: '1px solid #eee',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    backgroundColor: '#e57373',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '10px',
  },
};

export default TaskItem;
