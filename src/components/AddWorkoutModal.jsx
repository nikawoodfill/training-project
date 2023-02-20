import React, {useState}  from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



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

const AddWorkoutModal = ({modalForm, setModalForm,formError, handleFormSubmit, handleAddWorkout}) => {
  const handleModalChange = (e) => {
    console.log(e.target.value)
    setModalForm({
      ...modalForm,
      [e.target.name] : e.target.value
    })
  }

  return(
    <Modal>
   
      <ModalContent>
      <IconButton sx={{position: 'relative', top: '38%', left: '95%'}} onClick={handleAddWorkout}>
      <CloseIcon/>
      </IconButton>
      <h2 className='card-title'>My New Session</h2>
       <p className='smallGrey'> Required fields are marked with *</p>

       {formError &&
        <p className = 'red'>You must enter the following:</p>}
       <form onChange={handleModalChange} onSubmit ={handleFormSubmit}>
        <label className='title'>
          <h2>Date*</h2>
          <p></p>
          <span className ='divider'></span>
        <input className="text-input" type="date" name="workoutDate"/>
        </label>
        
        <label className='title'>
          <h2> Session Goals </h2>
          <p>
          <p></p>
          <span className ='divider'></span>
          <textarea className="text-input" maxLength='1000' rows='4' cols='50' name='sessionGoals' placeholder='Example: "Work on my technique and enjoy myself!'/></p>
        </label>
        <label className='title'>
          <h2>Type*</h2>
          <p></p>
          <span className ='divider'></span>
          <select className = 'text-input' name="choice">
            <option value="none" selected disabled hidden>Select an Option</option>
            <option value="Top Rope">Top Rope</option>
            <option value="Boulder">Boulder</option>
            <option value="Lead">Lead</option>
        </select>
        </label>
        <p></p>
        <input className = "submit-button" type='submit' value='Submit'/>
        <p></p>
        
       </form>
       </ModalContent>
    </Modal>
  )
}

export default AddWorkoutModal;