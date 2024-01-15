import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import Enzyme from 'enzyme';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

// @ts-expect-error TS(2304): Cannot find name 'expect'.
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// React 16 Enzyme adapter
Enzyme.configure({adapter: new Adapter()});