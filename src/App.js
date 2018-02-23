import React, { Component } from 'react';
import Header from './components/AppHeader';
import Footer from './components/AppFooter';
import Body from './components/Body';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
