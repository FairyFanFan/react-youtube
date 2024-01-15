import React from 'react';
import {SideBar} from '../../containers/SideBar/SideBar.tsx';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll.tsx';
import './VideoList.scss';
import {VideoPreview} from '../VideoPreview/VideoPreview.tsx';
interface VideoListProps {
  bottomReachedCallback: () => void;
  showLoader: boolean;
  videos?: any;
  searchResults?: any;
}
export class VideoList extends React.Component<VideoListProps> {
  render() {
    const videoPreviews = this.getVideoPreviews();
    return (
      <React.Fragment>
        <SideBar/>
        <div className='video-list'>
          <InfiniteScroll bottomReachedCallback={this.props.bottomReachedCallback} showLoader={this.props.showLoader}>
            {videoPreviews}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }

  getVideoPreviews() {
    if(!this.props.videos || !this.props.videos.length) {
      return null;
    }
    const firstVideo = this.props.videos[0];
    if (!firstVideo.snippet.description) {return null}

    return this.props.videos.map((video: any) => <VideoPreview horizontal={true} expanded={true} video={video} key={video.id} pathname={'/watch'}
                  search={'?v=' + video.id}/>
    );
  }

}