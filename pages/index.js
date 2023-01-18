import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG',
    address: 'Some address 5, 12345, Vienna',
    description: 'This is a first meeetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG',
    address: 'Some address 10, 12345, Salzburg',
    description: 'This is a second meeetup'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG',
    address: 'Some address 15, 12345, Innsbruck',
    description: 'This is a third meeetup'
  }
];

function HomePage(props) {
  return (
    <MeetupList meetups={ props.meetups } />
  );
}

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

/*
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}
*/
export default HomePage;
