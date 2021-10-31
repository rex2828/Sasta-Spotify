import React, { Component } from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
import Lyrics from './components/Lyrics';
import Youtube from './components/YoutubeData';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
        });
      })
  }
  render() {
    return (
      <div className="App">
        <div className="loginButton" id="loginButton">
          <a href='http://localhost:8888' className="login" > Login to Spotify </a>
        </div>
        <div className="title">
          <img src="https://dl.hiapphere.com/data/icon/201711/HiAppHere_com_com.mxtech.videoplayer.pro.png" alt="" className="playImage" />
          {this.state.nowPlaying.name}
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="thumbnail" />
        </div>
        <div className="buttongrp">
          {this.state.loggedIn &&
            <button type="button" className="btn btn-primary mr-3" onClick={() => this.getNowPlaying()}>
              Check Now Playing
            </button>
          }

          <Youtube song={this.state.nowPlaying.name}></Youtube>
        </div>
        <Lyrics song={this.state.nowPlaying.name} />
      </div>
    );
  }
}
export default App;