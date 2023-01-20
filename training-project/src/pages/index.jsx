import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import NavBar from '../components/NavBar';

import axios from 'axios';
//import Sessions from './Sessions.jsx';
import styled from 'styled-components'
// import photo from '../square-plus-solid-1.svg'
// import AddWorkoutModal from './AddWorkoutModal.jsx';
//import SessionModal from './SessionModal.jsx';

const Container = styled.div`
  position: fixed;
  top: 10%;
  width: 95%;
  height:100%;
  background-color: #d38e84;
  }
  `
  const InnerContainer = styled.div`
    position:relative;
    width: 95%;
    height: 90%;
    overflow-y: auto;
  } 
  `
  const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 100%;
    border-radius: 10px; /* 5px rounded corners */
    background-color: #B0D0D3;
    display: flex; /* or display:grid */
    justify-content: left;
    }
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }`

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]) 
  const [modal, setModal] = useState(false);
  const [modalForm, setModalForm] = useState({});
  const [formError, setFormError] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [selectWorkout, setSelectWorkout] = useState({})
  const [climbs, setClimbs] = useState([]);
  const [comment,setComment] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/workouts")
  //     .then((response) => {setWorkouts(response.data)})
  //     .catch((error) => {
  //       console.error(`Error in retrieving workouts: ${error}`);
  //     });
  // }, [climbs, comment]);

  const handleAddWorkout = () => {
    setModal(!modal)  }

  const handleSessionView = () => {
    setSessionModal(!sessionModal)  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (Object.values(modalForm).length >= 2) {
      axios.post(`/workouts`,
        {
          date: new Date(modalForm.workoutDate),
          goal: modalForm.sessionGoals,
          exercise : [],
          type: modalForm.choice,
          comments: ""
        })
        .then((res) => {
          setWorkouts([...workouts, {
            date: new Date(modalForm.workoutDate),
            goal: modalForm.sessionGoals,
            exercise : [],
            type: modalForm.choice,
            comments: ""
          }])
          setModal(false)
        })
      }
      else {
        setFormError(true)
     }
  } 

  return (
    <Container>
      <NavBar/>
    <h1 className = 'title'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Workouts</h1>
    <InnerContainer>
    <div className='cards'>
    {workouts.map((workout,key) => {
        return (
        <div key = {key}>
        <Sessions setSelectWorkout = {setSelectWorkout} handleSessionView={handleSessionView} workout = {workout}/>
        </div>
        )
    })}
    <Card onClick={handleAddWorkout}>
   

    <button className = 'plus'>
    {/* <img src={photo}/> */}
    </button>
    </Card>
    </div> 
    </InnerContainer>
    {modal &&
    <AddWorkoutModal handleAddWorkout ={handleAddWorkout} formError={formError} handleFormSubmit={handleFormSubmit} modalForm={modalForm} setModalForm={setModalForm}/>}
    {sessionModal &&
    <SessionModal comment={comment} setComment={setComment} climbs = {climbs} setClimbs = {setClimbs} selectWorkout = {selectWorkout} handleSessionView= {handleSessionView}/>}
    </Container>   
  )

}

export default Workouts;

