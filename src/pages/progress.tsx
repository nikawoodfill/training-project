import React, {useState,useEffect} from 'react';
import LineChart from '../components/LineChart.jsx';

import {GetServerSideProps} from 'next'
import prisma from '../../lib/prisma';


function Progress({workouts}) {
  interface Exercise {
     attempts: number;
      completed: boolean;
      grade:string;
  }

  interface ClimbEntries {
    comments: string;
    date: Date;
    exercise : Exercise[];
    goal: string;
    id: string;
    type: string;
  }

  interface Climbs {
    date: Date;
    climbs: string[];
  } 


  const [boulderWorkouts,setBoulderWorkouts] = useState([]);
  const [label, setLabel] = useState([])
  const [myData, setMyData] = useState([])


  useEffect(() => {
    const boulder = workouts.filter((item : ClimbEntries) => 
      {return item.type === "Boulder" && item.exercise.length })
          .map(
          (boulderItem: ClimbEntries) => 
            {return {date : boulderItem.date, climbs : 
            (boulderItem.exercise.filter((climb) => {return climb.completed})
            .map((climb : Exercise) => {return parseInt(climb.grade[1])})
            .sort((a, b) => {return b - a})
            )}})
            setBoulderWorkouts(boulder)
          }, []);
        
          const data = {
            labels: boulderWorkouts.map((item) => {return new Date(item.date).toDateString();}),
            datasets: [
              {
                label: 'VLevel',
                data: boulderWorkouts.map((item) => {return (item.climbs[0])}),
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
              
              }
            ]
          }

          const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
              title: {
                display: true,
                text: 'My Top Climbs',
              }},
              scales: {
                y:
                  {
                    min: 0,
                    max: 9,
                    stepSize: 1,
                    display: true,
                  },
            },
        }

          return (
        <div className='container'>
        <h1 className = 'title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Progress</h1>
        <LineChart options = {options} data ={data}/>
        </div>    );
}

    export const getServerSideProps: GetServerSideProps = async ({ params }) => {
        const workouts = await prisma.workouts.findMany({
        orderBy : {
            date: 'asc',
        },
        }); 
        return {props: {
        workouts: JSON.parse(JSON.stringify(workouts))}}}

export default Progress;
