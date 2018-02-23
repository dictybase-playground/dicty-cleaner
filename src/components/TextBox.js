import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";


const styles = {
  textInput: {
    borderRadius: 4,
    backgroundColor: "rgba(0, 123, 255, .05)",
    border: "2px solid #0b3861",
    padding: "16px 16px",
    width: "calc(100% - 20px)",
  },
};

const Body = props => {
  return (
    <div>
      <center>
        <TextField
          magin="normal"
          multiline
          rows={10}
          className={props.classes.textInput}
        />
        <div>
          <Button variant="raised" size="large" color="primary">
            Submit
          </Button>
        </div>
      </center>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
