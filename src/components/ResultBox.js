import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = {
  textOutput: {
    borderRadius: 4,
    backgroundColor: "rgba(0, 123, 255, .50)",
    border: "2px solid #0b3861",
    padding: "16px 16px",
    width: "calc(100% - 65px)"
  }
};

const ResultBox = props => {
  return (
    <center>
      <br />
      Results go in here
    </center>
  );
};

ResultBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultBox);
