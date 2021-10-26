import React from 'react';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesChart from './ExpensesChart';


function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    // const [filteredItems, setFilteredItems] = useState(props.items)
    const expenseFilterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    }
    let emptyOutput = (<p style={{ color: 'white', textAlign: 'center' }}>No components found</p>);
    const filteredItems = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSaveDate={expenseFilterYearHandler} />
                <ExpensesChart expenses={filteredItems} />
                {filteredItems.length === 0 ? emptyOutput :
                    (filteredItems.map((expense) => <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />))
                }
            </Card>
        </div>)
}
export default Expense;