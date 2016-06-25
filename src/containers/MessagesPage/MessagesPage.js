import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import './MessagesPage.scss';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class MessagesPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-4 MessagesPageSideBar">
        <List style={{maxWidth: "90%"}}>
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/ok-128.jpg" />}
            primaryText={<span className="ChatUserRole">Web Developer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Brendan Lim</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/kolage-128.jpg" />}
            primaryText={<span className="ChatUserRole">Software Engineer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Brian Young</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/uxceo-128.jpg" />}
            primaryText={<span className="ChatUserRole">UI/UX Designer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Amy Kjorleon</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/kerem-128.jpg" />}
            primaryText={<span className="ChatUserRole">Web Developer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Brendan Lim</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
            primaryText={<span className="ChatUserRole">Web Developer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Mary Sky</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
            primaryText={<span className="ChatUserRole">Web Developer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Mary Sky</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar className="ChatUserAvatar" src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
            primaryText={<span className="ChatUserRole">Web Developer</span>}
            secondaryText={
              <p>
                <span className="ChatUserName">Brendan Lim</span>
                <span className="ChatMessageSummary">I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
              </p>
            }
            secondaryTextLines={2}
          />
        </List>
        </div>

        <div className="col-md-8 MessagesPageMessageContainer">

          <div className="col-inside-lg decor-default">
            <div className="chat-body">
              <div className="answer left">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                  <div className="status offline"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                  <div className="status offline"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer left">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                  <div className="status online"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  ...
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                  <div className="status busy"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  It is a long established fact that a reader will be. Thanks Mate!
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                  <div className="status off"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  It is a long established fact that a reader will be. Thanks Mate!
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer left">
                <div className="avatar">
                  <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                  <div className="status offline"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://www.material-ui.com/images/kerem-128.jpg" alt="User name" />
                  <div className="status offline"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                </div>
                <div className="time">5 min ago</div>
              </div>
              <div className="answer left">
                <div className="avatar">
                  <img src="http://www.material-ui.com/images/uxceo-128.jpg" alt="User name" />
                  <div className="status online"></div>
                </div>
                <div className="name">Amy Kjorleon</div>
                <div className="text">
                  Sounds good to me
                </div>
                <div className="time">4 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://www.material-ui.com/images/kerem-128.jpg" alt="User name" />
                  <div className="status busy"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  It is a long established fact that a reader will be. Thanks Mate!
                </div>
                <div className="time">3 min ago</div>
              </div>
              <div className="answer right">
                <div className="avatar">
                  <img src="http://www.material-ui.com/images/kerem-128.jpg" alt="User name" />
                  <div className="status off"></div>
                </div>
                <div className="name">Alexander Herthic</div>
                <div className="text">
                  It is a long established fact that a reader will be. Thanks Mate!
                </div>
                <div className="time">2 min ago</div>
              </div>
              <div className="answer-add col-md-12">
                <input placeholder="Write a message" />
                <span className="answer-btn answer-btn-1"></span>
                <span className="answer-btn answer-btn-2"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MessagesPage;
