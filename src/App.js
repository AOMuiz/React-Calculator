import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton  from './components/ClearButton';
import *  as math from 'mathjs';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      input: ""
    }
  }
  
  addToInput = val => {
    this.setState(
      {
        input: this.state.input + val,
        placeholder:""
      }
    );
  }

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  handleClr = () => {
    this.setState(
      {
        placeholder: 0
      }
    )
  }

  handleClrLast = () => {
    let removelast = Math.floor(this.state.input / 10);
    this.setState(
      {
        input: removelast
      }
    )
  }
  


  render() {
    return (
      <div className="App">
        <div className = "calc-wrapper">
          <Input id = "display" placeholder = {this.state.placeholder} input = {this.state.input}></Input>
          <div className = "row">
            <Button id = "seven" handleClick = {this.addToInput}>7</Button>
            <Button id = "eight" handleClick = {this.addToInput}>8</Button>
            <Button id = "nine" handleClick = {this.addToInput}>9</Button>
            <Button id = "divide" handleClick = {this.addToInput}>/</Button>
          </div>
          <div className = "row">
            <Button id = "four" handleClick = {this.addToInput}>4</Button>
            <Button id = "five" handleClick = {this.addToInput}>5</Button>
            <Button id = "six" handleClick = {this.addToInput}>6</Button>
            <Button id = "multiply" handleClick = {this.addToInput}>*</Button>
          </div>
          <div className = "row">
            <Button id = "three" handleClick = {this.addToInput}>3</Button>
            <Button id = "two" handleClick = {this.addToInput}>2</Button>
            <Button id = "one" handleClick = {this.addToInput}>1</Button>
            <Button id = "add" handleClick = {this.addToInput}>+</Button>
          </div>
          <div className = "row">
            <Button id = "decimal" handleClick = {this.addToInput}>.</Button>
            <Button id = "zero" handleClick = {this.addToInput}>0</Button>
            <Button id = "equals" handleClick = {this.handleEqual}>=</Button>
            <Button id = "subtract" handleClick = {this.addToInput}>-</Button>
          </div>
          <div className = "row">
            <ClearButton handleClear = {this.handleClr}>Clear</ClearButton>
            <ClearButton handleClear = {this.handleClrLast}>CE</ClearButton>
          </div>
          <footer>Creater By</footer>
        </div>
      </div>
    );
  }
}

export default App;
