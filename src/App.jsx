import { useState, useEffect } from 'react';
import { fetchRandomQuote } from './functions.jsx';

function App() {

  // Manage the state of the quote
  const [quote, setQuote] = useState({});
  // Toggle the state of button click event
  const [click, setClick] = useState(false);
  // Counts nth click - this is not important, will be removed when done developing
  const [clicked, setClicked] = useState(0);

  // Handle asynchronous random quote fetching at page load.
  useEffect(() => {
    window.console.log('<App />', clicked);
    setTimeout(async () => {
      window.console.log('async op: fetching...')
      const fetchedQuote = await fetchRandomQuote();
      setQuote(fetchedQuote);
    }, 700);
    window.console.log('quote:', quote);

    // cleanup function
    return () => {
      setQuote({});
      setClick(false);
    };
  }, [click]);

  // Handle click event
  const handleClick = () => {
    setClick(true);
    setClicked(clicked + 1);
    window.console.log('<App/> cleanup...')
  };

  // Tweet path for tweet functionality
  const tweetPath = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freeCodeCamp&text=';
  const uri = tweetPath + '"' + quote['quote'] + '" - ' + quote['author'];
  const href = encodeURI(uri);
  window.console.log('tweet href:', href);

  return (
    <>
    <div id='quote-box'>
      <blockquote id='text'>{quote['quote']}</blockquote>
      <span id='author'>- {quote['author']}</span>
      <a
        id='tweet-quote'
        title='Tweet this quote!'
        href={href}
        target='_blank'
        rel='noreferrer'
      >X</a>
      <button
        id='new-quote'
        title='Click for a new quote!'
        onClick={handleClick}
      >New quote</button>
    </div>
    </>
  );
}

export default App;
