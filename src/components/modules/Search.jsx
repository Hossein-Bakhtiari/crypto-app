import React, { useEffect, useState } from 'react'
import { searchCoins } from '../services/cryptoApi'
import { RotatingLines } from 'react-loader-spinner';

function Search({currency , setCurrency}) {
  const [text , setText] = useState("")
  const [coins , setCoins] = useState([]);
  const [isLaoding , setIsLoading] = useState(false);
 
  useEffect(() => {
    
    const controller = new AbortController()
    
    setCoins([]);

    if (!text) {
      setIsLoading(false);
      return
    }

    if(!text) return;

    const search = async () => {
      try {
        const res = await fetch(
          searchCoins(text) ,
          {signal: controller.signal}
        )
        const json = await res.json();
        console.log(json);
        if (json.coins) { 
          setIsLoading(false);
          setCoins(json.coins)
        } else {
          alert(json.status.error_message)
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message)
        }
      }

    };

    setIsLoading(true);
    search(); 

   return () => controller.abort()
  } , [text])


  return (
    <div>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        <div>
          {
            isLaoding && (
              <RotatingLines 
                  width="50px"
                  height="50px"
                  strokeWidth='2'
                  strokeColor='#3874ff'
              />
            )
          }
            <ul>
              {
                coins.map((coin) => (
                  <li key={coin.id}>
                    <img src={coin.thumb} alt={coin.name} />
                    <p>{coin.name}</p>
                  </li>
                ))
              }
            </ul>
        </div>
    </div>
  )
}

export default Search