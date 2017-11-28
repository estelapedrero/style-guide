import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components';
import styles from './App.scss';

class App extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <h2>Colours</h2>
          <div className="grid">

          </div>
        </section>
        <section>
          <h2>Typography</h2>
        </section>
      </div>
    );
  }
}

export default App;
