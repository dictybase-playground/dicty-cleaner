import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const style = {
  textInput: {
    borderRadius: 4,
    backgroundColor: "rgba(0, 123, 255, .05)",
    border: "2px solid #0b3861",
    padding: "16px 16px",
    width: "calc(100% - 65px)"
  }
};

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("There has been a change");
    this.props.handleButtonClick(e.target.value);
  }

  render() {
    return (
      <center>
        <br />
        <TextField
          magin="normal"
          multiline
          rows={10}
          className={this.props.classes.textInput}
          onChange={this.handleChange}
        />
        <div>
          <br />
          <Button variant="raised" size="large" color="primary">
            Submit
          </Button>
        </div>
      </center>
    );
  }
}

TextBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(TextBox);
