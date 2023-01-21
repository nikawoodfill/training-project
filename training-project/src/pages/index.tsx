//ts check
import * as React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import NavBar from '../components/NavBar.jsx';
import prisma from '../../lib/prisma';
import { GetStaticPaths, GetServerSideProps, GetStaticProps } from 'next'
import Box from '@mui/material/Box';
import Sessions from '../components/Sessions.jsx';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import photo from '../square-plus-solid-1.svg'
// import AddWorkoutModal from './AddWorkoutModal.jsx';
//import SessionModal from './SessionModal.jsx';

const Container = styled.div`
  position: fixed;
  top: 10%;
  width: 95%;
  height:100%;
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

const Workouts = ({workouts}) => {
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

  // const handleAddWorkout = () => {
  //   setModal(!modal)  }

  // const handleSessionView = () => {
  //   setSessionModal(!sessionModal)  }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   if (Object.values(modalForm).length >= 2) {
  //     axios.post(`/workouts`,
  //       {
  //         date: new Date(modalForm.workoutDate),
  //         goal: modalForm.sessionGoals,
  //         exercise : [],
  //         type: modalForm.choice,
  //         comments: ""
  //       })
  //       .then((res) => {
  //         setWorkouts([...workouts, {
  //           date: new Date(modalForm.workoutDate),
  //           goal: modalForm.sessionGoals,
  //           exercise : [],
  //           type: modalForm.choice,
  //           comments: ""
  //         }])
  //         setModal(false)
  //       })
  //     }
  //     else {
  //       setFormError(true)
  //    }
  // } 

  return (
    <div>
    <NavBar/>
    <Container>
    <InnerContainer>
    <h1 className = 'title'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Workouts</h1>
    <div className='cards'>
    <Card>
    <IconButton sx={{ml:"15%"}}>
      < AddBoxRoundedIcon sx={{ fontSize: 250, color: "white" }}/>
    </IconButton>
    </Card>
    {workouts.map((workout,key) => {
        return (
        <div key = {key}>
        <Sessions setSelectWorkout = {setSelectWorkout} workout = {workout}/>
        </div>
        )
    })}
    
    </div> 
    </InnerContainer>
    {/* {modal &&
    <AddWorkoutModal handleAddWorkout ={handleAddWorkout} formError={formError} handleFormSubmit={handleFormSubmit} modalForm={modalForm} setModalForm={setModalForm}/>}
    {sessionModal &&
    <SessionModal comment={comment} setComment={setComment} climbs = {climbs} setCliåmbs = {setClimbs} selectWorkout = {selectWorkout} handleSessionView= {handleSessionView}/>}
    </Container>   */}
    </Container>
    </div>
  )

}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const workouts = await prisma.workouts.findMany({
    orderBy : {
      date: 'desc',
    },
  }); 
  return {props: {
    workouts: JSON.parse(JSON.stringify(workouts))}}}
export default Workouts;

