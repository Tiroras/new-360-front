import React from 'react';
import { Layout } from 'components/layout/Layout';
import { Profile } from 'components/profile/Profile';
import { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  return(
    <Layout>
      <Profile />
    </Layout>
  )
}

export default ProfilePage;