import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

   import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('root')
);
