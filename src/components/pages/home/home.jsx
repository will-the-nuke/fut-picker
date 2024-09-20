import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="alignLeft noVerticalSpacing" style={{marginLeft: '5%'}}>
                    Welcome to FUT Picker!
                </h1>
                <p className="alignLeft" style={{marginLeft: '10%', marginTop: 0, paddingTop: 0}}>
                    We've got fun and games
                </p>

                <div className="dividerLine"></div>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <img src='' className="mainImage" alt="IMAGE"/>
                            </td>
                            <td style={{width: '60%'}}>
                                <h2 className="alignLeft">
                                    This is a section title
                                </h2>
                                <p className="alignRight">
                                    Roll up, roll up. Section content is right here. You can read it if you really want to but its a waste of time frankly.
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </React.Fragment>
        );
    };
};

export default Home;
