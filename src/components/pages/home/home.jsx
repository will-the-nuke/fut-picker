import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SmartImage from '../../multiPageComponents/smartImage.jsx';
import PageHeader from '../../multiPageComponents/pageHeader.jsx';

class Home extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader headerContent="Welcome to FUT Picker!" paragraphContent="We've got fun and games" />

                {/*introduction section*/}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <SmartImage imageURL={' '} imageClasses='mainImage' />
                                </td>
                                <td style={{width: '45%'}}>
                                    <h2 className="alignLeft">
                                        Get your SBC done easily
                                    </h2>
                                    <p className="alignRight">
                                        We offer a free tool which allows you to complete your SBC challenges far, far easier. Just visit our requirements page, input your SBC requirements and have the perfect solution presented to you in no time!
                                    </p>

                                    <Link to='/requirements'>
                                        <h3>
                                            Click here to get started!
                                        </h3>
                                    </Link>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="dividerLine"></div>

                {/*create your account section*/}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h2 className="alignRight">
                                        Create your account
                                    </h2>
                                    <p className="alignLeft">
                                        We recommend creating an account with us in order to get the best experience out of FUT Picker. Its easy, just click the button:
                                    </p>
                                    <Link to='/account'>
                                        <h3>
                                            Join us
                                        </h3>
                                    </Link>
                                </td>
                                <td style={{width: '55%'}}>
                                    <SmartImage imageURL={' '} imageClasses='mainImage' />
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </React.Fragment>
        );
    };
};

export default Home;
