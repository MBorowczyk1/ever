import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db } from "../modules/firebase";


import {Event} from './Event'
import { TopNavi2 } from "./TopNavi";

function EventsSection() {
    const [user, loading, error] = useAuthState(auth);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const fetchEvents = async () => {
      try {
        const query = await db
          .collection("events")
          .get();
        const data = await query.docs.map(doc => doc.data());
        setEvents(data);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      fetchEvents()
    }, [user, loading]);
    return (
        <div className="c-events_container -dt24">
            <TopNavi2 />
            <h2 className="t-title -f20 -wBold">
            Zobacz co będziegrane w tym tygodniu
            </h2>
            {events.map((event, index) => <Event db={event} key={`ev${index}`}/>)}
        </div>
    )
}
export default EventsSection