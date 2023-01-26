
import React, {useState} from 'react';
import '../app.css';
import Videos from './Resources.jsx';
import { videoListYT } from '../videoList';


const Resources= () => {
    const [videoList,setVideoList] = useState(videoListYT)
    return (
        <div className='container'>
            <div className ="title">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Climbing Inspiration and Resources</h1>
            </div>
            <div className='inner-container'>
            {videoList.map((video,key) => {
          return(
            <div key={key}>
              <Videos name={video.name} embed = {video.embed}/>
            </div>

          )})
            }
    </div>
       </div>

    );
}

export default Resources;