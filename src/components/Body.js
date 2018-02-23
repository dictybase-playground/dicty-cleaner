import React, { Component } from "react";

import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField';

import "typeface-roboto";

const Body = props => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <center>
            <TextField multiline />
          </center>
          <center>
            <Button variant="raised" size="large" color="primary">
              Submit
            </Button>
          </center>

        </Grid>
        <Grid item xs={12} sm={6}>
          Grid section 2
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
