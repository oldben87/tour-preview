import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import Player from './components/player'


const imageSrc = "http://localhost:8081/index.html"

//../public/ChelseaPhysicTake2.mp3

class App extends React.Component {

  constructor(){
    super()
    this.state={modalHidden: false}

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
        <h1 className="pageHeader" >Audio Tour Previews</h1>
        <button className="previewButton" onClick={this.hideModal}>{this.state.modalHidden ? "Show Preview" : "Hide Preview"}</button>
      </div>

      <div className="modalBG" style={this.state.modalHidden ? {display:"none"} : {display:"block"}}>
        <div className="modalBody">
          <div className="modalTitle">
          <h2 className="pageHeader audioBox">Chelsea Physic Garden</h2>
            <div className="audioBox">
              <Player />
            </div>
          </div>
          <div className="iframeBox">
            <Iframe 
              url={imageSrc}
              width="690px"
              height="500px"
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
