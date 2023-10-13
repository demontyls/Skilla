import React from 'react';

import './Profile.scss'
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const Profile = () => {
  const content = (
    <div className="avatar">

    </div>
  )

  return (
    <div className="profile">
      <CustomDropdown linkContent={content}/>
    </div>
  );
};

export default Profile;