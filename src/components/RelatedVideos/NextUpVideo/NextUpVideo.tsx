import React from 'react';
import './NextUpVideo.scss';
import {Checkbox, Divider} from "semantic-ui-react";
import {VideoPreview} from '../../VideoPreview/VideoPreview.tsx';
interface Video {
  id: number
}
interface VideoPreviewProps {
  video: Video;
  key: any;
  pathname: string;
  search: string;
  horizontal?: boolean; // Make it optional
  contentDetails: {
    duration: string;
  }
}
export function NextUpVideo(props: any) {
  return (
    <React.Fragment>
      <div className='next-up-container'>
        <h4>Up next</h4>
        <div className='up-next-toggle'>
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked/>
        </div>
      </div>
      {/* <VideoPreview key={props.video.id} horizontal={true} video={props.video} pathname='/watch' search={`?v=${props.video.id}`}/> */}
      <Divider/>
    </React.Fragment>
  );
}