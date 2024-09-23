import React, {Component} from 'react';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

class SmartImage extends Component {

    constructor(props) {
        super(props);

        //setup props inherited from parent
        this.state = {
            imageClasses: this.props.imageClasses,
            imageStyles: this.props.imageStyles,
            imageId: this.props.imageId,
            imagePath: this.props.imagePath || null,
            imageURL: this.props.imageURL || null,
        };
    };

    render() {
        return (
            <React.Fragment>
                <img src={this.getSrc()} className={this.state.imageClasses || null} style={this.state.imageStyles || {}} id={this.state.imageId || null} alt='IMAGE' />
            </React.Fragment>
        )
    };

    getSrc() {

        //this is required because we do not know if a image path or an image url was provided
        if (this.state.imageURL) {

            //if there was a url, return it
            return this.state.imageURL;
        }
        else if (this.state.imagePath) {

            //else if there was an image path provided, get the image url from firebase
            const storage = getStorage();
            getDownloadURL(ref(storage, this.state.imagePath)).then((url) => {

                //return the acquired image url
                return url;
            });
        }
        else {

            //if neither an image path or an image url was provided, throw an error
            throw new Error('No image path or image url was provided');
        };
    };
};

export default SmartImage;