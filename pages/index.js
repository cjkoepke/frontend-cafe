import React, {Component} from 'react';
import GlobalStyles from '../components/GlobalStyles';
import HeadMeta from '../components/HeadMeta';
import Header from '../components/Header';
import SubscribeForm from '../components/SubscribeForm';

export default class extends Component {
    static async getInitialProps({asPath}) {
        return asPath ? { currentPage: asPath} : {currentPage: 'not sure'};
    }
    render() {
        return (
            <div>
                <GlobalStyles />
                <HeadMeta />
                <div className="wrap">
                    <Header />
                    <div className="section-head">
                        <h2>Frontend.Cafe</h2>
                        <p>Join an active community for frontend engineers, developers, and hobbiests.</p>
                        <SubscribeForm page={this.props.currentPage} />
                    </div>
                </div>
            </div>
        )
    }
}
