import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar/Sidebar';
import Rightbar from './components/Rightbar/Rightbar';
import Auth from './components/Auth';
import Header from './components/Header/Header';
import './styles/global.css';
import './styles/responsive.css';
import TaskInput from './components/TaskManagement/TaskInput';
import TaskList from './components/TaskManagement/TaskList';

const App = () => {
  // Mock tasks data for demonstration
  const mockTasks = {
    pending: ['Buy groceries', 'Complete React project'],
    completed: ['Read a book', 'Walk the dog'],
  };
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated || true);

  const [isNightMode, setIsNightMode] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);  // State for sidebar visibility
  const [tasks, setTasks] = useState(mockTasks);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  // Add a new task
  const addTask = (task) => {
    setTasks((prev) => ({ ...prev, pending: [...prev.pending, task] }));
  };

  // Mark a task as completed
  const markAsCompleted = (index) => {
    const completedTask = tasks.pending[index];
    setTasks((prev) => ({
      pending: prev.pending.filter((_, i) => i !== index),
      completed: [...prev.completed, completedTask],
    }));
  };

  // Delete a completed task
  const deleteTask = (index) => {
    setTasks((prev) => ({
      ...prev,
      completed: prev.completed.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className={`App ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      {!isAuthenticated ? (
        <Auth />
      ) : (
        <div className="main-layout">
          <Header
            toggleNightMode={toggleNightMode}
            toggleRightbar={() => setIsRightbarOpen(!isRightbarOpen)}
            toggleSidebar={toggleSidebar}  // Pass toggleSidebar to Header
          />
          {isSidebarVisible && (
            <Sidebar
              toggleNightMode={toggleNightMode}
              taskCount={tasks.pending.length}  // Passing the task count
              isNightMode={isNightMode}         // Passing the night mode state
            />
          )}
          <div className="content">
            {isRightbarOpen && <Rightbar toggleNightMode={toggleNightMode} />}
            <TaskInput addTask={addTask} isNightMode={isNightMode} />
            <TaskList tasks={tasks} markAsCompleted={markAsCompleted} deleteTask={deleteTask} isNightMode={isNightMode} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
