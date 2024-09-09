import React, { useCallback, useReducer } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'o',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const SET_WINNER = 'SET_WINNER';
const SET_TURN = 'SET_TURN';
const SET_TABLE_DATA = 'SET_TABLE_DATA';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTableClicked = useCallback(() => {
    dispatch({
      type: SET_WINNER,
      winner: 'o',
    });
  }, []);

  return (
    <>
      <Table onClicked={handleTableClicked} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
