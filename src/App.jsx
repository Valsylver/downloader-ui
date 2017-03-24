import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File from './components/File'

class App extends Component {
  constructor(props) {
    super(props);
    /*setInterval(() => {
      this.setState({
        "files": [
        {
          "link": "http://yolo.com",
          "status":"END_OK",
          "fileName":"TWDd.714.VOSTFR.7one-Telechargement.Ws.mkv",
          "bytesTotal":100,
          "startDate":"2017-03-20T19:20:20.890Z",
          "bytesReceived":Math.random() * 100,
          "endDate":"2017-03-20T19:39:03.959Z"
        },
        {
          "link": "https://yolo2.com",
          "status":"END_OK",
          "fileName":"TWDd.714.VOSTFR.7one-Telechargement.Ws.mkv",
          "bytesTotal":100,
          "startDate":"2017-03-20T19:20:20.890Z",
          "bytesReceived":Math.random() * 100,
          "endDate":"2017-03-20T19:39:03.959Z"
        }
      ]})
    }, 2000);*/
    this.state = {
      files: [
        {
          "link": "https://yolo.com",
          "status":"END_OK",
          "fileName":"TWDd.714.VOSTFR.720p.WEB-DL.DD5.1.H264-NEWZT-WwW.Zone-Telechargement.Ws.mkv",
          "bytesTotal": 1073741824,
          "startDate":"2017-03-24T09:20:20.890+01:00",
          "bytesReceived":573741824,
          "endDate":"2017-03-20T19:39:03.959Z"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Downloader UI</h2>
        </div>
        <div className="body">
          {this.state.files.map(f =>
            <File
              key={f.link}
              fileName={f.fileName}
              status={f.status}
              startDate={f.startDate}
              bytesReceived={f.bytesReceived}
              bytesTotal={f.bytesTotal}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
