import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Feed from './Feed';

const props = {
  posts: [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ],
};

storiesOf('Feed', module)
  .add('default view', () => (
    <Feed {...props} /> 
  ));
