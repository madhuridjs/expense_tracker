import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Income_Expense } from './components/income_expense';
import { TransactionList } from './components/transactionlist';
import { AddTransaction } from './components/addTransaction';
import { GlobalProvider } from './context/globalState';


function App() {
  return (
    <GlobalProvider>
       <Header />
      <div className="container">
        <Balance />
        <Income_Expense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

   
  );
}

export default App;
