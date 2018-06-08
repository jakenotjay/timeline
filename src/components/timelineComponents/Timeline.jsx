import React, { Component } from 'react';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {events: props.timeline.events}
  }

  render() {
    return(
      <p>{this.state.events}</p>
    )
  }
}

export default Timeline;
