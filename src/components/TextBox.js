import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = {
  textInput: {
    borderRadius: 4,
    backgroundColor: "rgba(0, 123, 255, .05)",
    border: "2px solid #0b3861",
    padding: "16px 16px",
    width: "calc(100% - 65px)"
  }
};

const TextBox = props => {
  return (
    <center>
      <br />
      <TextField
        magin="normal"
        multiline
        rows={10}
        className={props.classes.textInput}
      />
      <div>
        <br />
        <Button variant="raised" size="large" color="primary">
          Submit
        </Button>
      </div>
    </center>
  );
};

TextBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextBox);
