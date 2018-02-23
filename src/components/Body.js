import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";
import TextBox from "./TextBox";
import ResultBox from "./ResultBox";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", result: "" };

    /* React components using ES6 classes no longer autobind "this" to non React methods */
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(input) {
    this.setState({ input: input, result: this.state.result });
    console.log("Input: ", this.state.input);
    console.log("Result: ", this.state.result);
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextBox handleButtonClick={this.handleButtonClick} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultBox />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Body;
