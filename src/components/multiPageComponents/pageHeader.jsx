import React, {Component} from 'react';

class PageHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="alignLeft noVerticalSpacing" style={{marginLeft: '5%'}}>
                    {this.props.headerContent}
                </h1>
                <p className="alignLeft" style={{marginLeft: '10%', marginTop: 0, paddingTop: 0}}>
                    {this.props.paragraphContent}
                </p>

                <div className="dividerLine"></div>
            </React.Fragment>
        );
    };
};

export default PageHeader;