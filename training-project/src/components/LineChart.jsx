import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
const LineChart = ({data}) => {

return(
    <div>

    <Line
          data={data}
          options={{
            title:{
              display:true,
              text:'My Top Climbs',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            scales: {
                yAxes: [{ticks: {min: 0, max:10}}]
            }
        
                }}
        />
    </div>
        )}

export default LineChart;