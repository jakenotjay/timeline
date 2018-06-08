import React, { Component } from 'react';
import Timeline from './components/timelineComponents/Timeline.jsx'
import timelineTest from './test/timeline.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Timeline timeline = {timelineTest} />
      </div>
    );
  }
}

export default App;
