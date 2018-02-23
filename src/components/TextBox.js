import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";

const Body = props => {
  return (
    <div>
      <center>
        <TextField multiline rows={10} />
        <div>
          <Button variant="raised" size="large" color="primary">
            Submit
          </Button>
        </div>
      </center>
    </div>
  );
};

export default Body;
