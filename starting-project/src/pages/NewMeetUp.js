import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewMeetUpPage() {
    const history = useHistory();

    async function addMeetupHandler(meetupData){
        const url = 'https://rsa-cryptography-default-rtdb.firebaseio.com/meetups.json';
        await axios.post(url, meetupData).then(response => history.replace('/'));
    }
    
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetUpPage;