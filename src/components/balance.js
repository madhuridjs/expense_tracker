import React, { useContext } from 'react'
import './balance.css'
import { GlobalContext } from '../context/globalState';


export const Balance = () => {
    const { transactions }= useContext(GlobalContext);
    const amounts= transactions.map(transaction => transaction.amount)
    const total= amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <div className= 'balance_section'>
                <div className= 'balance'>
                    <h4 className= 'bal'>Your Balance:</h4>  
                    <h2 className= 'bal_amt'>INR {total}</h2>
                </div>
            </div>
        </>
    )
}
