import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Paper from 'material-ui/Paper';

const style = {
  height: 180,
  width: "100%",
  padding: 25,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: "rgba(0, 123, 255, .05)",
};

const ResultBox = props => {
  return (
    <center>
      <br />
      <Paper style={style}>
        Hello, I am text
      </Paper>
    </center>
  );
};

ResultBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(ResultBox);
