import React from 'react';



class DigitalClock extends React.Component {

  constructor(props){

    super(props);
    this.state = {date: new Date()};
    
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }


  componentWillUnmount(){

    clearInterval(this.timerID);

  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){

    return(
      <React.Fragment>
      <div className='container' style={{marginTop:'20%'}}>
        <div className='row'>

          <h1>Hello,World</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

        </div>
      </div>

      </React.Fragment>
    )
  }


}




export default DigitalClock;