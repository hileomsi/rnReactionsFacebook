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

export default function Post(props) {
  const {
    user: {
      name,
      avatar,
    },
    createdAt,
    description,
    photo,
    comments,
  } = props;
  const [reactionsOpened, setReactionsOpened] = useState(false);
  const toggleReactionOpened = useCallback(() => {
    setReactionsOpened(!reactionsOpened);
  }, [reactionsOpened]);

  return (
    <PostContainer>
      <HeaderContainer>
        <Avatar source={{ url: avatar }} />
        <HeaderContent>
          <Name>{name}</Name>
          <DatePost>{createdAt}</DatePost>
        </HeaderContent>
      </HeaderContainer>
      <Description>
        {description}
      </Description>
      <Photo
        source={{ url: photo }}
      />
      <InfoContainer>
        <Reactions visible={reactionsOpened} />
        <Comment>{comments}</Comment>
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