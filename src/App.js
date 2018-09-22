import React, { Component } from 'react';
import Container from './components/Container'
import Card from './components/Card';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Background">
        <Container>
          <Card />
        </Container>
      </div>
    );
  }
}

export default App;
