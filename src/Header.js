import React from 'react';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        {/*Title for the header*/}
        return (

            <React.Fragment>

                <div className="container bg-dark fixed-top pt-1">
                    <div className="row">
                       
                        <div className="col-12">
                            <h1 className='ml-5 text-white' style={{fontFamily:'Poiret One, cursive'}}>My Portfolio</h1>
                        </div>
            
                    </div>
                </div>

            </React.Fragment>


        );
    }
}

export default HeaderComponent;



