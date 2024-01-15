import React, { ReactNode } from 'react';
import {Waypoint} from 'react-waypoint';
import {Loader} from 'semantic-ui-react';
import './InfiniteScroll.scss';

interface InfiniteScrollProps {
  showLoader: boolean;
  children: ReactNode;
  bottomReachedCallback: () => void;
}

export function InfiniteScroll(props: InfiniteScrollProps) {
  return (
    <React.Fragment>
      {props.children}
      {/* <Waypoint onEnter={props.bottomReachedCallback}>
        <div className='loader-container'>
          <Loader active={props.showLoader} inline='centered' />
        </div>
      </Waypoint> */}
    </React.Fragment>
  );
}