import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            URL: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    onFormSubmit = (event) => {   
        event.preventDefault();     // to prevent page reload on form submit
        const submission = 
        {
            name : this.state.name,
            URL: this.state.URL
        };
        this.props.handleSubmit(submission);
    }

    render() {

        return(
            <form>      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <p> Name </p>
                <input
                name="name"
                type="text"
                placeholder="Add a name"
                onChange={this.handleChange}
                />
                <p> URL </p>
                <input
                name="URL"
                type="url"
                placeholder="Add a URL"
                onChange={this.handleChange}
                />

                <button onClick={this.onFormSubmit}> Submit </button>
            </form>
        )
    }
}

export default Form;
