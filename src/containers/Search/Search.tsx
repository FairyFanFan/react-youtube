import React from 'react';
import './Search.scss';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getSearchNextPageToken, getSearchResults} from '../../store/reducers/search';
import * as searchActions from '../../store/actions/search';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSearchParam} from '../../services/url';
import {VideoList} from '../../components/VideoList/VideoList';
import {withRouter} from 'react-router-dom';

class Search extends React.Component<any> {
  render() {
    return (<VideoList
      bottomReachedCallback={this.bottomReachedCallback}
      showLoader={true}
      videos={this.props.searchResults}/>);
  }

  getSearchQuery() {
    return getSearchParam(this.props.location, 'search_query');
  }

  componentDidMount() {
    if (!this.getSearchQuery()) {
      // redirect to home component if search query is not there
      this.props.history.push('/');
    }
    this.searchForVideos();
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.youtubeApiLoaded !== this.props.youtubeApiLoaded) {
      this.searchForVideos();
    }
  }

  searchForVideos() {
    const searchQuery = this.getSearchQuery();
    if (this.props.youtubeApiLoaded) {
      this.props.searchForVideos(searchQuery);
    }
  }

  bottomReachedCallback = () => {
    if(this.props.nextPageToken) {
      this.props.searchForVideos(this.getSearchQuery(), this.props.nextPageToken, 25);
    }
  };


}

function mapDispatchToProps(dispatch: any) {
  const searchForVideos = searchActions.forVideos.request;
  return bindActionCreators({searchForVideos}, dispatch);
}

function mapStateToProps(state: any, props: any) {
  return {
    youtubeApiLoaded: getYoutubeLibraryLoaded(state),
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
    searchResults: getSearchResults(state, props.location.search),
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
    nextPageToken: getSearchNextPageToken(state, props.location.search),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

