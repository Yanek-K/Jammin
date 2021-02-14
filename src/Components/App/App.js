import React from 'react'
import "./App.css";
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      searchResults: [
          {
            name: "Brothers In Arms",
            artist: "Mark Knopfler",
            album: "Brothers In Arms",
            id: 1
          },
          {
            name: "Father and Son",
            artist: "Cat Stevens",
            album: "Tea for the Tillerman",
            id: 2
          },
          {
            name: "Sultans of Swing",
            artist: "Dire Straits",
            album: "Alchemy Live",
            id: 3
          }
          
      ]
    }
  }
  render(){
    return (
        <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div>
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist />
            </div>
          </div>
        </div>
    );

  }
}

export default App;
