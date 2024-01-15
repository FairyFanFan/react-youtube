import {VideoGrid} from '../../../components/VideoGrid/VideoGrid.tsx';
import React from 'react';
import './HomeContent.scss';
import {getMostPopularVideos, getVideosByCategory} from '../../../store/reducers/videos';
import {connect} from 'react-redux';
import {InfiniteScroll} from '../../../components/InfiniteScroll/InfiniteScroll';

const AMOUNT_TRENDING_VIDEOS = 12;
interface HomeContentProps {
  // other properties...
  bottomReachedCallback: () => void;
  showLoader: boolean;
  mostPopularVideos?: any;
  videosByCategory?: any;
}
export class HomeContent extends React.Component<HomeContentProps> {
  render() {
    const trendingVideos = this.getTrendingVideos();
    const categoryGrids = this.getVideoGridsForCategories();

    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <InfiniteScroll bottomReachedCallback={this.props.bottomReachedCallback} showLoader={this.props.showLoader}>
            <VideoGrid title='Trending' videos={trendingVideos}/>
            {categoryGrids}
          </InfiniteScroll>
        </div>
      </div>
    );
  }

  getTrendingVideos() {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }

  getVideoGridsForCategories() {
    const categoryTitles = Object.keys(this.props.videosByCategory || {});
    return categoryTitles.map((categoryTitle,index) => {
      const videos = this.props.videosByCategory[categoryTitle];
      const hideDivider = index === categoryTitles.length - 1;
      return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider}/>;
    });
  }
}

function mapStateToProps(state: any) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state),
  };
}
export default connect(mapStateToProps, null)(HomeContent);