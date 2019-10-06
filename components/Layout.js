import React from "react";
import Head from "next/dist/next-server/lib/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./nav";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title>{title}</title>
      </Head>
          <Nav/>
      <h1>{title}</h1>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        
       
        footer {
          padding: 1em;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}</style>
    </div>
  );
};
