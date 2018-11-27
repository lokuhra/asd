import React from "react";
import Head from "./Head/index";
import NProgress from "nprogress";
import Router from "next/router";
import NavBar from "./Navbar"

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = "This is the default title" }) => (
  <div className={"h-screen has-background-grey-lighter"}>
    <Head title={title} />
    <div className={"container"}>
      <NavBar />
      <div className={"main container"}>
        {children}
      </div>

    </div>
  </div>
);
