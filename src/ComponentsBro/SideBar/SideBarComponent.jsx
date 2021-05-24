import React from "react";
import './SideBar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon  from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {SideBarOptions} from "./SideBarOptions";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "@material-ui/core/Button";

export const SideBarComponent = (props) => {
    return (
        <div className={"sidebar"}>
            {/*Twitter icon*/}
            <TwitterIcon className={'sidebar__tweetIcon'}/>
            <SideBarOptions Icon={HomeIcon} text={'Home'}/>
            <SideBarOptions Icon={SearchIcon} text={'Explore'}/>
            <SideBarOptions Icon={NotificationsIcon} text={'Notification'}/>
            <SideBarOptions Icon={MailOutlineIcon} text={'Mail'}/>
            <SideBarOptions Icon={BookmarkBorderIcon} text={'Book'}/>
            <SideBarOptions Icon={PermIdentityIcon} text={'Profile'}/>
            <SideBarOptions Icon={MoreHorizIcon} text={'More'}/>
             <Button variant={'outlined'} className={'sidebar__tweet'} fullWidth>Tweed</Button>
            {/*Button*/}

        </div>
    )
};
