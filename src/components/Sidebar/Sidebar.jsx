import React from "react";
import './Sidebar.css';

function Sidebar({ taskCount, isNightMode }) {
  const maxTasks = 20; // Set the maximum number of tasks you want to display as a full circle
  const progress = (taskCount / maxTasks) * 100; // Calculate the progress percentage

  return (
    <div style={isNightMode ? styles.sidebarNightMode : styles.sidebarDayMode} className="sidebar1">
      {/* Profile Section */}
      <div style={styles.profile}>
        <img
          src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
          alt="Profile"
          style={styles.profilePic}
        />
        <h2 style={styles.profileName}>Hey, ABCD</h2>
      </div>

      {/* Menu Section */}
      <ul style={styles.menu}>
        <li style={styles.menuItem}>All Tasks</li>
        <li style={{ ...styles.menuItem, ...styles.active }}>Today</li>
        <li style={styles.menuItem}>Important</li>
        <li style={styles.menuItem}>Planned</li>
        <li style={styles.menuItem}>Assigned to me</li>
        <li style={styles.menuItem}>Add list</li>
      </ul>

      {/* Tasks Summary Section */}
      <div style={styles.tasksSummary}>
        <h3 style={styles.tasksSummaryHeader}>Today Tasks</h3>
        <div style={styles.circleContainer}>
          <div
            style={{
              ...styles.circle,
              background: `conic-gradient(#4caf50 ${progress}%, #fff ${progress}%)`, 
              borderColor: '#4caf50', 
            }}
          >
            <span style={styles.tasksSummaryCount}>{taskCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sidebarDayMode: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRight: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '90px',
    left: '0',
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: '10px',
  },
  sidebarNightMode: {
    width: '250px',
    backgroundColor: '#333',
    padding: '20px',
    borderRight: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '90px',
    left: '0',
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: '10px',
    color: 'white',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '5px solid #fff',
  },
  profileName: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#333',
    marginTop: '20px',
  },
  menu: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  menuItem: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  active: {
    backgroundColor: '#d5f0d3',
    borderRadius: '5px',
  },
  tasksSummary: {
    backgroundColor: '#d5f0d3',
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'center',
    marginTop: '10px',
  },
  tasksSummaryHeader: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    width: '80px',
    margin: '0 auto',
  },
  circle: {
    position: 'relative',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '5px solid transparent',
    borderTopColor: '#4caf50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    clipPath: 'circle(50% at 50% 50%)',
    boxSizing: 'border-box',
  },
  tasksSummaryCount: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4caf50',
  },
};

export default Sidebar;
