import React, { useState ,useEffect } from 'react'

import TableCoins from '../modules/TableCoins';
import { getCoinList } from '../services/cryptoApi';
import Pagination from '../modules/Pagination';

function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(getCoinList());
            const json = await res.json();
            setCoins(json);
            setIsLoading(false);
        }

        getData();
    } , [])
  
    return (
        <div>
            <Pagination />
            <TableCoins coins={coins} isLoading={isLoading}/>
        </div>
  
    )
}

export default HomePage