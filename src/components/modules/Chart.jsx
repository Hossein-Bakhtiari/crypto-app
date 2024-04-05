import React, { useState } from 'react'
import styles from "./chart.module.css"
import { ConvertData } from '../helpers/ContvertData';

function Chart({chart , setChart}) {

    const [type, setType] = useState("prices")
    console.log(ConvertData( chart , type));
  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>

        </div>
    </div>
  )
}

export default Chart