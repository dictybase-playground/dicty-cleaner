import React from "react";
import { Header } from "dicty-components-header-footer";

const aStyle = {
  color: "#15317e",
  marginRight: "8px",
  textDecoration: "none"
};

const rStyle = {
  color: "#1B9CFC",
  marginRight: "8px",
  textDecoration: "none"
};

const items = [
  {
    url: "/cite",
    icon: "plus",
    text: "Cite Us"
  },
  {
    url: "/downloads",
    icon: "download",
    text: "Downloads"
  },
  {
    url: "/info",
    icon: "info-circle",
    text: "About dictyBase"
  },
  {
    url: "/login",
    icon: "sign-in",
    text: "Login",
    isRouter: true
  }
];

const generateLinks = (link, i) => {
  return link.isRouter
    ? <a style={rStyle} key={i} href={link.url}>
        {link.text}
      </a>
    : <a style={aStyle} key={i} href={link.url}>
        {link.text}
      </a>;
};

const AppHeader = props => {
  return (
    <Header items={items}>
      {items => items.map(generateLinks)}
    </Header>
  );
};

export default AppHeader;
