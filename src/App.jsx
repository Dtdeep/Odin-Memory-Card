import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import getTwelveUmas from "./umaNames.js";
import Spinner from "./components/Spinner.jsx";
import Notification from "./components/Notification.jsx";
import { useEffect, useState } from "react";
import "./css/App.css";
import "./css/comeauReset.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [selectedUmaScore, setSelectedUmaScore] = useState({
    currentScore: 0,
    selectedUmas: [],
  });
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState("");
  const [twelveUmas, setTwelveUmas] = useState([]);

  useEffect(() => {
    getTwelveUmas()
      .then((result) => {
        setTwelveUmas(result);
      })
      .catch((error) => {
        console.log(error, "Please Referesh");
      });
  }, []);

  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const cardClickHandler = (name) => {
    const shuffled = shuffle([...twelveUmas]);
    setHasLost("");
    setHasWon(false);
    setTwelveUmas([...shuffled]);
    if (!selectedUmaScore.selectedUmas.includes(name)) {
      const newScore = selectedUmaScore.currentScore + 1;
      setSelectedUmaScore({
        currentScore: newScore,
        selectedUmas: [...selectedUmaScore.selectedUmas, name],
      });

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      if (newScore >= twelveUmas.length) {
        setHasWon(true);
        setTimeout();
      }
    } else {
      setSelectedUmaScore({
        currentScore: 0,
        selectedUmas: [],
      });
      setHasLost(`You clicked ${name} twice! You Lost.`);
    }
  };

  return (
    <>
      {hasWon && (
        <Notification message="Congratulations! You earned 12 points, you won!" />
      )}
      {hasLost && <Notification message={hasLost} />}
      <Header
        currentScore={selectedUmaScore.currentScore}
        bestScore={bestScore}
      />
      <main>
        <p>
          Test your memory! Every new image you click earns a point, but if you
          click the same one again, you lose. How high can you score?
        </p>
        <div className="cardsContainer">
          {twelveUmas.length <= 0 ? (
            <Spinner />
          ) : (
            twelveUmas.map((uma) => {
              return (
                <Card
                  key={uma.game_id}
                  name={uma.name_en}
                  imageUrl={uma.thumb_img}
                  clickEvent={cardClickHandler}
                />
              );
            })
          )}
        </div>
      </main>
      <footer>
        The images and names of the umas are fetched from Umapyoi.net's
        Character endpoints
      </footer>
    </>
  );
}

export default App;
