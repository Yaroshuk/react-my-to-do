import React from 'react';
import Main from 'components/layout/Main';
import Header from 'components/layout/Header';
import Container from 'components/layout/Container';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Header />
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
