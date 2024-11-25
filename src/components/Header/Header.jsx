import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Header.css';

const Header = ({ toggleNightMode, toggleRightbar, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-icon-button" onClick={toggleSidebar}>
          <MenuIcon />
        </button>

        <div className="logo-container">
          <p className="logo-text">DoIt</p>
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-button">
          <SearchIcon />
        </button>
        <button className="header-icon-button" onClick={toggleRightbar}>
          <GridViewIcon />
        </button>
        <button className="header-icon-button" onClick={toggleNightMode}>
          <DarkModeIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
