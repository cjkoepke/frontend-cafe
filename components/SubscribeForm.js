import React, { Component } from 'react';
import * as colors from '../utils/colors';
import styled from 'styled-components';

const Button = styled.button`
    background: ${colors.base.dark};
    border: none;
    border-radius: 8px;
    color: ${colors.base.light};
    padding: 16px 24px;
`

const LabelWrap = styled.div`
    label {
        display: block;
    }
`

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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <LabelWrap>
                    <label htmlFor="name">Your Full Name</label>
                    <input id="name" type="text" onChange={this.updateName} value={this.state.fullName} />
                </LabelWrap>

                <LabelWrap>
                    <label htmlFor="email">Where do ya want your frontend coffee?</label>
                    <input id="email" type="email" onChange={this.updateEmail} value={this.state.email} />
                </LabelWrap>

                <Button>Subscribe!</Button>
            </form>
        )
    }
}

export default SubscribeForm;
