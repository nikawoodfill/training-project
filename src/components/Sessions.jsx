import React from 'react';


const Sessions = ({workout,handleSessionView,setSelectWorkout}) => {
const date = new Date(workout.date).toDateString();
return(
<div className='card' onClick={() => {
    setSelectWorkout(workout) 
    handleSessionView()}}>
<img className="mountains" src ="https://upload.wikimedia.org/wikipedia/commons/1/12/Mountains-By-The-Icon-Z-3322972.svg"></img>
    <div className='cardcontents'>
    
        <p>
        {date.slice(0,3)}<br/>
        {date.slice(4,10)}<br/>
        {date.slice(10,15)}
        </p>
    </div>
    <button className='edit'>
        </button>
</div>
)
}

export default Sessions;