import './App.css';

function App() {
  return (
  <main>
    <h1>BassPractice</h1>
    <p>Press the Button and get a key and some numbers</p>
    <form>
    <button type="submit">Let's Go!</button>
    </form>
    <h2>C#</h2>
    <h3>1 - 6 - 3</h3> {/* This is gonna need array destructuring to render */}
    <p>...Alternatively, here are some songs in the key of C#</p>
    <div className="carousel">
      <div className="songDisplay">
        <img src="" alt="album-cover" />
        <p>Every Praise</p>
        <p>Hezekiah Walker</p>
      </div>
      <div className="Links">
        <p>Spotify</p>
        <p>Apple Music</p>
      </div>
    </div>
  </main>
  );
}

export default App;
