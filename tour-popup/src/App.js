import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import Player from './components/player'


const imageSrc = "http://localhost:8081/index.html"

class App extends React.Component {

  constructor(){
    super()
    this.state={modalHidden: true}

    this.hideModal = this.hideModal.bind(this)

  }

  hideModal() {
    this.setState(prevState => {
      const newState = !prevState.modalHidden;
      return {
        modalHidden: newState
      };
    });
  }

  render(){
  return (
    
    <div className="App">
      <div className="mainPage">
      </div>

      <div className="modalBG">
      <button className="previewButton" 
        onClick={this.hideModal}
        style={this.state.modalHidden ? {width:"auto"} : {width:"100%", borderRadius:"10px 0 0 0"}}>
          {this.state.modalHidden ? "Show Preview" : "Hide Preview"}
        </button>
        <div className="modalBody" style={this.state.modalHidden ? {display:"none"} : {display:"block"}}>
          <div className="modalTitle">
            <h2 className="pageHeader audioBox">Chelsea Physic Garden</h2>
            
              <Player />
            
          </div>
          <div className="modalBorder"/>
          <div className="iframeBox">
            <Iframe 
              url={imageSrc}
              width="698px"
              height="502px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      </div>
    </div>

  
  );
  }
}

export default App;
