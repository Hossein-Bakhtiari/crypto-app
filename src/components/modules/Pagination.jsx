import React, { useState } from 'react'

function Pagination({page , setPage}) { 
    const priviousHandler = () => {
        if(page <= 1 ) return;
        setPage(((page) => page - 1))
    }

    const nextHandler = () => {
        if(page >= 10 ) return;
        setPage(((page) => page + 1))
    }

  return (
    <div>
        <button onClick={priviousHandler}>Privious</button>
        <p style={{color: page === 1 ? "red" : "inherit"}}>1</p>
        <p style={{color: page === 2 ? "red" : "inherit"}}>2</p>
        <p>...</p>
        {
            page > 2 && page < 9 && (
                <>
                    <p>{page}</p>
                    <span>...</span>
                </>
            )
        }
        <p style={{color: page === 9 ? "red" : "inherit"}}>9</p>
        <p style={{color: page === 10 ? "red" : "inherit"}}>10</p>
        <button onClick={nextHandler}>Next</button>
    </div>
  )
}

export default Pagination