import React, {useState, useContext} from 'react'
import './addTransaction.css';

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0); 
    return (
        <>
            <div className= 'transaction'>
                <div className= 'transaction_head'>
                    <h4>Add New Transaction</h4> 
                </div>
                <form>
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
