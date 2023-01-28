//Imports
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { withdraw, deposit, addinterest, charges } from './store/balance';
import './App.css';

function App() {

  // Set the balance from the state balance value
  let balance = useSelector((state) => state.balance.value);

  // Set the balance to have 2 decimal places
  balance = balance.toFixed(2);

  // Declare the dispatch variable from useDispatch
  const dispatch = useDispatch();

  // Set state for the user input
  const [userInput, setUserInput] = useState(0);

  // Make a withdrawal
  const makeWithdrawal = (e) => {
    // Prevent default action
    e.preventDefault();

    // Dispatch to the withdraw action
    dispatch(withdraw(Number(userInput)));
    // Reset the state userInput to zero
    setUserInput(0);
  }

  // Make a deposit
  const makeDeposit = (e) => {
    // Prevent default action
    e.preventDefault();

    // Dispatch to the deposit action
    dispatch(deposit(Number(userInput)));
    // Reset the state userInput to zero
    setUserInput(0);
  }


  return (
    <div className="App">
      <h1>Current Balance: £{balance}</h1>
      <form className='form'>
        <div className='formGroup'>
          <label><span>Amount: £ </span>
            <input type='number' autoFocus onChange={(e) => setUserInput(e.target.value)} value={userInput}></input>
          </label>
        </div>
        <div className='buttons'>
          <button type='button' onClick={makeDeposit}>Make Deposit</button>
          <button type='button' onClick={makeWithdrawal}>Make Withdrawal</button>
          <button type='button' onClick={() => dispatch(addinterest())}>Add Interest</button>
          <button type='button' onClick={() => dispatch(charges())}>Deduct Charges</button>
        </div>
      </form>
      
    </div>
  );
}

export default App;
