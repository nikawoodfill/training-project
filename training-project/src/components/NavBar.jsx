import React, {useState} from 'react';
import Link from 'next/link';
import bg from '../../public/trainingproject.png'
import { navLinks } from "../../public/data.js";
import { useRouter } from "next/router";


function NavBar() {
  const router = useRouter();
  
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
 



 
     
        return (
          <nav >
          <div className ="banner" style = {{backgroundImage: `url(${bg.src})`}}>
        <div className='buttonContainer'>
          <div className= 'navButton' >
            <Link style={{ textDecoration: 'none', color: hover ?  '#d38e84': '#678b9d' }} onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>{ setHover(false)}} href='/'>Workouts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link style={{ textDecoration: 'none', color: hover1 ?  '#d38e84': '#678b9d'}} onMouseEnter={()=>setHover1(true)}
        onMouseLeave={()=>{ setHover1(false)}}href='/progress'> My Progress&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link style={{ textDecoration: 'none', color: hover2 ?  '#d38e84': '#678b9d'}} onMouseEnter={()=>setHover2(true)}
        onMouseLeave={()=>{ setHover2(false)}} href='/resources'>Resources&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            </div>
            </div> 
          </div>
      </nav>
        )
      };
export default NavBar;