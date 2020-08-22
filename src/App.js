import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      placeholder: null,
    };
  }

  addToInput = (val) => {
    this.setState({
      input: this.state.input + val,
      placeholder: null,
    });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handleClr = () => {
    this.setState({
      input: "",
      placeholder: 0,
    });
  };

  handleClrLast = () => {
    let removelast = this.state.input.toString().slice(0, -1);
    // removelast = removelast.substring(0, removelast.length - 1);
    // removelast = removelast.toString();
    // removelast = removelast.slice(0, -1);
    removelast = Number(removelast);
    this.setState({
      input: removelast,
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='calc-wrapper'>
          <Input
            id='display'
            type='number'
            value={0}
            input={this.state.input || this.state.placeholder}></Input>
          <div className='row'>
            <Button id='seven' handleClick={this.addToInput}>
              7
            </Button>
            <Button id='eight' handleClick={this.addToInput}>
              8
            </Button>
            <Button id='nine' handleClick={this.addToInput}>
              9
            </Button>
            <Button id='divide' handleClick={this.addToInput}>
              /
            </Button>
          </div>
          <div className='row'>
            <Button id='four' handleClick={this.addToInput}>
              4
            </Button>
            <Button id='five' handleClick={this.addToInput}>
              5
            </Button>
            <Button id='six' handleClick={this.addToInput}>
              6
            </Button>
            <Button id='multiply' handleClick={this.addToInput}>
              *
            </Button>
          </div>
          <div className='row'>
            <Button id='three' handleClick={this.addToInput}>
              3
            </Button>
            <Button id='two' handleClick={this.addToInput}>
              2
            </Button>
            <Button id='one' handleClick={this.addToInput}>
              1
            </Button>
            <Button id='add' handleClick={this.addToInput}>
              +
            </Button>
          </div>
          <div className='row'>
            <Button id='decimal' handleClick={this.addToInput}>
              .
            </Button>
            <Button id='zero' handleClick={this.addToInput}>
              0
            </Button>
            <Button id='equals' handleClick={this.handleEqual}>
              =
            </Button>
            <Button id='subtract' handleClick={this.addToInput}>
              -
            </Button>
          </div>
          <div className='row'>
            <ClearButton id='clear' handleClear={this.handleClr}>
              Clear
            </ClearButton>
            <ClearButton id='clr-last' handleClear={this.handleClrLast}>
              CE
            </ClearButton>
          </div>
          <footer class='footer-distributed'>
            <p>
              <a href='https://github.com/AOMuiz'>AOMuiz</a> &copy; 2020 ||
              Created Using React and <a href='https://mathjs.org/'>MathJs</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
