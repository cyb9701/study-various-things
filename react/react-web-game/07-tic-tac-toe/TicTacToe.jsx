import React, { useEffect, useReducer } from 'react';
import Table from './Table';

const initialState = {
  winner: null,
  turn: 'o',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CHANGE_TURN = 'SET_TURN';
export const CHANGE_TABLE_DATA = 'SET_TABLE_DATA';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };

    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'o' ? 'x' : 'o',
      };

    case CHANGE_TABLE_DATA:
      const updatedTableData = [...state.tableData];
      updatedTableData[action.rowIndex] = [
        ...updatedTableData[action.rowIndex],
      ];
      updatedTableData[action.rowIndex][action.cellIndex] = state.turn;

      return {
        ...state,
        tableData: updatedTableData,
        recentCell: [action.rowIndex, action.cellIndex],
      };

    case RESET_GAME: {
      return {
        ...state,
        turn: 'x',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }

    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { winner, turn, tableData, recentCell } = state;

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }

    let hasWinner = false;
    if (
      tableData[row][0] === turn &&
      tableData[row][1] === turn &&
      tableData[row][2] === turn
    ) {
      hasWinner = true;
    }
    if (
      tableData[0][cell] === turn &&
      tableData[1][cell] === turn &&
      tableData[2][cell] === turn
    ) {
      hasWinner = true;
    }
    if (
      tableData[0][0] === turn &&
      tableData[1][1] === turn &&
      tableData[2][2] === turn
    ) {
      hasWinner = true;
    }
    if (
      tableData[0][2] === turn &&
      tableData[1][1] === turn &&
      tableData[2][0] === turn
    ) {
      hasWinner = true;
    }

    if (hasWinner) {
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let isDraw = true;
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            isDraw = false;
          }
        });
      });

      if (isDraw) {
        dispatch({ type: SET_WINNER, winner: null });
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table dispatch={dispatch} tableData={tableData} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
