import './App.css';
import Content from './components/Contents/Contents';
import MainDash from './components/NavItems/Dashboard/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState(<MainDash />);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onItemClick={handleItemClick} />
        <Content selectedItem={selectedItem} />
        {windowWidth >= 768 && <RightSide />}
      </div>
    </div>
  );
}

export default App;
