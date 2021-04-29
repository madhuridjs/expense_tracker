import React, { useContext } from 'react';
import './transactionlist.css';
import { GlobalContext } from '../context/globalState';
import { Transaction } from './transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    
    return (
        <div className= 'history'>
            <div className= 'history_heading'>
                <h4>History</h4>
            </div>
            <ul className= 'history_list'>
                {transactions.map(transaction => (
                    <Transaction key= {transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}
