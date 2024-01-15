import React from 'react';
import './VideoGridHeader.scss';

export function VideoGridHeader(props: any) {
  return (
    <div className='video-grid-header'>
      <span className='title'>{props.title}</span>
    </div>
  );
}