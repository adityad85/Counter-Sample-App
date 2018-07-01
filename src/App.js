import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const Input = (props) => <input onClick={props.onClick} type="button" value={props.value} />

const CounterPresentation = (props) => <div>
  <h1>Beautiful</h1>
  <h2>Value :{props.counterValue}</h2>
  <Input value="INC" onClick={() => props.inc(1)} />
  <Input value="INC by 5" onClick={()=>props.incby5(5)} />
  <Input value="DEC" onClick={()=>props.dec(1)}/>
  <Input value="DEC by 5" onClick={()=>props.decby5(5)}/>
  <Input value="RESET" onClick={()=>props.reset()}/>
</div>

const mapStateToProps = (props) => ({
  counterValue: props.counterState.counter,
});
const inc = (value) => ({
  type: 'INC',
  value: value,
}); 
const dec = (value) => ({
  type: 'DEC',
  value: value,
}); 
const incby5 = (value) => ({
  type: 'INC',
  value: value,
}); 
const decby5 = (value) => ({
  type: 'DEC',
  value: value,
});
const reset = () => ({
  type: 'RESET',
  value: 0,
});
const mapDispatchToProps = {
  inc,
  incby5,
  decby5,
  dec,
  reset,
}
const intermediate = connect(mapStateToProps, mapDispatchToProps)
const Counter = intermediate(CounterPresentation);
// class Counter1 extends Component {
//   render() {
//     return <div>

//     </div>

//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
