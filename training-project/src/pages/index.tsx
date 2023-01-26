//ts check
import * as React from "react";
import { useState, useEffect } from "react";
import NavBar from '../components/NavBar.jsx';
import prisma from '../../lib/prisma';
import {GetServerSideProps} from 'next'
import Sessions from '../components/Sessions.jsx';
import styled from 'styled-components'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useRouter } from 'next/router';
import AddWorkoutModal from '../components/AddWorkoutModal';
import SessionModal from '../components/SessionModal';

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
const Workouts = ({workouts}) => {
  const [modal, setModal] = useState(false);
  const [modalForm, setModalForm]:any = useState({});
  const [formError, setFormError] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [selectWorkout, setSelectWorkout] = useState({})
  const [climbs, setClimbs] = useState([]);
  const [comment,setComment] = useState("");
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }


  const handleAddWorkout = () => {
    setModal(!modal)  }

  const handleSessionView = () => {
    setSessionModal(!sessionModal)  }

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
      if (Object.values(modalForm).length >= 2) {
        try {
          const body = { 
            date: new Date(modalForm.workoutDate),
            goal: modalForm.sessionGoals,
            exercise : [],
            type: modalForm.choice,
            comments: ""
            }
          const res = await fetch('/api/newWorkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            })
            if (res.status < 300) {
              refreshData();
            }
        } catch (error) {
          console.error(error);
        }
          setModal(false)
      };
    }

  return (
    <div>
    <NavBar/>
    <div className="container">
    <div className = "inner-container">
    <h1 className = 'title'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Workouts</h1>
    <div className='cards'>
    <div className="add-card">
      <AddBoxRoundedIcon onClick={handleAddWorkout} sx={{fontSize:"1000%", color: "white" }}/>
    </div>
    {workouts.map((workout,key) => {
        return (
        <div key = {key}>
        <Sessions handleSessionView ={handleSessionView} setSelectWorkout = {setSelectWorkout} workout = {workout}/>
        </div>
        )
    })}
    </div>
    
    {modal &&
    <AddWorkoutModal handleAddWorkout ={handleAddWorkout} formError={formError} handleFormSubmit={handleFormSubmit} modalForm={modalForm} setModalForm={setModalForm}/>}
    {sessionModal && 
    <SessionModal comment={comment} setComment={setComment} climbs = {climbs} setClimbs = {setClimbs} selectWorkout = {selectWorkout} handleSessionView= {handleSessionView}/>}
    </div>
    </div>
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

