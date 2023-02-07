import React, {useState,useEffect} from 'react';
import Chart from 'chart.js/auto'; 
import { Line } from "react-chartjs-2";
const LineChart = ({data, options}) => {
return(
    <div>

    <Line
          data={data}
          options={options}        
        />
    </div>
        )}

export default LineChart;