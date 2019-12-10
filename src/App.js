import React from 'react';
import './App.css';
import DashboardComponent from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Header'
import CountDownTimer from './CounterDownTimer';
import DigitalClock from './DigitalClock';
import TicTac from './TicTac';
import FooterComponent from './Footer';
import ToDoList from './ToDoList'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      view: 0
    }
    this.setViewState = this.setViewState.bind(this)
  }

  setViewState(view) {
    this.setState({ view: view })

}

  render(){

    return (
    <React.Fragment>
  
        <HeaderComponent/>
      
      {this.state.view === 0 ? <DashboardComponent changeview={this.setViewState}/> : null}
      {this.state.view === 1 ? <CountDownTimer/> : null}
      {this.state.view === 2 ? <DigitalClock/> : null}
      {this.state.view === 3 ? <TicTac/> : null}
      {this.state.view === 4 ? <ToDoList/> : null}

      <FooterComponent changeview={this.setViewState}/>

  
    </React.Fragment>
  
    );

  }
}

export default App;
