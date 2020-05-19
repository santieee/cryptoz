import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { addCurrency } from '../../store/currencies/actions'

export function CoinAdd(props: any) {
  const dispatch = useDispatch();
  const addCoin = () => {
    if(!newCoinTicker.trim()) return;
    dispatch(addCurrency(newCoinTicker));
    setNewCoinTicker('');
  };
  const [newCoinTicker, setNewCoinTicker] = useState('');
  const changeInputHandler = (event: any) => setNewCoinTicker(event.target.value);
  return (
    <div className="currency">
      <TextField 
        label="Outlined" 
        variant="outlined" 
        value={newCoinTicker}
        onChange={changeInputHandler}
      />
      <Button variant="contained" color="primary" onClick={addCoin}>
        Add
      </Button>
    </div>
  );
};