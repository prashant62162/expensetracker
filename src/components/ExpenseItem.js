import React from 'react';
// useState is a react hook, all hooks in react start with use keyword and always called inside the function.
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);
    // useState always returns an array with two elements where first one is the current state value and the second one is function to update its value.
    // important-the useState function calls the entire function again.Therefore evaluate the jsx code inside it again.

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;