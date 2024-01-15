import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview.tsx';
import './RelatedVideos.scss';
import {NextUpVideo} from './NextUpVideo/NextUpVideo.tsx';
interface Video {
  id: number,
  contentDetails?: any;
  snippet?: any;
}
interface VideoPreviewProps {
  video?: Video;
  videos?: any;
  key?: any;
  pathname?: string;
  className?: string;
  search?: string;
  horizontal?: boolean; // or true if it's always true
}
// interface VideoPreviewProps {
//   video: Video;
  
//   videos: any;
//   key: any;
//   pathname: string;
//   search: string;
//   horizontal?: boolean; // Make it optional
//   contentDetails: {
//     duration: string;
//   }
// }
export function RelatedVideos(props: VideoPreviewProps) {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos'/>;
  }

  // safe because before we check if the array has at least one element
  const nextUpVideo = props.videos[0];
  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map((relatedVideo: any) => <VideoPreview video={relatedVideo}
                key={relatedVideo.id}
                pathname='/watch'
                search={`?v=${relatedVideo.id}`}
                horizontal={true}/>);

  return (
    <div className='related-videos'>
      <NextUpVideo video={nextUpVideo}/>
      {relatedVideosPreviews}
    </div>
  );
}