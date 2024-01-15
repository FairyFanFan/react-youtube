import React, { Component } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedComponent } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';
import { AppLayout } from './components/AppLayout/AppLayout.tsx';
import Home from './containers/Home/Home.tsx';
import Watch from './containers/Watch/Watch.tsx';
import Trending from './containers/Trending/Trending.tsx';
import Search from './containers/Search/Search.tsx';

interface Location {
  key: any;
}
interface AppProps extends RouteComponentProps {
  // youtubeLibraryLoaded: boolean; // Adjust the type if needed
  // location: Location;
  // youtubeLibraryLoaded: () => void;
  youtubeLibraryLoaded: any;


}
interface CustomWindow extends Window {
  gapi?: any; // You can replace 'any' with the actual type of 'gapi' if known
}
class App extends Component<any> {
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    const customWindow = window as CustomWindow;

    script.onload = () => {
      customWindow.gapi.load('client', () => {
        customWindow.gapi.client.setApiKey(process.env.REACT_APP_YT_API_KEY);
        customWindow.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/feed/trending" component={Trending} />
          <Route path="/results" render={() => <Search key={this.props.location.key} />} />
          <Route path="/watch" render={() => <Watch key={this.props.location.key} />} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

// Assuming mapDispatchToProps is an object
// const mapDispatchToProps = {
//   someAction: () => dispatch(someAction()),
//   anotherAction: () => dispatch(anotherAction())
// };

// Convert it to a function
// const mapDispatchToPropsFunction = (dispatch: Dispatch) => ({
//   someAction: () => dispatch(someAction()),
//   anotherAction: () => dispatch(anotherAction())
// });

export default withRouter(
  // connect(null, mapDispatchToProps)(App)
  // connect<null, mapDispatchToProps, RouteComponentProps<any, StaticContext, unknown>>(
  //   null,
  //   mapDispatchToProps
  // )(App)
  connect<null, typeof mapDispatchToProps, RouteComponentProps<any>>(
    null,
    mapDispatchToProps
  )(App)
);

