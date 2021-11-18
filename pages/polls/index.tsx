import { NextPage } from 'next';
import React from 'react';
import { Layout } from 'components/layout/Layout';
import { Polls } from 'components/polls/Polls';

const PollsPage: NextPage = () => {
  return(
    <Layout>
      <Polls />
    </Layout>
  )
}

export default PollsPage;