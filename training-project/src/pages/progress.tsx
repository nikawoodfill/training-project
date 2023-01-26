import React, {useState,useEffect} from 'react';
import LineChart from '../components/LineChart.jsx';
import {GetServerSideProps} from 'next'

function Progress({workouts}) {
  const [boulderWorkouts,setBoulderWorkouts] = useState([]);
  const [data,setData] = useState({});

  useEffect(() => {

        const boulder = workouts.filter((item) => 
          {return item.type === "Boulder" && item.exercise.length })
          .map((item) => {return {date : item.date, climbs : 
          (
          item.exercise.filter((climb) => {return climb.completed})
          .map((climb) => {return parseInt(climb.grade[1])}))
          .sort((a, b) => {return b - a})
        }
          
          })
          console.log(boulder)
          setBoulderWorkouts(boulder)
          setData({
            labels: boulder.map((item) => {return new Date(item.date).toDateString();}),
            datasets: [
              {
                label: 'VLevel',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: boulder.map((item) => {return (item.climbs[0])})
              }
            ]
          })
          
      }, []);

  
          return (
        <div className='container'>
        <h1 className = 'title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Progress</h1>
        <LineChart data ={data}/>
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