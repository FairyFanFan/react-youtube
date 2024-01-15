import React, {Component} from 'react';
// @ts-expect-error TS(2307): Cannot find module './containers/Home/Home' or its... Remove this comment to see the full error message
import Home from './containers/Home/Home';
// @ts-expect-error TS(2307): Cannot find module './components/AppLayout/AppLayo... Remove this comment to see the full error message
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module './containers/Watch/Watch' or i... Remove this comment to see the full error message
import Watch from './containers/Watch/Watch';
import {bindActionCreators} from 'redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {connect} from 'react-redux';
// @ts-expect-error TS(2307): Cannot find module './store/actions/api' or its co... Remove this comment to see the full error message
import {youtubeLibraryLoaded} from './store/actions/api';
// @ts-expect-error TS(2307): Cannot find module './containers/Trending/Trending... Remove this comment to see the full error message
import Trending from './containers/Trending/Trending';
// @ts-expect-error TS(2307): Cannot find module './containers/Search/Search' or... Remove this comment to see the full error message
import Search from './containers/Search/Search';
// const googleClient = require('./google-client.js');
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
console.log(111, process)
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const API_KEY = process.env.REACT_APP_YT_API_KEY;
// const API_KEY = 'AIzaSyC5zu1Da7wGFJFiwZDgiWTTD4YQu7ywQnw';

class App extends Component {
  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AppLayout>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Switch>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/feed/trending" component={Trending}/>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/results" render={() => <Search key={this.props.location.key}/>}/>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/watch" render={() => <Watch key={this.props.location.key}/>}/>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    // script.src = googleClient;

    script.onload = () => {
      // @ts-expect-error TS(2339): Property 'gapi' does not exist on type 'Window & t... Remove this comment to see the full error message
      window.gapi.load('client', () => {
        // @ts-expect-error TS(2339): Property 'gapi' does not exist on type 'Window & t... Remove this comment to see the full error message
        window.gapi.client.setApiKey(API_KEY);
        // @ts-expect-error TS(2339): Property 'gapi' does not exist on type 'Window & t... Remove this comment to see the full error message
        window.gapi.client.load('youtube', 'v3', () => {
          // @ts-expect-error TS(2339): Property 'youtubeLibraryLoaded' does not exist on ... Remove this comment to see the full error message
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));