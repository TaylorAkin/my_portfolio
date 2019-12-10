import React from 'react';



class CountDownTimer extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      time: new Date().getTime(),
      birthday: new Date('April 23, 2020 23:45:00').getTime(),
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
     
    }


  }

  updateRemainingTime() {
    var difference = this.state.birthday -  new Date().getTime();

    //finding total amount for each unit of time
    var totalmilliseconds = difference;
    var totalseconds = Math.floor(totalmilliseconds / 1000);
    var totalminutes = Math.floor(totalseconds / 60);
    var totalhours = Math.floor(totalminutes / 60);
    var totaldays = Math.floor(totalhours / 24);

//findind the remainder left for each unit of time
    // var rmillisec = totalmilliseconds % 1000;
    var rseconds = this.correctNumbers(totalseconds % 60);
    var rminutes = this.correctNumbers(totalminutes % 60);
    var rhours = this.correctNumbers(totalhours % 24);
  
    

    this.setState({
      time: new Date().getTime() - this.state.birthday ,
      days: totaldays,
      hours: rhours,
      minutes: rminutes,
      seconds: rseconds


    }
    );
  }

  correctNumbers(n){
    // get the number, see if it is less than 10
    // if so return "0" + n
    if(n < 10){
        return "0" + n;
    } else {
        return n;
    }
  }



  componentDidMount() {
    setInterval(()=>this.updateRemainingTime(), 1000)
  }


  componentWillUnmount() {

    clearInterval(this.updateRemainingTime);

  }


  render() {

    return (
      <React.Fragment>
        
        <div className='container flex'>
          <div className='row mx-auto'>

          <h1 className=''>CountDownTimer</h1>
          <h2></h2>
          <h2>{this.state.days}days</h2>
          <h2>{this.state.minutes}minutes</h2>
          <h2>{this.state.seconds}seconds</h2>
          <h2>Until my birthday</h2>

          </div>

        </div>


      </React.Fragment>
    )
  }


}




export default CountDownTimer;