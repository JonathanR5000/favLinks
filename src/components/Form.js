import React, {Component} from 'react';

class Form extends Component { // TODO - set initial state for link name and URL 
    constructor(props) {
        super(props);
        this.setState = {
            linkName: '',
            URL: '',
        };
    }

    handleChange = event => {       // TODO - Logic for changing state based on form changes
        this.setState({
            linkName: event.target.value,
            URL: event.target.value
        });
    };

    onFormSubmit = (event) => {     // TODO - Logic for calling props to handle submission and setting state changes    
        event.preventDefault();     // to prevent page reload on form submit
        this.props.onSubmit({
            name: this.state.name,
            URL: this.state.URL
        });
        this.setState({
            name : URL
        });
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <p> Name </p>
                <input
                type="text"
                // value={this.state.linkName}
                onChange={this.handleChange}
                />
                <p> URL </p>
                <input
                type="text"
                // value={this.state.URL}
                onChange={this.handleChange}
                />

                <button onClick={this.onFormSubmit}> Submit </button>
            </form>
        )
    }
}

export default Form;
