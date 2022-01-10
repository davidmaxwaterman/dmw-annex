import './DmwAnnexHomePage.css';

function DmwAnnexHomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/game?players=1">1 Player Game</a>
          </li>
          <li>
            <a href="/game?players=2">2 Player Game</a>
          </li>
          <li>
            <a href="/howtoplay">How to Play</a>
          </li>
          <li>
            <a href="/exit">Exit</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DmwAnnexHomePage;

