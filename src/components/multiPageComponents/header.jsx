import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../headerStyles.scss';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerHTML : null,
        };
    };

    componentDidMount() {

        //NEED TO MAKE THIS REFRESH ON PAGE CHANGE
        
        //get the current page the user is on
        let currentPage = window.location.href;

        //cuts current page to be only the text after the last / of the url (the useful bit)
        currentPage = currentPage.substring(currentPage.lastIndexOf('/') + 1);

        const pages = [
            ['', 'Home'],
            ['about', 'About'],
            ['account', 'Account'],
            ['requirements', 'Requirements'],
        ];
        let headerHTML = [];

        //repeat for each page
        pages.forEach(([backendName, frontendName]) => {

            //make the that we do not add the user's current page to the header
            if (backendName != currentPage) {

                //generate HTML for this header cell
                headerHTML.push(
                    <td className="headerCell">
                        <div className="innerHeaderCell">
                            <Link to={'/' + backendName} style={{height: '100%'}}>
                                <h3 className="headerCellText">
                                    {frontendName}
                                </h3>
                            </Link>
                        </div>
                    </td>
                );
            };
        });

        //save header HTML to state
        this.setState({
            headerHTML: headerHTML,
        });
    };

    render() {
        return (
            <React.Fragment>
                <table id="headerTable">
                    <thead>
                        <tr>
                            {this.state.headerHTML}
                        </tr>
                    </thead>
                </table>
            </React.Fragment>
        )
    }
};

export default Header;