import React from 'react';
import Feed from '../../components/Feed/Feed';

const posts = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
];

export default function FeedContainer() {
  return (
    <Feed
      posts={posts}
    />
  );
}
