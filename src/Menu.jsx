import React, { useState } from 'react';

function Menu() {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setMenuStatus(!menuStatus)}>
        {
            menuStatus ? 
            <span>&times;</span>
            : 
            <span>&#9776;</span>
        }
       
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
