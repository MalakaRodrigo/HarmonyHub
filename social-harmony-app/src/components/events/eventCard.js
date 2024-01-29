import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div>
      <img
        src={event.imageUrl}
        alt={event.title}
        style={{ width: '80px', height: '80px' }} // Set the width and height here
      />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default EventCard;
