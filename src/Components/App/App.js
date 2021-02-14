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
      ],
      playlistName: "Slow Rock",
      playlistTracks: [
          {
            name: "Tunnel Of Love",
            artist: "Dire Straits",
            album: "Brothers In Arms",
            id: 4
          },
          {
            name: "The Boxer",
            artist: "Simon and Garfunkel",
            album: "Bridge over Tr. Water",
            id: 5
          },
          {
            name: "Layla",
            artist: "Eric Clapton",
            album: "Layla",
            id: 6
          }
      ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id)){
        return
      } 
        this.state.playlistTracks.push(track)
        this.setState({playlistTracks: this.state.playlistTracks})
      }

  removeTrack(track){
    let tracks=this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => 
      currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name){
    this.playlistName = name;
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => 
      track.uri
    )
  }

  search(term){
    console.log(term)
}



  render(){
    return (
        <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div>
            <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks} 
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
              />
            </div>
          </div>
        </div>
    );

  }
}

export default App;
