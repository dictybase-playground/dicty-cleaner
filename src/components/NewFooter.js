import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Footer } from "dicty-components-header-footer"

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

const items = [
  [
    {
      header: { link: "http://yahoo.com", description: "Yahoo" },
      items: [
        { link: "http://cnn.com", description: "CNN" },
        { link: "http://nytimes.com", description: "Nytimes" },
      ],
    },
  ],
  [
    {
      header: { description: "Tools", link: "http://dictybase.org/tools" },
      items: [
        { link: "http://dictybase.org/tools", description: "Tools home" },
        { link: "http://dictybase.org/tools", description: "Genome browser" },
      ],
    },
  ],
  [
    {
      header: { description: "Please Cite", link: "http://dictybase.org/cite" },
      items: [
        { description: "dictyBase", link: "http://dictybase.org" },
        {
          description: "Dicty stock center",
          link: "http://dictybase.org/stock",
        },
      ],
    },
    {
      header: {
        description: "Supported By",
        link: "http://dictybase.org/support",
      },
      items: [
        { description: "NIH", link: "http://dictybase.org/nih" },
        { description: "GMOD", link: "http://dictybase.org/nih" },
        { description: "Gene ontology", link: "http://dictybase.org/nih" },
      ],
    },
  ],
];

class NewFooter extends Component {

  render() {
    return (
      <center>
        <br />
        <Footer items={items} />
      </center>
    );
  }
}

export default withStyles(style)(NewFooter);
