import React, { Component } from 'react';
import { render } from 'react-dom';

import './scss/index.scss';

const rootNode = document.querySelector('#root');

class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <Folders />
        <Playlist />
      </div>
    )
  }
};

class Name extends Component {
  render() {
    return <h2>Playlist</h2>;
  }
}

class Folders extends Component {
  
  render() {
    return (
      <div>
        <button onClick={this.changeFaviurite}>All</button>
        <button onClick={this.changeAll}>Favourite</button>
      </div>
    )
  }
}

class Playlist extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
      isFavourite: false
    };
  }

  playStop(index) {
    let audioTag = document.getElementsByTagName('audio')[index];
    let element = document.getElementsByClassName('play-pause')[index - 1];
    if (audioTag.paused) {
      audioTag.play();
      element.innerHTML = 'pause';
    } else {
      audioTag.pause();
      element.innerHTML = 'play_arrow';
    }
  }

  addFavourite(index, item) {
    let element = document.getElementsByClassName('favourite')[index - 1];
    element.classList.toggle('red');
    if (element.classList.contains('red')) {
      item.liked = true;
    } else {
      item.liked = false;
    }
  }

  changeAll() {
    this.setState({
      isFavourite: false
    })
  }
  changeFaviurite() {
    this.setState({
      isFavourite: true
    })
  }
  
  render() {
    if (this.state.isFavourite) {
      let favouriteList = this.state.music.filter(function (item) {
        return item.liked;
      });
      const items = favouriteList.map(item => <div key={item.id}><audio src={item.mp3}></audio>
        <div className='player'>
          <i onClick={() => this.playStop(item.id)} className="material-icons play-pause">play_arrow</i>
          <div className='info'>
            <div className='name'>{item.title}</div>
            <div className='singer'>{item.author}</div>
          </div>
          <i onClick={() => this.addFavourite(item.id, item)} className="material-icons favourite">favorite</i>
        </div>
      </div>);
      return <div>{items}</div>;
    } else {
      const items = this.state.music.map(item => <div key={item.id}><audio src={item.mp3}></audio>
        <div className='player'>
          <i onClick={() => this.playStop(item.id)} className="material-icons play-pause">play_arrow</i>
          <div className='info'>
            <div className='name'>{item.title}</div>
            <div className='singer'>{item.author}</div>
          </div>
          <i onClick={() => this.addFavourite(item.id, item)} className="material-icons favourite">favorite</i>
        </div>
      </div>);
      return <div>{items}</div>;
    }

  }

  componentDidMount() {

    const request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        this.setState({
          music: JSON.parse(request.response)
        });
      } else {
        console.warn('error');
      }
    };

    request.open('GET', 'https://fl-homework-api.firebaseio.com/mozart.json');
    request.send();

  }

}

render(
  <App />,
  rootNode,
);
