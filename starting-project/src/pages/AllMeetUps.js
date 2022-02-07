import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import axios from "axios";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const url = 'https://rsa-cryptography-default-rtdb.firebaseio.com/meetups.json';
    axios.get(url).then((response) => {
      const meetups = [];

      for (const key in response.data) {
        const meetup = {
          id: key,
          ...response.data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    console.log("boom");
    return <section>
      <p>Loading ...</p>
    </section>
  }

  return (<section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
  </section>);
}

export default AllMeetUpsPage;