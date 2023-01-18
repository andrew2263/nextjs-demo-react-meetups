import { useRouter } from 'next/router';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG'
      title='First Meetup'
      address='Some Street, 5, Vienna'
      description='This is a first meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        } 
      },
      {
        params: {
          meetupId: 'm2'
        } 
      },
      {
        params: {
          meetupId: 'm3'
        } 
      }
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street, 5, Vienna',
        description: 'This is a first meetup'
      }
    }
  }
}

export default MeetupDetails;
