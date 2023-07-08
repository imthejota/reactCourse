import './App.css'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/New Expense/NewExpense';

function App() {
	const expenses = [{
		name: 'Car insurance',
		amount: 294.67,
		date: new Date(2020, 7, 14)
	},{
		name: 'CatDog',
		amount: 294.67,
		date: new Date(2020, 7, 15)
	},{
		name: 'Food',
		amount: 100.67,
		date: new Date(2020, 7, 16)
	}]	
	return (
        <div className="App">
            <h1>Expense Tracker</h1>
			<NewExpense />
			<Expenses items={expenses}/>
			
        </div>
    );
}

export default App;
