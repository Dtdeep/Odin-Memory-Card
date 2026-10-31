import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import "./css/comeauReset.css";
function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const cardClickHandler = (name) => {
    console.log(name);
  };
  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <main>
        <p>
          Test your memory! Every new image you click earns a point, but if you
          click the same one again, you lose. How high can you score?
        </p>
        <div className="cardsContainer">
          <Card
            name="Dream Journey"
            imageUrl="../public/dream-journey.gif"
            clickEvent={cardClickHandler}
          />
        </div>
      </main>
    </>
  );
}

export default App;
