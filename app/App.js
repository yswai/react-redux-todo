import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'YSW'
    }
  }

  render () {
    return (
      <div className="row">
        Test <strong>{this.state.name}</strong>
        </div>
      )
  }

}
