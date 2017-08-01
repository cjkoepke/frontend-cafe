import GlobalStyles from '../components/GlobalStyles';
import HeadMeta from '../components/HeadMeta';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default (props) => (
    <div>
        <GlobalStyles />
        <HeadMeta />
        <div className="wrap">
            <Header />
            <p>Archives!</p>
        </div>
    </div>
)
