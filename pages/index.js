import React, {Component} from 'react';
import SubscribeForm from '../components/SubscribeForm';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Wrap from '../components/Wrap';

const GridWrap = Wrap.extend`
    display: flex;
    justify-content: space-between;
    padding-top: 48px
`

export default class extends Component {
    render() {
        return (
            <GridWrap>
                <img src="/static/logo.svg" alt="Frontend Cafe"/>
                <Card style={{width: '50%'}}>
                    <h1>Frontend Cafe</h1>
                    <h2>The place for frontend engineers.</h2>
                    <p>Join an active community for frontend engineers, and receive a once-weekly digest of the <strong>latest in frontend technology</strong>.</p>
                    <SubscribeForm page={this.props.currentPage} />
                </Card>
            </GridWrap>
        )
    }
}
