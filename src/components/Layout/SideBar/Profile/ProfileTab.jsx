import React from "react";
import { useSelector } from 'react-redux';
import { selectUser, logOut } from '../../../../slices/userSlice';
import { useDispatch } from "react-redux";
import styles from './ProfileTab.module.css'

const ProfileTab = ({ setHomepage }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut())
    localStorage.clear()
    setHomepage('signin')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Sign in as: <strong>{user.username}</strong></h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default ProfileTab;