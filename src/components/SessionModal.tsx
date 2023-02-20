import React, {useState,useEffect}  from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Climbs from '../components/Climbs'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useRouter } from 'next/router';


const Modal = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`
const ModalContent = styled.div`
  background-color: #fffafa;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 65%;
  border-radius: 10px; /* 5px rounded corners */
`

const SessionModal= ({handleSessionView,selectWorkout,climbs, setClimbs,comment,setComment}) => {
   interface keyable {
      [key: string]: any  
    }

    const [exercise, setExercise] = useState(selectWorkout.exercise);
    const [editComment, setEditComment] = useState<boolean>(false);
    const [commentChange, setCommentChange] = useState<boolean>(false);
    const [newComment, setNewComment] = useState(selectWorkout.comments);
    const router = useRouter();
    const refreshData = () => {
      router.replace(router.asPath);
    }
   
    useEffect(() => {
      setClimbs(selectWorkout.exercise) 
      setComment(selectWorkout.comments)
      setNewComment(selectWorkout.comments)
   },[])


    const handleCommentChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!commentChange) {
            setCommentChange(true) };
        setNewComment(event.currentTarget.value)
    }

    const handleModalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setExercise({
      ...exercise,
      [e.target.name] : e.target.value
  })}

  const handleCommentSubmit  = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setComment(newComment)
    if (commentChange) {
      try {
        const body = { 
          id : selectWorkout.id, 
          comments : newComment,
          }
        const res = await fetch('/api/comment', {
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
    }
    setEditComment(false);

    }

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { 
        id : selectWorkout.id, 
        exercise : {
        grade: exercise.grade,
        attempts : exercise.attempts,
        completed :exercise.completed === "True"
        }}
      const res = await fetch('/api/climb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        })
        if (res.status < 300) {
          refreshData();
    
          setClimbs([...climbs, {
              grade: exercise.grade,
              attempts : exercise.attempts,
              completed :exercise.completed === "True"
          }] )
        }
        } catch (error) {
      console.error(error);
    }
    }

  return(
    <Modal>
      <ModalContent>
      <IconButton sx={{position: 'relative', top: '38%', left: '95%'}} onClick={handleSessionView}>
      <CloseIcon/>
      </IconButton>
      <h1 className='card-title'>{new Date(selectWorkout.date).toLocaleString('en-US', {        
            month:'short',
            day: 'numeric',
            year: 'numeric'
            })}
                  </h1>
      {selectWorkout.type ==="Boulder" && <span className ="medGrey"> 🪨 Bouldering Day </span>}
      {selectWorkout.type !=="Boulder" && <span className ="medGrey"> 🧗‍♀️ {selectWorkout.type} Day </span>}
      
        <h2 className ="title">Session Goal : </h2>
        <span className ="medGrey">{selectWorkout.goal}</span>
        <h2 className ="title">Todays Climbs : </h2>
        {climbs.length === 0 && <span className ="medGrey">No Climbs Yet. Get Grooving! </span>}
        {climbs.map((climb,key) => {
            return (
                <div key = {key}>
                <Climbs climb = {climb}/>
                </div>
                )
        })}
        <br/>
        <form onChange={handleModalChange} onSubmit ={handleFormSubmit}>
        {selectWorkout.type === "Boulder" &&
          <select className = 'text-input-1' name="grade">
          <option value="none" selected disabled hidden>Select a Grade</option>
          <option value="v0">v0</option>
          <option value="v1">v1</option>
          <option value="v2">v2</option>
          <option value="v3">v3</option>
          <option value="v4">v4</option>
          <option value="v5">v5</option>
          <option value="v6">v6</option>
          <option value="v7">v7</option>
          <option value="v8">v8</option>
          <option value="v9">v9</option>
      </select>
        }

{selectWorkout.type !== "Boulder" &&
          <select className = 'text-input-1' name="grade">
          <option value="none" selected disabled hidden>Select a Grade</option>
          <option value="5.6">5.6</option>
          <option value="5.7">5.7</option>
          <option value="5.8">5.8</option>
          <option value="5.9">5.9</option>
          <option value="5.10">5.10</option>
          <option value="5.10a">5.10a</option>
          <option value="5.10b">5.10b</option>
          <option value="5.10c">5.10c</option>
          <option value="5.10d">5.10d</option>
          <option value="5.11a">5.11a</option>
          <option value="5.11b">5.11b</option>
          <option value="5.11c">5.11c</option>
          <option value="5.11d">5.11d</option>
          <option value="5.12a">5.12a</option>
          <option value="5.12b">5.12b</option>
          <option value="5.12c">5.12c</option>
          <option value="5.12d">5.12d</option>
          <option value="5.13a">5.13a</option>
      </select>
        }
    
          &nbsp;&nbsp;&nbsp;<select className = 'text-input-1' name="attempts">
          <option value="none" selected disabled hidden># of Attempts</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>

      </select>

      &nbsp;&nbsp;&nbsp;<select className = 'text-input-1' name="completed">
          <option value="none" selected disabled hidden>Send Status</option>
          <option value="True">Crushed it!</option>
          <option value="False">Ill get it next time!</option>
          </select>
          &nbsp;&nbsp;&nbsp;<input className = "submit-button" type='submit' value='Add Climb'/>
          </form>
        <h2 className ="title">Comments : </h2>
        {!editComment&&<span className ="medGrey">{newComment}</span>}
        {editComment&&
        <form onChange={handleCommentChange} onSubmit = {handleCommentSubmit}>
        <textarea className="text-input" value ={newComment}/>
        <br/>
        <br/>
        <input className = "submit-button" type='submit' value='Done'/>
        </form>}
        {!editComment&& 
        <IconButton onClick = {() => setEditComment(true)}>
          <BorderColorIcon/> 
          </IconButton>}
       </ModalContent>
    </Modal>
  )
}

export default SessionModal;