import React from "react";
import { useSelector } from 'react-redux';
import { selectUser, logOut } from '../../../../slices/userSlice';
import { useDispatch } from "react-redux";

const ProfileTab = ({ setHomepage }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut())
    localStorage.clear()
    setHomepage('signin')
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default ProfileTab;