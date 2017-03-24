import React, { Component } from 'react';
import moment from 'moment';
import './File.css';

class File extends Component {

  readableBytes(bytesCount) {
    const kiloBytes = bytesCount / 1024;
    const megaBytes = kiloBytes / 1024;
    const gigaBytes = megaBytes / 1024;
    if (gigaBytes >= 1) {
      return `${gigaBytes.toFixed(2)} Go`;
    } else {
      return `${megaBytes.toFixed(2)} Mo`;
    }
  }

  rate(startDate, bytesCount) {
    const elapsedSeconds = moment().diff(moment(this.props.startDate), 'seconds');
    const kiloBytesPerSecond = bytesCount / 1024 / elapsedSeconds;
    const megaBytesPerSecond = bytesCount / (1024 * 1024) / elapsedSeconds;
    if (megaBytesPerSecond > 1) {
      return `${megaBytesPerSecond.toFixed(2)} Mo/s`
    }
    return `${kiloBytesPerSecond.toFixed(2)} Ko/s`
  }

  render() {
    const percentage = (this.props.bytesReceived / this.props.bytesTotal) * 100;
    console.log(this.rate(this.props.startDate, this.props.bytesReceived));
    return (
      <div className="file-container">
        <div className="file-name text" title={this.props.fileName}>{this.props.fileName}</div>
        <div className="start-date text">{moment(this.props.startDate).format('DD/MM/YYYY HH:mm:ss')}</div>
        <div className="file-size text">{this.readableBytes(this.props.bytesReceived)}</div>
        <div className="file-size text">{this.readableBytes(this.props.bytesTotal)}</div>
        <div className="download-rate text">{this.rate(this.props.startDate, this.props.bytesTotal)}</div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{width : `${percentage}%`}}></div>
        </div>
      </div>
    );
  }
}

export default File;
