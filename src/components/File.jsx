import React, { Component } from 'react';
import moment from 'moment';
import './File.css';

class File extends Component {

  render() {
    const percentage = (this.props.bytesReceived / this.props.bytesTotal) * 100;
    return (
      <div className="file-container">
        <div className="file-name text" title={this.props.fileName}>{this.props.fileName}</div>
        <div className="start-date text">{moment(this.props.startDate).format('DD/MM/YYYY HH:mm:ss')}</div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{width : `${percentage}%`}}></div>
        </div>
      </div>
    );
  }
}

export default File;
