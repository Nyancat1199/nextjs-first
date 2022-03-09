import { Fragment } from "react/cjs/react.production.min";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp() {
  const router = useRouter();
  const addMeetUpHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    console.log(responseData);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>React Meetups - Add Meetups</title>
        <meta
          name="description"
          content="Tambahkan Tempat untuk Meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
}

export default NewMeetUp;
