import React from 'react';
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './Home.scss';
import {SideBar} from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent.tsx';
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
          showLoader={this.shouldShowLoader()}/>
      </React.Fragment>
    );
  }

  componentDidMount() {
    // @ts-expect-error TS(2339): Property 'youtubeLibraryLoaded' does not exist on ... Remove this comment to see the full error message
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps: any) {
    // @ts-expect-error TS(2339): Property 'youtubeLibraryLoaded' does not exist on ... Remove this comment to see the full error message
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    // @ts-expect-error TS(2339): Property 'videoCategories' does not exist on type ... Remove this comment to see the full error message
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory();
    }
  }

  fetchVideosByCategory() {
    // @ts-expect-error TS(2339): Property 'categoryIndex' does not exist on type 'R... Remove this comment to see the full error message
    const categoryStartIndex = this.state.categoryIndex;
    // @ts-expect-error TS(2339): Property 'videoCategories' does not exist on type ... Remove this comment to see the full error message
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    // @ts-expect-error TS(2339): Property 'fetchMostPopularVideosByCategory' does n... Remove this comment to see the full error message
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        // @ts-expect-error TS(2339): Property 'categoryIndex' does not exist on type 'R... Remove this comment to see the full error message
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  fetchCategoriesAndMostPopularVideos() {
    // @ts-expect-error TS(2339): Property 'fetchMostPopularVideos' does not exist o... Remove this comment to see the full error message
    this.props.fetchMostPopularVideos();
    // @ts-expect-error TS(2339): Property 'fetchVideoCategories' does not exist on ... Remove this comment to see the full error message
    this.props.fetchVideoCategories();
  }

  bottomReachedCallback = () => {
    // @ts-expect-error TS(2339): Property 'videoCategoriesLoaded' does not exist on... Remove this comment to see the full error message
    if (!this.props.videoCategoriesLoaded) {
      return;
    }
    this.fetchVideosByCategory();
  };

  shouldShowLoader() {
    // @ts-expect-error TS(2339): Property 'videoCategoriesLoaded' does not exist on... Remove this comment to see the full error message
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      // @ts-expect-error TS(2339): Property 'categoryIndex' does not exist on type 'R... Remove this comment to see the full error message
      return this.state.categoryIndex < this.props.videoCategories.length;
    }
    return false;
  }
}

function mapStateToProps(state: any) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state),
  };
}

function mapDispatchToProps(dispatch: any) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
  return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);