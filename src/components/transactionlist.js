import React, { useContext } from 'react';
import './transactionlist.css';
import { GlobalContext } from '../context/globalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    
    return (
        <div className= 'history'>
            <div className= 'history_heading'>
                <h4>History</h4>
            </div>
            <ul className= 'history_list'>
                {transactions.map((transaction)=>(
                        <li key= {transaction.id} className= 'minus'> 
                            {transaction.text}<span>{transaction.amount}</span>
                            <button className= 'delete-btn'>x</button>
                        </li>
                ))}
            </ul>
        </div>
    )
}
