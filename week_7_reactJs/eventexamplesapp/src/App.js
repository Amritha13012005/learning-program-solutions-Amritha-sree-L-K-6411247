import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Binding for 'this'
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Increment + Hello message
  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  }

  sayHello() {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  }

  // Decrement
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // Say Welcome with argument
  sayWelcome(message) {
    alert(message);
  }

  // Synthetic event example
  handleSyntheticEvent(e) {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Event Examples App</h1>

        {/* Counter */}
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>

        <br /><br />

        {/* Say Welcome */}
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br /><br />

        {/* Synthetic Event */}
        <button onClick={(e) => this.handleSyntheticEvent(e)}>
          Synthetic Event
        </button>

        <br /><br />

        {/* Currency Converter Component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;


