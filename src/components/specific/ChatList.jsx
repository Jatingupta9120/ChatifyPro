import { Stack  } from '@mui/material';

import PropTypes from 'prop-types';
import ChatItem from '../shared/ChatItem';
import { bggradient } from '../../constants/color';

const ChatList = ({ w = "100%", chats = [], chatId, onlineUsers = [], newMessagesAlert = [], handleDeleteChat }) => {
  return (
    <Stack width={w} direction="column" overflow={"auto"} height={"100%"} sx={{
      backgroundImage:bggradient,
      // color import kia side wale section m user section mthis
    }}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);
        const isOnline = members?.some(member => onlineUsers.includes(member._id));
        return (
          <ChatItem 
            key={_id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
            index={index}
          />
        );
      })}
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
