import React from 'react';
import mp3 from '../audio/chelseaphysic.mp3'



const Player = () => (
  <audio className="audioPlayer" src={mp3} controls />
);

export default Player