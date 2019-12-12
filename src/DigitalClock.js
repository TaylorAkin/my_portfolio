import React from 'react';
import './DigitalClock.scss';



class DigitalClock extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      time: new Date(),
      h: new Date().getHours,
      m: new Date().getMinutes,

    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }


  componentWillUnmount() {

    clearInterval(this.timerID);

  }

  tick() {

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    if(hours > 12){
      hours -= 12
    }

    if(minutes < 10){
      minutes = "0" + minutes
    }

    this.setState({
      time: today,
      h: hours,
      m: minutes
    });
  }

  render() {

    return (
      <React.Fragment>


        <div className='container' style={{ marginTop: '10px' }}>
          <div class="rim"></div>
          <div class="outer"></div>
          <div class="inner"></div>
          <div id="clock">{this.state.h} : {this.state.m}</div>
        </div>

        {/* <h2>{this.state.time.toLocaleTimeString()}.</h2> */}



      </React.Fragment>
    )
  }


}




export default DigitalClock;