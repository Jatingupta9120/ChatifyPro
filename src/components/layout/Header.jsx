import { AppBar, Box, Toolbar, Typography, IconButton, Tooltip, Backdrop } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { Suspense, useState, lazy } from "react";
import { Group as GroupIcon, Logout as LogoutIcon, Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => {
  const navigateToGroup = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const LogoutHandler = () => {
    console.log("logout");
  };

  const SearchDialog = lazy(() => import("../specific/Search"));
  const NotificationDialog = lazy(() => import("../specific/Notifications"));
  const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
              ChatifyPro
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" }, flexGrow: 1 }} />
            <Box>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
              <IconBtn title={"Search"} Icon={<SearchIcon />} onClick={openSearchDialog} />
              <IconBtn title={"New Group"} Icon={<AddIcon />} onClick={openNewGroup} />
              <IconBtn title={"Manage Group"} Icon={<GroupIcon />} onClick={() => navigateToGroup("/groups")} />
              <IconBtn title={"Notifications"} Icon={<NotificationsIcon />} onClick={openNotification} />
              <IconBtn title={"Logout"} Icon={<LogoutIcon />} onClick={LogoutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
         <Suspense fallback={<Backdrop open/>}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, Icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {Icon}
      </IconButton>
    </Tooltip>
  );
};

IconBtn.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
