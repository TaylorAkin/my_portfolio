import React from 'react';
import CountDownTimer from './CounterDownTimer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'



class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (

            <React.Fragment>

                <div className='container' style={{ marginTop: '25%' }}>
                    <div className='row'>
                            <div className='col-12 mb-3 pl-2'>
                                <div class="card" style={{width: "18rem"}}>
                                    <img class="card-img-top" src="/images/countdown.png" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Countdown Timer</h5>
                                            <p class="card-text">Built with vanilla JS.</p>
                                            <a href="#" class="btn btn-primary">View CountDownTimer</a>
                                        </div>
                                </div>
                            </div>
                            <div className='col-12 pl-2'>
                                <div class="card" style={{width: "18rem"}}>
                                    <img class="card-img-top" src="/images/clock.jpeg" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Digital Clock</h5>
                                            <p class="card-text">Built with vanilla JS.</p>
                                            <a href="#" class="btn btn-primary">View Digital Clock</a>
                                        </div>
                                </div>
                            </div>
                            <div className='col-12 pl-2'>
                                <div class="card" style={{width: "18rem"}}>
                                    <img class="card-img-top" src="/images/tictactoe.png" alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">TicTacToe</h5>
                                            <p class="card-text">Built with vanilla JS.</p>
                                            <a href="#" class="btn btn-primary">View TicTacToe</a>
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