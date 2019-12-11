import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'



class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(e){
        console.log('ta');
        this.props.changeview(Number(e.currentTarget.id));
    }

    render() {

        return (

            <React.Fragment>

                <div className='container-fluid' style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div className='row' style={{backgroundColor: 'black'}}>
                            <div className='col-sm-3 mb-5 d-flex'>
                                <div className="card mx-auto" style={{width: "18rem"}}>
                                    <img className="card-img-top" src="/images/countdown.png" alt="Card" />
                                        <div className="card-body">
                                            <h5 className="card-title">Countdown Timer</h5>
                                            <p className="card-text">Built with vanilla JS.</p>
                                            <button onClick={this.clickHandler} className="btn btn-primary" id='1'>View CountDownTimer</button>
                                        </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-5 d-flex'>
                                <div className="card mx-auto" style={{width: "18rem"}}>
                                    <img className="card-img-top" src="/images/clock.jpeg" alt="Card" />
                                        <div className="card-body">
                                            <h5 className="card-title">Digital Clock</h5>
                                            <p className="card-text">Built with vanilla JS.</p>
                                            <button onClick={this.clickHandler} className="btn btn-primary" id='2'>View Digital Clock</button>
                                        </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-5 d-flex'>
                                <div className="card mx-auto" style={{width: "18rem"}}>
                                    <img className="card-img-top" src="/images/tictactoe.png" alt="Card" />
                                        <div className="card-body">
                                            <h5 className="card-title">TicTacToe</h5>
                                            <p className="card-text">Built with vanilla JS.</p>
                                            <button onClick={this.clickHandler} className="btn btn-primary" id='3'>View TicTacToe</button>
                                        </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-5 d-flex'>
                                <div className="card mx-auto" style={{width: "18rem"}}>
                                    <img className="card-img-top" src="/images/todolist.jpeg" alt="Card" />
                                        <div className="card-body">
                                            <h5 className="card-title">To Do List</h5>
                                            <p className="card-text">Built with vanilla JS.</p>
                                            <button onClick={this.clickHandler} className="btn btn-primary" id='4'>View To Do List</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </React.Fragment>

                )
            }
        }
        
export default DashboardComponent