import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddButton(props){
    return(
        <div>
            <Button variant="fab" color="primary" aria-label="Add" onClick={props.handleClick}>
                <AddIcon />
            </Button>
        </div>
    );
}

AddButton.propTypes = {
    handleClick: PropTypes.func,
}

export default AddButton;