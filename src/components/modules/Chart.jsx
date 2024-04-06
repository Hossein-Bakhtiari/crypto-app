import React, { useState } from 'react'
import styles from "./chart.module.css"
import { ConvertData } from '../helpers/ContvertData';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis} from "recharts";

function Chart({chart , setChart}) {

    const [type, setType] = useState("prices")
    console.log(ConvertData( chart , type));
  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>
            <div className={styles.graph}>
                <ChartComponent data={ConvertData( chart , type)} type={type}/>
            </div>
        </div>
    </div>
  )
}

export default Chart


const ChartComponent = ({data , type}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart 
      width={400} 
      height={400}
      data={data}>
          <Line 
            type="monotone" 
            dataKey={type} 
            stroke="#3874ff" 
            strokeWidth="2px"/>
  
          <CartesianGrid stroke='#404042' />
          <YAxis dataKey={type} domain={["auto" , "auto"]}/>
          <YAxis dataKey="date" hide />
          <Legend  />
          <Tooltip />
    </LineChart>
  </ResponsiveContainer>
  )
}