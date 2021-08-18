import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import '../styles/globals.css';
import { Provider } from 'react-redux';
// import store from '../store/index';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    // console.log(jssStyles);
    // console.log(jss);
    // jssStyles.remove();
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      {/* <Provider store={store}> */}
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      {/* </Provider> */}
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
