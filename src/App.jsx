import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File from './components/File'

class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        "files": [
        {
          "link": "https://1fichier.com/?xjaz3acey5",
          "status":"END_OK",
          "fileName":"TWDd.714.VOSTFR.7one-Telechargement.Ws.mkv",
          "bytesTotal":100,
          "startDate":"2017-03-20T19:20:20.890Z",
          "bytesReceived":75,
          "endDate":"2017-03-20T19:39:03.959Z"
        }
      ]})
    }, 2000);
    this.state = {
      files: [
        {
          "link": "https://1fichier.com/?xjaz3acey5",
          "status":"END_OK",
          "fileName":"TWDd.714.VOSTFR.720p.WEB-DL.DD5.1.H264-NEWZT-WwW.Zone-Telechargement.Ws.mkv",
          "bytesTotal":100,
          "startDate":"2017-03-20T19:20:20.890Z",
          "bytesReceived":23,"endDate":"2017-03-20T19:39:03.959Z"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
