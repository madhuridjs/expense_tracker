import './App.css';
import { Header } from './components/header';
import {Balance} from './components/balance';
import {Income_Expense} from './components/income_expense';
import { TransactionList } from './components/transactionlist';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <Income_Expense />
      <TransactionList />
    </div>
  );
}

export default App;
