import * as Typescipt from 'typescript';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type SquareType = string | null;
interface SquareProps {
  value: SquareType;
  onClick: () => void;
}
function Square(props: SquareProps) {
  return(
    <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
  );
}
interface BoardStates {
  squares: SquareType[],
  xIsNext: boolean
}
class Board extends React.Component<any, BoardStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      squares: Array<SquareType>(9).fill(null),
      xIsNext: true
    };
  }
  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }
  handleClick(i: number) {
    console.log('click on' + i);
    const squares = this.state.squares.slice();
    const mark = this.state.xIsNext ? 'X' : 'O';
    squares[i] = mark;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  calculateWinner(squares : SquareType[]): string  | null {
    squares.shift
    return 'OK';
  }
  render() {
    let winner = this.calculateWinner(this.state.squares);
    let status : string;
    if(winner) {
      status = 'winner is' + winner;
    } else {
      status = 'next palyer is ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export const Content = () => <Game />
