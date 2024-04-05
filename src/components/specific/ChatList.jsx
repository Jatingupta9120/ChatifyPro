import { Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const ChatList = ({ w = "100%", chats = [], chatId, onlineUsers = [], newMessagesAlert = [], handleDeleteChat }) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data) => (
       return <div>{data}</div>
      ))}
    </Stack>
  );
};

ChatList.propTypes = {
  w: PropTypes.string,
  chats: PropTypes.array,
  chatId: PropTypes.string,
  onlineUsers: PropTypes.array,
  newMessagesAlert: PropTypes.array,
  handleDeleteChat: PropTypes.func,
};

export default ChatList;
