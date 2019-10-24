import React from 'react';
import Feed from '../../components/Feed/Feed';

const posts = [
  {
    id: 1,
    user: {
      name: 'Hiléo Andersson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg'
    },
    createdAt: 'Saturday at 17:00',
    description: 'Hic quia dolor. Natus dolorem dicta rem ut architecto est sunt. In recusandae rem qui et quis. Provident consequuntur excepturi similique quo et. Et qui beatae ducimus ipsam dolore ut nihil deleniti.',
    photo: 'https://images.unsplash.com/photo-1571825224369-48338bfedb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    comments: '70 Comments'
  },
  {
    id: 2,
    user: {
      name: 'Hiléo Andersson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ryuchi311/128.jpg'
    },
    createdAt: 'Saturday at 17:00',
    description: 'Explicabo aspernatur officiis ut.',
    photo: 'https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    comments: '70 Comments'
  },
  {
    id: 3,
    user: {
      name: 'Hiléo Andersson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg'
    },
    createdAt: 'Saturday at 17:00',
    description: 'Tempore veniam omnis sed numquam qui quidem cupiditate assumenda. Excepturi quia ex. Mollitia sint unde ut.',
    photo: 'https://images.unsplash.com/photo-1571838475231-bb5aa087c797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=897&q=80',
    comments: '70 Comments'
  },
];

export default function FeedContainer() {
  return (
    <Feed
      posts={posts}
    />
  );
}
