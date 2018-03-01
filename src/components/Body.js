import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextBox from "./TextBox";
import ResultBox from "./ResultBox";
import randomString from "random-string";
import Divider from 'material-ui/Divider';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "",
      isLoading: false,
      error: null,
      sample: "",
  };

    /* React components using ES6 classes do not autobind non React methods */
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  onChange(input) {
    /* Only update the value of the input */
    this.setState({ input: input, result: this.state.result });
    console.log("Updated Input: ", this.state.input);
  }

  componentWillMount() {

  }

  async handleButtonClick() {
    fetch('https://api.github.com/users/hadley/orgs')
      .then((res) => res.json())
      .then((something) => this.setState({sample: something}))
    console.log("Sample", this.state.sample)
  }

  render() {

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <center>
          <h1>Dicty Cleaner</h1>
          {this.state.pictures}
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
