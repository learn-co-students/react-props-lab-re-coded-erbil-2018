// Code The Spaceship Component Here

import React from "react";

class Spaceship extends React.Component{
  
  const name = this.props;
  const speed = this.props;
  const hasRockets = this.props;
  const colors = this.props;
  
  reder(){
    return(
      <div>
      <h1>{this.props.speed}</h1>
      <h2>{this.props.hasRockets}</h2>
      <h3>{this.props.colors.[0]} </h3>
      <h3>{this.props.colors.[0]} </h3>
      </div>
      )
  }
  
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}


export default Spaceship;