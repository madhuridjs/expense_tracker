import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalState';
import './income_expense.css';
export const Income_Expense = () => {
const { transactions }= useContext(GlobalContext)
const amounts= transactions.map(transaction => transaction.amount)

const income = 
   amounts.filter(item => item > 0)
   .reduce((acc, item) => (acc += item) ,0)
   .toFixed(2);
const expense = 
   (amounts.filter(item => item < 0)
   .reduce((acc, item) => (acc += item), 0) * -1)
   .toFixed(2);

    return (
        <>
          <div className= "incexp">
            <div className= 'ie_section'>
              <div className= 'income_sec'>
                <h3>Income</h3>
                <p className='inc_text'>INR {income}</p>
              </div>
              <div className= 'expense_sec'>
                <h3>Expense</h3>
                <p className='dec_text'>INR {expense}</p>
              </div>
            </div>
          </div>
        </>
    )
}
