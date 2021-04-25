import React from 'react'
import './income_expense.css'

export const Income_Expense = () => {
    return (
        <>
          <div className= "incexp">
            <div className= 'ie_section'>
              <div className= 'income_sec'>
                <h3>Income</h3>
                <p className='inc_text'>INR +0.00</p>
              </div>
              <div className= 'expense_sec'>
                <h3>Expense</h3>
                <p className='dec_text'>INR -0.00</p>
              </div>
            </div>
          </div>
          
        </>
    )
}
