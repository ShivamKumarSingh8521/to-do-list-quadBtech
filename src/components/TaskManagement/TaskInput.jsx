import React, { useState } from 'react';

const TaskInput = ({ addTask, isNightMode }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div style={isNightMode ? { ...styles.addTask, backgroundColor: '#333', color: '#fff' } : styles.addTask}>
      <h2 style={isNightMode ? { ...styles.taskHeader, color: '#fff' } : styles.taskHeader}>Add New Task</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add A Task"
          style={isNightMode ? { ...styles.taskInput, backgroundColor: '#555', color: '#fff', borderColor: '#444' } : styles.taskInput}
        />
        <button onClick={handleAdd} style={isNightMode ? { ...styles.addButton, backgroundColor: '#4CAF50' } : styles.addButton}>Add Task</button>
      </div>
    </div>
  );
};

const styles = {
  addTask: {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
  },
  taskHeader: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  taskInput: {
    width: '75%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
  },
  addButton: {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default TaskInput;
