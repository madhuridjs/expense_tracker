import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';


export const Transaction = ( { transaction } ) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign= transaction.amount > 0 ? '+' : '-';
    
    return (
        <li key= {transaction.id} className= {transaction.amount > 0 ? 'plus' : 'minus'}> 
            {transaction.text}<span>{sign} INR {Math.abs(transaction.amount)}</span>
            <button className= 'delete-btn' onClick= {() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
