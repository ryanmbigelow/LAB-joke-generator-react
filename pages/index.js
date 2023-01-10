import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/joker';

function Home() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const setBtn = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });
      setBtn('Get Punchline');
    });
  };

  return (
    <>
      <Joker joke={joke} btnText={btnText} />
      {btnText === 'Get a Joke' || btnText === 'Get Another Joke'
        ? <button type="button" onClick={getAJoke}>{btnText}</button>
        : <button type="button" onClick={() => setBtn('Get Another Joke')}>{btnText}</button>}
    </>
  );
}

export default Home;
