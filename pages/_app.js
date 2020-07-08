import React from 'react';
import App from 'next/app'

import './App.css';
import '.';
import 'semantic-ui-css/semantic.min.css';

class MainApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
          <Component {...pageProps} />
      );
    }
  }

export default MainApp