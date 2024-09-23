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

        const pages = [
            ['', 'Home'],
            ['about', 'About'],
            ['account', 'Account'],
            ['requirements', 'Requirements'],
        ];
        let headerHTML = [];

        //repeat for each page
        pages.forEach(([backendName, frontendName]) => {

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