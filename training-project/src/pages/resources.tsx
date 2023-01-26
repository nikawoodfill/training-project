import React, {useState} from 'react';
// import '../app.css';
// import Videos from './Videos.jsx';
// import { videoListYT } from '../videoList';
import NavBar from '../components/NavBar.jsx';

const Resources= () => {
    // sconst [videoList,setVideoList] = useState(videoListYT)
    return (
        <div className='container'>
          <NavBar/>
            <div className ="title">
             <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Climbing Inspiration and Resources</h1>
            {/*</div>
            <div className='inner-container'>
            {videoList.map((video,key) => {
          return(
            <div key={key}>
              <Videos name={video.name} embed = {video.embed}/>
            </div>

          )})
            } */}
    </div> 
       </div>

    );
}

export default Resources;
