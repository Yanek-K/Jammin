import "./App.css";
import SearchBar from '../SearchBar/SearchBar'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          {/* <!-- Add a SearchResults component -->
          <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
