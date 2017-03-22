import React, { Component } from 'react';
import './File.css';

class File extends Component {

  render() {
    //File {this.props.fileName} {this.props.bytesReceived}/{this.props.bytesTotal}
    const percentage = (this.props.bytesReceived / this.props.bytesTotal) * 100;
    return (
      <div className="file-container">
        <div className="progress-bar" style={{width : `${percentage}%`}}></div>
      </div>
    );
  }
}

export default File;
