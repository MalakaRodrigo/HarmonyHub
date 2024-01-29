import React from "react";
import EventCard from "./eventCard";

const socialHarmonyEvents = [
  {
    id: 1,
    organization: "Community Unity Foundation",
    title: "Virtual Diversity Workshop",
    date: "2023-11-15",
    description:
      "Join us for an interactive virtual workshop on building diversity and inclusion in our community.",
    imageUrl: "https://everydayspeech.com/wp-content/uploads/2021/01/diversity_EverydaySpeech-1536x1536.png",
    link: "https://example.com/event1-details",
  },
  {
    id: 2,
    organization: "Harmony Society",
    title: "Online Peace Talk",
    date: "2023-11-20",
    description:
      "Participate in a live online discussion on the importance of peace and harmony in our society.",
    imageUrl: "https://thumbs.dreamstime.com/b/people-reunited-harmony-illustration-concept-partnership-business-activity-related-to-social-gathering-81471929.jpg",
    link: "https://example.com/event2-details",
  },
  {
    id: 3,
    organization: "Cultural Exchange Network",
    title: "Cultural Festival",
    date: "2023-11-25",
    description:
      "Experience a rich cultural festival showcasing diverse traditions, music, and food.",
    imageUrl: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1835496593327535",
    link: "https://example.com/event3-details",
  },
  {
    id: 4,
    organization: "Youth for Peace",
    title: "Youth Leadership Summit",
    date: "2023-12-01",
    description:
      "Empower the youth to lead positive change and promote peace in our communities.",
    imageUrl: "https://example.com/event4-image.jpg",
    link: "https://example.com/event4-details",
  },
  {
    id: 5,
    organization: "Environmental Harmony Group",
    title: "Nature Conservation Conference",
    date: "2023-12-10",
    description:
      "Discuss the importance of environmental conservation and sustainable harmony.",
    imageUrl: "https://example.com/event5-image.jpg",
    link: "https://example.com/event5-details",
  },
  // You now have a total of 5 events.
];

const EventList = ({ sideBarStatus }) => {

  return (
    <div className={`event-list-widget${sideBarStatus ? "-padded" : ""}`}>
      {socialHarmonyEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
