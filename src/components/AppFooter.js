import React from "react";
import { Footer } from "dicty-components-header-footer";

const items = [
  [
    {
      header: { link: "http://yahoo.com", description: "Yahoo" },
      items: [
        { link: "http://cnn.com", description: "CNN" },
        { link: "http://nytimes.com", description: "Nytimes" }
      ]
    }
  ],
  [
    {
      header: { description: "Tools", link: "http://dictybase.org/tools" },
      items: [
        { link: "http://dictybase.org/tools", description: "Tools home" },
        { link: "http://dictybase.org/tools", description: "Genome browser" }
      ]
    }
  ],
  [
    {
      header: { description: "Please Cite", link: "http://dictybase.org/cite" },
      items: [
        { description: "dictyBase", link: "http://dictybase.org" },
        {
          description: "Dicty stock center",
          link: "http://dictybase.org/stock"
        }
      ]
    },
    {
      header: {
        description: "Supported By",
        link: "http://dictybase.org/support"
      },
      items: [
        { description: "NIH", link: "http://dictybase.org/nih" },
        { description: "GMOD", link: "http://dictybase.org/nih" },
        { description: "Gene ontology", link: "http://dictybase.org/nih" }
      ]
    }
  ]
];

const AppFooter = props => {
  return <Footer items={items} />;
};

export default AppFooter;
