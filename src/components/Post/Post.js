import React, { useState, useCallback } from 'react';
import Reactions from '../Reactions/Reactions';
import {
  PostContainer,
  HeaderContainer,
  HeaderContent,
  Avatar,
  Name,
  DatePost,
  Description,
  Photo,
  InfoContainer,
  Comment,
  ActionsContainer,
  ActionContainer,
  LabelAction,
  IconAction,
} from './Post.styles';

export default function Post() {
  const [reactionsOpened, setReactionsOpened] = useState(false);
  const toggleReactionOpened = useCallback(() => {
    setReactionsOpened(!reactionsOpened);
  }, [reactionsOpened]);

  return (
    <PostContainer>
      <HeaderContainer>
        <Avatar source={{ url: 'https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg' }} />
        <HeaderContent>
          <Name>Hiléo Andersson</Name>
          <DatePost>Saturday at 17:00</DatePost>
        </HeaderContent>
      </HeaderContainer>
      <Description>
        Hic quia dolor. Natus dolorem dicta rem ut architecto est sunt. In recusandae rem qui et quis. Provident consequuntur excepturi similique quo et. Et qui beatae ducimus ipsam dolore ut nihil deleniti.
      </Description>
      <Photo
        source={{ url: 'https://images.unsplash.com/photo-1571825224369-48338bfedb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }}
      />
      <InfoContainer>
        <Reactions visible={reactionsOpened} />
        <Comment>70 Comments</Comment>
      </InfoContainer>
      <ActionsContainer>
        <ActionContainer onPress={toggleReactionOpened}>
          <IconAction name="thumbs-up" />
          <LabelAction>Like</LabelAction>
        </ActionContainer>
        <ActionContainer>
          <IconAction name="message-square" />
          <LabelAction>Comment</LabelAction>
        </ActionContainer>
        <ActionContainer>
          <IconAction name="share-2" />
          <LabelAction>Send in Messenger</LabelAction>
        </ActionContainer>
      </ActionsContainer>
    </PostContainer>
  );
}