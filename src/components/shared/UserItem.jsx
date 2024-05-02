import React, { memo } from 'react';
import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import { Add as AddIcon ,Remove as RemoveIcon} from '@mui/icons-material';

const UserItem = ({ user, handler, handlerisloading  }) => {
    const { name, _id, avatar,isAdded } = user;
    return (
        <ListItem>
            <Stack
                direction="row"
                alignItems="center"
                spacing="1rem"
                width="100%"
            >
                <Avatar />
                <Typography
                    variant="body1"
                    display="-webkit-box"
                    webkitLineClamp={1}
                    webkitBoxOrient="vertical"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {name}
                </Typography>
                
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded  ?"error.main":"primary.main",
                        color: "white",
                        "&:hover": { // fixed syntax error here
                            bgcolor:isAdded  ?"error.dark": "primary.dark",
                        },
                    }}
                    onClick={() => handler(_id)}
                    disabled={handlerisloading}
                >
                    {
                        isAdded?<RemoveIcon/>: <AddIcon />
                    }
                   
                </IconButton>
            </Stack>
        </ListItem>
    );
};

export default memo(UserItem);
