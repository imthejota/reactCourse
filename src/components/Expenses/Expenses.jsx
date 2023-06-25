import './Expenses.css'
import ExpenseItem from '../Expenses/ExpenseItem'
import Card from '../UI/Card'

export default function Expenses (props) {
    

    return (
        <Card className='expenses'>
            <ExpenseItem
                name={props.items[0].name}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                name={props.items[1].name}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                name={props.items[2].name}  
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </Card>
    )
}