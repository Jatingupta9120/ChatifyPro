/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Header from './Header';
import Footer from './Footer';
import Title from '../shared/Title';
import Chatlist from '../specific/ChatList';
import { sample } from '../../constants/sample';
import Profile from '../specific/Profile';

const AppLayout = (WrappedComponent) => {
    return (props) => {
        const params = useParams(); 
        const chatId = params.chatId;

        const handleDeleteChat = (e, _id, Groupchat) => {
            e.preventDefault(); // Corrected preventDefault() casing
            console.log("delete chat", _id, Groupchat);
        }
        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh-4rem)"}>
                    <Grid item sm={4} md={3} sx={{
                        display: { xs: "none", sm: "block" }

                    }} height={"100%"}><Chatlist chats={sample} chatId={chatId}
                        handleDeleteChat={handleDeleteChat} newMessagesAlert={[
                            {
                                chatId,
                                count: 4,
                            },
                        ]}
                        onlineUsers={["1", "2"]}
                    /></Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}><WrappedComponent {...props} /> </Grid>
                    <Grid item md={4} lg={3} height={"100% "}
                        sx={{
                            display: { xs: "none", md: "block" },
                            padding: "2rem",
                            bgcolor: "rgba(0,0,0,0.85)",

                        }} ><Profile /></Grid>

                </Grid>
                <Footer />
            </>
        );
    };

};

export default AppLayout;
