import React from 'react'
import './addTransaction.css'

export const AddTransaction = () => {
    return (
        <>
            <div className= 'transaction'>
                <div className= 'transaction_head'>
                    <h4>Add New Transaction</h4> 
                </div>
                <form>
                    <div className= 'input'>
                        <label>Text</label>
                        <input type= 'text' placeholder= 'Enter text...'></input>
                    </div>
                    <div className= 'input'>
                        <label>Amount</label>
                        <input type= 'number' placeholder= 'Enter amount...'></input>
                    </div>
                    <button className= 'add-btn'>Add Transaction</button>
                </form> 
            </div>
        </>
    )
}
