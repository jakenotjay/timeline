import React from 'react';

const Timeline = (props) => {
  return(
    <div>
      { 
        props.timeline.events.map((event) => {
        return ( <p key={ event.name.toString() }>{event.name}</p> );
        })
      }
    </div>
   );
}

export default Timeline;