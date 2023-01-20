import React from 'react';
import Link from 'next/link';
// import './app.css';

function NavBar() {
    
      return (
        // <Link className = "navButton" to="/"> My Workouts &nbsp;&nbsp;&nbsp;</Link>
        // <Link className = "navButton" to="/progress">My Progress  &nbsp;&nbsp;&nbsp;</Link>
        // <Link className = "navButton" to="/resources"> Resources</Link>
        
       <div className ="banner">
        <div className = "buttonContainer">
          <button>
            <Link className = "navButton" href="/">My Workouts </Link>
            </button>
            </div>
            </div>
      )
    }
    
export default NavBar;