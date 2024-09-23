import React, {Component} from 'react';
import PageHeader from '../../multiPageComponents/pageHeader.jsx';
import SmartImage from '../../multiPageComponents/smartImage.jsx';

class Requirements extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <React.Fragment>
                <PageHeader headerContent="Requirements" paragraphContent="Specify your challenge" />

                {/*description of the form section*/}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td style={{width: '45%'}}>
                                    <SmartImage imageURL=" " imageClasses="mainImage" />
                                </td>
                                <td>
                                    <h2 className="alignLeft">
                                        Our requirements form
                                    </h2>
                                    <p className="alignRight">
                                        Below is our requirements form. You can specify the limitations of your SBC challenge and out website will recommend you which players to play.
                                    </p>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="dividerLine"></div>

                {/*actual requirements form*/}
                <div>
                    <h2>
                        Enter your requirements:
                    </h2>
                    <form>

                        {/*GET TREMAINE TO MAKE REQUIREMENTS FORM*/}
                    </form>
                </div>
            </React.Fragment>
        );
    };
};

export default Requirements;
