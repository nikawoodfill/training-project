import React, {useState}  from 'react';

const Climbs = ({climb}) => {

    return (
    <div>
    <span className ="medGrey">{climb.grade}</span> 
    {climb.attempts == 1 && <span className ="medGrey">(⚡️)</span>}
    {climb.attempts != 1 && <span className ="medGrey">({climb.attempts}&nbsp;attempts)</span>}
    {climb.completed && <span className ="medGrey">&nbsp;✅</span>} 
    </div>
    )
}

export default Climbs;