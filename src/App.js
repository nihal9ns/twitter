import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TimelinePage } from './components/TimelinePage.js';
import { AadharPage } from './searchpage/AadharPage.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {customWrap} from './custom';


class App extends Component {
   
  componentDidMount(){
    customWrap();
  }
 
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Switch>
          <Route exact path="/" component= {TimelinePage} />
          <Route exact path="/aadhar" component= {AadharPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
