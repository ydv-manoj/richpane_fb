import { Avatar, Button } from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';

import styles from "./profile.module.scss";

export const Profile = ({ item: { id, fname, lname, profile, email } }) => {
  return (
    <>
      <div className={styles.profile}>
        <Avatar alt='Remy Sharp' src={profile} />
        <div className={styles.title}>
          {fname} {lname}
        </div>
        <div className={styles.status}>&#8226; offline</div>
        <div className={styles.actions}>
          <Button size='small' variant='outlined'>
            <PhoneIcon fontSize='small' /> Call
          </Button>
          <Button size='small' variant='outlined'>
            <AccountCircleIcon fontSize='small' /> Profile
          </Button>
        </div>
      </div>
      <div className={styles.details}>
        <h6>Customer details</h6>
        <div className={styles.row}>
          <div className={styles.heading}>Email</div>{" "}
          <div className={styles.value}>{email}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading}>First Name</div>{" "}
          <div className={styles.value}>{fname}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading}>Last Name</div>{" "}
          <div className={styles.value}>{lname}</div>
        </div>
        <div className={styles.row}>
         {/* eslint-disable-next-line */}
          <a href='#' className={styles.link}>
            View more details
          </a>
        </div>
      </div>
    </>
  );
};
