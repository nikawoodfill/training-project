import React, {useState} from 'react';
import Link from 'next/link';
import bg from '../../public/trainingproject.png'

function NavBar() {

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
    return (       
       <div className ="banner" style = {{backgroundImage: `url(${bg.src})`}}>
        <div className = "buttonContainer">
          <div className= 'navButton'  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <Link style={{ textDecoration: 'none', color: hover ?  '#d38e84': '#678b9d' }} href="/">My Workouts </Link>
            </div>
            <div className = "buttonContainer">
          <div className= 'navButton'  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <Link style={{ textDecoration: 'none', color: hover ?  '#d38e84': '#678b9d' }} href="/">My Workouts </Link>
            </div>
            </div>
            </div>
            </div>
      )
    }
    
export default NavBar;