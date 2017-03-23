import React, { Component } from 'react';
import './File.css';

class File extends Component {

  render() {
    //File {this.props.fileName} {this.props.bytesReceived}/{this.props.bytesTotal}
    const percentage = (this.props.bytesReceived / this.props.bytesTotal) * 100;
    return (
      <div className="file-container">
        <div className="file-name">{this.props.fileName}</div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{width : `${percentage}%`}}></div>
        </div>
      </div>
    );
  }
}

export default File;
