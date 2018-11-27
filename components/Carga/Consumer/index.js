import React, {Fragment} from "react";

import Input from '../partials/Input'

import { Consumer } from "../ContextProvider/index";

const Counter = () => (
  <Consumer>
    {({ state: { fileName }, actions: { onFileLoad} }) => (
      <Fragment>
        <Input onChange={e=>onFileLoad(e)} fileName={fileName}/>


      </Fragment>
    )}
  </Consumer>
);

export default Counter;
