import React, { useState ,useEffect } from 'react'

import TableCoins from '../modules/TableCoins';
import { getCoinList } from '../services/cryptoApi';
import Pagination from '../modules/Pagination';

function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page , setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            const res = await fetch(getCoinList(page));
            const json = await res.json();
            setCoins(json);
            setIsLoading(false);
        }

        getData();
    } , [page])
  
    return (
        <div>
            <Pagination page={page} setPage={setPage}/>
            <TableCoins coins={coins} isLoading={isLoading}/>
        </div>
  
    )
}

export default HomePage