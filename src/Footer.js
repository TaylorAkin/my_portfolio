import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faWifi, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons'


class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {

        this.props.changeview(Number(e.currentTarget.id));
    }


    render() {

        return (
            <React.Fragment>
            {/*Icons and Buttons for footer, sends up id through props to change pagestate to parent*/}
                <div className="container-fluid bg-dark fixed-bottom py-2">
                    <div className="row pb-1">
                      
                        <div className="col-12 mt-2">
                            <button onClick={this.clickHandler} id='0' className="btn btn-dark btn-block">
                                Back To Dashboard
                            </button>
                        </div>

                    </div>
                </div>

            </React.Fragment>

        );
    }
}

export default FooterComponent;

