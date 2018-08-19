import React from 'react';
import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';

class TimelineList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timelineNames: props.timelineNames
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.searchTerm !== prevProps.searchTerm || this.props.timelineNames !== prevProps.timelineNames) {
            this.setState({timelineNames : matchSorter(this.props.timelineNames, 
                                                        this.props.searchTerm, 
                                                        {keys: ['name']})});
        }
    }

    render() {
        return(
            <div>
                <ul>
                    {   
                        this.state.timelineNames.map((timeline)=>{
                            return(
                                <li key={timeline.key}>
                                    {timeline.name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

TimelineList.propTypes = {
    timelineNames: PropTypes.arrayOf(PropTypes.object),
    searchTerm: PropTypes.string
}

export default TimelineList;