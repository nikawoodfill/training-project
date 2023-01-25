import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'



const NavButton = styled.div` 
    font-family: 'Signika Negative', sans-serif;
    text-decoration: none;
    color: #678b9d;   
}
 & :hover {
    color: #d38e84;
  }
  `

function NavBar() {
    return (       
       <div className ="banner">
        <div className = "buttonContainer">
          <NavButton>
            <Link href="/">My Workouts </Link>
            </NavButton>
            </div>
            </div>
      )
    }
    
export default NavBar;