import React, { Component } from "react";

import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";

import TextBox from "./TextBox";

const Body = props => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
            <TextBox />
        </Grid>
        <Grid item xs={12} sm={6}>
          Grid section 2
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
