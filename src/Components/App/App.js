import React from 'react'
import "./App.css";
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: []
    };

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
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
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
