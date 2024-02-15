import React, { useState,useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from './AgentScreen.module.scss';
import logo from '../images/logorich.png'


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';


import { Item } from "./item/item";
import { Profile } from "./profile/profile";
import { ChatBox } from "./chatBox/chatBox";


const FBSampleData = [
    {
      id: 1,
      fname: "Amit",
      lname: "RG",
      email: "some@gamil.com",
      profile: "https://material-ui.com/static/images/avatar/1.jpg",
      type: "post",
      intro: {
        title: "Available in store",
        message: "Any stock for this product",
      },
  
      chats: [
        ["Is it in stock right now?"],
        [
          "We've 3 left in stock!",
          "If you order before 8PM we can ship it today.",
        ],
        ["Another message"],
      ],
    },
    {
      id: 2,
      fname: "Hiten",
      type: "DM",
      lname: "Saxena",
      email: "sexena@gamil.com",
      intro: {
        title: "Awesome product",
        message: "Hey there is it available.",
      },
      profile: "https://material-ui.com/static/images/avatar/3.jpg",
      chats: [
        ["new message"],
        ["user answer", "second answer"],
        ["another message"],
      ],
    },
  ];


function AgentScreen() {
  const [showInbox, setShowInbox] = useState(false);
  const {user}=useAuthContext();
  const [data] = useState(FBSampleData);
  const [selected, setSelected] = useState(FBSampleData[0]);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [id,setId]=useState(null);

    fetch(`https://graph.facebook.com/me?fields=email&=${user.email}&access_token=EAAFQGmW12gwBOZBxrlZChBzBv2mFKEcnvhHv3xi9IjYkgCD5jOIxc9bZAwN7KwZBoDZBudRAOE3XsjTkZAZBpkcI03VCK0WglALtZCjfZAMist062FzcKkCedp6GQNWvQ1IIA58TgnTP9k10ajxiu2jU7VP5vvzrzvmFSlZCWs7zgtrPZA7huvMdOff1UmyT6UC80jbcWZBl6WfEkIfWqLd4xUFhgybnoLYZD`)
    .then((res) => res.json())
    .then((data) => setId(data.id));

    useEffect(() => {
        const fetchProfilePicture = async () => {
          try {
            const response = await fetch(`https://graph.facebook.com/v13.0/${id}/picture?type=large&access_token=EAAFQGmW12gwBOZBxrlZChBzBv2mFKEcnvhHv3xi9IjYkgCD5jOIxc9bZAwN7KwZBoDZBudRAOE3XsjTkZAZBpkcI03VCK0WglALtZCjfZAMist062FzcKkCedp6GQNWvQ1IIA58TgnTP9k10ajxiu2jU7VP5vvzrzvmFSlZCWs7zgtrPZA7huvMdOff1UmyT6UC80jbcWZBl6WfEkIfWqLd4xUFhgybnoLYZD`);
            const data = await response.blob();
            const url = URL.createObjectURL(data);
            setProfilePictureUrl(url);
          } catch (error) {
            console.error('Error fetching profile picture from Facebook API', error);
          }
        };
    
        fetchProfilePicture();
      }, [id]);

  return (
    <div className={styles.container}>
    <div className={styles.nav}>
      <List>
        <ListItem>
          <ListItemIcon>
            <li className="my-4 py-2">
              <img
                src={logo}
                className="rounded-circle"
                height="30px"
                width="30px"
                alt="logo"
              />
            </li>
          </ListItemIcon>
        </ListItem>
        <ListItem className={styles.active}>
          <ListItemIcon>
            <li
              className="my-4 py-2"
              style={{
                background: "white",
                backgroundSize: "100%",
                color: "#255190",
                paddingLeft: "8px",
              }}
            >
              <i className="fa fa-inbox fa-lg"></i>
            </li>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <li
              className="my-4 py-2"
              style={{
                backgroundSize: "100%",
                color: "white",
                paddingLeft: "8px",
              }}
            >
              <i className="fa fa-user fa-lg"></i>
            </li>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <li
              className="my-4 py-2"
              style={{
                backgroundSize: "100%",
                color: "white",
                paddingLeft: "8px",
              }}
            >
              <i className="fa fa-line-chart fa-lg"></i>
            </li>
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            {!user && <AccountCircleIcon className={styles.icon} />}
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {user && (
              <img
                src={profilePictureUrl}
                className="rounded-circle"
                height="30px"
                width="30px"
                alt="a"
              />
            )}
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
    <div className={styles.list}>
      <div className={styles.title}>
        <MenuIcon />
        Conversations
        <RefreshIcon />
      </div>
      <div>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={
              selected && item.id === selected.id ? styles.selected : ""
            }
          >
            <Item
              item={item}
              selected={selected && item.id === selected.id}
              onSelect={() => setSelected(item)}
            />
          </div>
        ))}
      </div>
    </div>
    <div className={styles.chatBox}>
      <div className={styles.title}>
        {selected && (
          <>
            {selected.fname} {selected.lname}
          </>
        )}
      </div>
      <div>{selected && <ChatBox item={selected} />}</div>
    </div>
    <div className={styles.infoBox}>
      {selected && <Profile item={selected} />}
    </div>
  </div>
  );
}

export default AgentScreen;
