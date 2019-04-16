import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Poster from './Components/Poster';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      showData: null,
      episodesData: null,
    };
  }

  async componentDidMount() {
    const localShowData = window.localStorage.getItem('show-data');
    const localEpisodesData = window.localStorage.getItem('episodes-data')
    let showData = localShowData && JSON.parse(localShowData);
    let episodesData = localEpisodesData && JSON.parse(localEpisodesData);

    if (!showData) {
      showData = await this.getShowData();
      window.localStorage.setItem('show-data', JSON.stringify(showData))
    }
    if (!episodesData) {
      episodesData = await this.getEpisodesData();
      window.localStorage.setItem('episodes-data', JSON.stringify(episodesData))
    }
    this.setState({
      showData: showData.data.posts[0],
      episodesData: episodesData.data.posts,
    })
  }


  async getShowData () {
    const showData = await fetch('https://sundance-api-br.svc.ds.amcn.com/v1/public/feed/getShow?show=unspeakable&device=web&publish_state=public')
    const parsedShowData = await showData.json();
    return parsedShowData;
  }
  async getEpisodesData () {
    const episodesData = await fetch('https://sundance-api-br.svc.ds.amcn.com/v1/public/feed/getEpisodes?season=season-1&show=unspeakable&device=web&publish_state=public')
    const parsedEpisodesData = await episodesData.json();
    return parsedEpisodesData;
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <Navigation />
        {this.state.showData &&
          <Poster
          images={this.state.showData.images}
          meta={this.state.showData.meta}/>
        }
        {this.state.episodesData &&
          <Main episodesData={this.state.episodesData}/>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
