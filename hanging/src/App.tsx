import { letters } from "./helpers/letters";
import './App.css'
import { HangImage } from "./components/HangImage";
import { useEffect, useState } from "react";
import { getRandomWord } from './helpers/getRandomWord';


function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAtteempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determinar si la persona perdio
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }

  }, [attempts]) //hooks

  //Determinar si la persona gana
  useEffect(() => {
    // console.log(hiddenWord);
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord])



  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAtteempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");


    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(" "));
  }

  const newGame = () => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAtteempts(0);
    setLose(false);
    setWon(false);

    console.log("new game");
  }

  return (
    <div className="App">

      {/* Imagenes */}
      <HangImage imageNumber={attempts} />


      {/* Palbra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3> Intentos: {attempts}</h3>

      {/* mensaje si perdio */}
      {
        (lose)
          ? <h2>Perdio: {word} </h2>
          : " "
      }

      {/* mensaje si gano */}
      {
        (won)
          ? <h2>Felicidades, Ganaste!! </h2>
          : " "
      }

      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}
          </button>
        ))
      }
      <br /> <br />
      <button onClick={newGame}> ¿Nuevo juego?</button>

    </div>
  );
};

export default App
