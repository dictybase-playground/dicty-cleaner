import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextBox from "./TextBox";
import ResultBox from "./ResultBox";
import Divider from "material-ui/Divider";

class Body extends Component {
  constructor(props) {
    super(props); // useless sometimes
    this.state = {
      input: "",
      result: "",
      isLoading: false,
      error: null,
      id: ""
    };

    /* React components using ES6 classes do not autobind non React methods */
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  onChange(id) {
    this.setState({ id: id }, () => { console.log("ID:", this.state.id)});
  }

  // timeout
  // two functions, one just mock function for timeout, another is real
  //

  async handleButtonClick(id) {
    // handler should NOT be async. make the handler call an async function
    try {
      let response = await fetch("http://dictybase.org/cache/gene/" + id, {
        method: "DELETE"
      });
    } catch(error) {
      console.log(error);
    }
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
        <Grid container spacing={16}>
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
