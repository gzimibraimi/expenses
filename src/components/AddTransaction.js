import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText]=useState('');
    const [amount, setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    const onSubmit = e=>{
      e.preventDefault();
    

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
        addTransaction(newTransaction);
    }

  
  return (
    <>
    <h3>Evidento transaksion të ri</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Emërtimi</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Shëno përshkrimin..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Shuma <br />
          (negative: shpenzim, pozitive: të hyra) </label>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Shëno shumën..." />
      </div>
      <button className="btn">Shto transaksionin</button>
    </form>
    </>
  )
}
