import React from 'react'
import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"
import { RotatingLines } from 'react-loader-spinner';
import styles from "./TableCoins.module.css"

function TableCoins({coins , isLoading  , currency}) {
    console.log(coins);
  return (
    <div className={styles.container}>
        {
          isLoading ? (
              <RotatingLines strokeColor='#3874ff' strokeWidth='2' /> 
          ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                coins.map((coin) =>( 
                   <TableRow coin={coin} key={coin.id} currency={currency}/>
                  )
                )
              }
            </tbody>
          </table>
          )
        }
    </div>
  )
}

export default TableCoins


const TableRow = ({
  coin :{
    name , 
    image , 
    symbol , 
    current_price , 
    total_volume , 
    price_change_percentage_24h: price_cheange
  } , currency}) => {
    return(
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
       </td>
       <td>{name}</td>
       <td >
      {
      currency === "usd" ? "$" : 
      currency ==="eur" ? "€" : 
      currency === "jpy" ? "¥" : 
      null
      }

      {current_price.toLocaleString()}
        </td>
       <td className={price_cheange > 0 ? styles.success : styles.error}>{price_cheange.toFixed(2)}%</td>
       <td>{total_volume.toLocaleString()}</td>
       <td><img src={price_cheange > 0 ? chartUp : chartDown} /></td>
    </tr>
    )
}