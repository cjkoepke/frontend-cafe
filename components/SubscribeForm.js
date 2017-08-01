import React, { Component } from 'react';

class SubscribeForm extends Component {
    state = {
        email: '',
        fullName: ''
    }

    updateEmail = (e) => {
        e.preventDefault();
        const email = e.target.value;
        this.setState({email});
    }

    updateName = (e) => {
        e.preventDefault();
        const fullName = e.target.value;
        this.setState({fullName});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const names = this.state.fullName.split(' ');
        const firstName = names[0];
        const lastName = names[1];
        const email = this.state.email;

        console.log( firstName, lastName, email);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Your Full Name</label>
                <input id="name" type="text" onChange={this.updateName} value={this.state.fullName} />

                <label htmlFor="email">Where do ya want your frontend coffee?</label>
                <input id="email" type="email" onChange={this.updateEmail} value={this.state.email} />

                <input type="submit" value="Subscribe!"/>
            </form>
        )
    }
}

export default SubscribeForm;
