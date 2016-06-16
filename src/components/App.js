import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header/Header';

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Header />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
