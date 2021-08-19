import React from 'react';
import { Link } from 'react-router-dom'
import styles from './ProfileCard.module.css'


const ProfileCard = ({profile}) => {
  return (
    <>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h4>{profile?.firstName} {profile?.lastName && profile.lastName[0] + '.'}</h4>
      </Link>
    </>
  )
}

export default ProfileCard