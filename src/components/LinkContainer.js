import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {   /* TODO - Create state object for storing favLinks */
    constructor(props){
        super(props)
        this.state = {favLinks: [{
            linkName: "React",
            URL: "https://reactjs.org/",
        },]};
    }

    removeLink = index => {      //  TODO - Create logic for setting the state to filter array and remove favLink at index
        var favLinks = [...this.state.favLinks];
        favLinks.splice(index, 1);
        this.setState( state => ({ favLinks }));
    }

    handleSubmit = favLink => {
        let favLinks = this.state.favLinks
        favLinks.push(favLink);
        this.setState({
            // favLinks: [favlinks, ...this.state.favLinks]
            favLinks: favLink
        })
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
        console.log("Here in handle submit");
        console.log(this.state.favLinks);
    }

    render() {
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData = {this.state.favLinks} removeLink={this.removeLink}/>  
                
                <br/>

                <h3>Add New</h3>
                <Form handleSubmit= {this.handleSubmit}/> 
            </div>
        );
    }
}

export default LinkContainer;