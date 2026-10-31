import "../css/Header.css";

const Header = ({ currentScore, bestScore }) => {
  return (
    <header className="flex">
      <h1>Uma Memory Game</h1>
      <div className="scores">
        <p>Score: {currentScore}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
