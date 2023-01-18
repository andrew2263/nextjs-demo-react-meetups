import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import React from 'react';

function HomePage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={ props.meetups } />
    </React.Fragment>
  );
}
/*
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}
*/

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://andrew2263:RLV2azlmeoKKyI06@cluster0.gi6oidi.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  };
}

export default HomePage;
