import React, {useState, useContext} from 'react'
import './addTransaction.css';
import { GlobalContext } from '../context/globalState';
import { Transaction } from './transaction';

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0); 
const { addTransaction }= useContext(GlobalContext);

const handleSubmit= (event) => {
    event.preventDefault();
    const newTransaction={
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
    }
    addTransaction(newTransaction);
}

    return (
        <>
            <div className= 'transaction'>
                <div className= 'transaction_head'>
                    <h4>Add New Transaction</h4> 
                </div>
                <form onSubmit= {handleSubmit}>
                    <div className= 'input'>
                        <label>Text</label>
                        <input 
                            type= 'text'  
                            value= {text}
                            onChange= {event => setText(event.target.value)}
                            placeholder= 'Enter text...'></input>
                    </div>
                    <div className= 'input'>
                        <label>Amount</label>
                        <input 
                            type= 'number'
                            value= {amount}
                            onChange= {event => setAmount(event.target.value)}
                            placeholder= 'Enter amount...'></input>
                    </div>
                    <button className= 'add-btn'>Add Transaction</button>
                </form> 
            </div>
        </>
    )
}
