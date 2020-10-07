import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = 
            {
            favLinks:[]
            }
        }

    removeLink = index => {
        var copy = this.state.favLinks;
        var ind = copy.indexOf(index);
        copy.splice(ind, 1);
        this.setState({favLinks: copy})
    }

    handleSubmit = favLink => {
        console.log(favLink)
        let favLinks = this.state.favLinks
        favLinks.push(favLink);
        this.setState({
            favLinks: favLinks
        })
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