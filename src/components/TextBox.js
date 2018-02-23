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
    width: "90%"
  },
  button: {
    width: "90%",
    backgroundColor: "#0b3861",
  }
};

class TextBox extends Component {
  constructor(props) {
    super(props);

    /* Bind all non-react functions */
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /* Call event handlers passed from parent component to lift the state */

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  handleButtonClick() {
    this.props.handleButtonClick();
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
          onChange={this.onChange}
        />
        <div>
          <br />
          <Button
            variant="raised"
            size="large"
            color="primary"
            onClick={this.handleButtonClick}
            className={this.props.classes.button}
            fullWidth={true}
            >
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
