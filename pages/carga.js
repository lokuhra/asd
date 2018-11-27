import React, { Component } from 'react'
import App from "../components/App";
import Carga from '../components/Carga'

export default class Home extends Component {
  // Add some delay
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 50);
    });
    return {};
  }

  render() {
    return (
      <App title="Carga">
        <Carga />
      </App>
    );
  }
}