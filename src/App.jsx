import React from 'react';
import TextField from '@material-ui/core/TextField';
import TimelineList from './components/TimelineList.jsx';
import AddButton from './components/AddButton.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timelineNames: [
                {
                  name: "timeline1",
                  key: 0
                },
                {
                  name: "timeline2",
                  key: 1
                }
              ],
              searchTerm : ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            timelineNames: [...prevState.timelineNames, { 
                name: "blahblah",
                key:prevState.timelineNames.length
            }]
        }));
    }

    handleSearch(textField) {
        this.setState({ searchTerm: textField.target.value });
    }

    render(){
        return(
            <div>
                <TextField
                    id="searchBar"
                    label="Search Projects"
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    margin="normal"
                />
                <TimelineList timelineNames={this.state.timelineNames} searchTerm={this.state.searchTerm} />
                <AddButton handleClick={this.handleClick} />
            </div>
        );
    }
}

export default App;