import React, { useState ,useEffect } from 'react'

import TableCoins from '../modules/TableCoins';
import { getCoinList } from '../services/cryptoApi';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Chart from '../modules/Chart';

function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page , setPage] = useState(1)
    const [currency , setCurrency] = useState("usd")
    const [chart , setChart] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            const res = await fetch(getCoinList(page ,currency));
            const json = await res.json();
            setCoins(json);
            setIsLoading(false);
        }

        getData();
    } , [page , currency])
  
    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency}/>
            <TableCoins coins={coins} isLoading={isLoading} currency={currency} setChart={setChart}/>
            <Pagination page={page} setPage={setPage}/>
            {!!chart && <Chart chart={chart} setChart={setChart}/>}
        </div>
  
    )
}

export default HomePage