import './App.css';

function App() {
  return (
  <main>
    <div className="first">
    <h1>BassPractice</h1>
    <p>Press the Button and get a key and some numbers</p>
    <form>
    <button className="go" type="submit">Let's Go!</button>
    </form>
    </div>
    <div className="result">
    
    <div className="key">C#</div>
    <div className="num">1-6-3</div> {/* This is gonna need array destructuring to render */}
    <p className="altCarousel">...Alternatively, here are some songs in the key of C#</p>
    
    <div className="carousel">
      <div className="songDisplay">
        <img src="./everyPraise.png" width="250"alt="album-cover" />
        <p className="title">Every Praise</p>
        <p className="artist">Hezekiah Walker</p>
      </div>
      <div className="Links">
        <p>Spotify</p>
        <p>Apple Music</p>
      </div>
    </div>
    </div>
  </main>
  );
}

export default App;
