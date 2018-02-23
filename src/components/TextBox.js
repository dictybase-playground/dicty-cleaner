import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";


const styles = {
  textInput: {
    borderRadius: 4,
    // backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 20px)",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // "&:focus": {
    //   borderColor: "#80bdff",
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    // }
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
