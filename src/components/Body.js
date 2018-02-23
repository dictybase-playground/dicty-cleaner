import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextBox from "./TextBox";
import ResultBox from "./ResultBox";
import randomString from "random-string";
import Divider from 'material-ui/Divider';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", result: "" };

    /* React components using ES6 classes do not autobind non React methods */
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  onChange(input) {
    /* Only update the value of the input */
    this.setState({ input: input, result: this.state.result });
    console.log("Updated Input: ", this.state.input);
  }

  handleButtonClick() {
    /* When button is clicked, update the result */
    this.setState({ input: this.state.input, result: randomString({length: 10}) });
    console.log("Button was clicked! Here is the result: ", this.state.result);
  }

  render() {
    return (
      <div>
        <center>
          <h1>Dicty Cleaner</h1>
        </center>
        <Divider />
        <Grid container spacing={16} >
          <Grid item xs={12} sm={6}>
            <TextBox
              onChange={this.onChange}
              handleButtonClick={this.handleButtonClick}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultBox result={this.state.result} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Body;
