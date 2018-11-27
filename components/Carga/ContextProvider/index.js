import React, { Component, createContext } from "react";
import papa from "papaparse";
import _ from 'lodash'

export const { Provider, Consumer } = createContext();

export class ContextProvider extends Component {
  state = { fileLoad: null,category:null,data:null, fileName:"" };

  toggleNavBar = () => {
    this.setState(({ isToggleNavBar }) => ({
      isToggleNavBar: isToggleNavBar === true ? false : true
    }));
  };

  onFileLoad =e => {
    let name= e.target.files[0].name
    let file = e.target.files[0];
    papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: results => {
        this.setState({
          data: _.remove(results.data, n => n.label !== null),
          fileName:name
        });
      }
    })
  };



  render() {
    const value = {
      state: this.state,
      actions: {
        onFileLoad: this.onFileLoad,
      }
    };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}
