import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markAsCompleted, deleteTask, isNightMode }) => {
  return (
    <div style={isNightMode ? { ...styles.taskList, backgroundColor: '#333', color: '#fff' } : styles.taskList}>
      <h3 style={isNightMode ? { ...styles.sectionHeader, color: '#fff' } : styles.sectionHeader}>Pending Tasks</h3>
      <ul style={styles.taskListContainer}>
        {tasks.pending.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            isCompleted={false}
            onAction={() => markAsCompleted(index)}
            isNightMode={isNightMode}
          />
        ))}
      </ul>
      <h3 style={isNightMode ? { ...styles.sectionHeader, color: '#fff' } : styles.sectionHeader}>Completed Tasks</h3>
      <ul style={styles.taskListContainer}>
        {tasks.completed.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            isCompleted={true}
            onAction={() => deleteTask(index)}
            isNightMode={isNightMode}
          />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  taskList: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '700px',
    margin: '20px auto',
    marginTop: '40px', // Space between the TaskInput and TaskList
  },
  sectionHeader: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '10px',
  },
  taskListContainer: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
};

export default TaskList;
