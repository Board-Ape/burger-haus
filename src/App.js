import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CoffeeBuilder from './containers/CoffeeBuilder/CoffeeBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CoffeeBuilder /> 
        </Layout>
      </div>
    );
  }
}

export default App;
