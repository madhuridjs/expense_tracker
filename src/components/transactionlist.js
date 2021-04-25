import React from 'react'
import './transactionlist.css'

export const TransactionList = () => {
    return (
        <div className= 'history'>
            <div className= 'history_heading'>
                <h4>History</h4>
            </div>
            <ul className= 'history_list'>
                <li className= 'history_item'> 
                    Cash <span>INR -400</span>
                    <button className= 'delete-btn'>x</button>
                </li>
            </ul>
        </div>
    )
}
