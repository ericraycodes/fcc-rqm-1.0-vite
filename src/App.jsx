import { useState, useEffect } from 'react';
import { fetchRandomQuote, selectRandomColor } from './functions.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  // Manage the state of the quote
  const [quote, setQuote] = useState({ quote: '', author: '' });
  // Toggle the state of button click event
  const [click, setClick] = useState(0);
  // State of opacity of certain components
  const [fade, setFade] = useState(false);
  // State of random app color changes: initial 'gray'
  const [color, setColor] = useState('#3D3B40');

  // Handle asynchronous random quote fetching at page load.
  useEffect(() => {
    window.console.log('<App /> render:', click + 1);
    setFade(true);
    setTimeout(async () => {
      // window.console.log('async op: fetching...')
      const fetchedQuote = await fetchRandomQuote();
      setQuote(fetchedQuote);
      setColor(selectRandomColor());
      setFade(false);
    }, 700);

    // cleanup function
    return () => {
      window.console.log('<App/> cleanup:', click + 1);
      setTimeout(() => {  
      }, 700);
    };
  }, [click]);

  // Handle click event
  const handleClick = () => {
    window.console.log('Button clicked');
    setClick(click + 1);
  };

  // Tweet path for tweet functionality
  const tweetPath = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freeCodeCamp&text=';
  const uri = tweetPath + '"' + quote['quote'] + '" - ' + quote['author'];
  const href = encodeURI(uri);
  window.console.log('tweet href:', href);

  // Styles: reactive fade on quote and author texts
  const styleFade = {
    opacity : fade?'0%':'100%',
    color : color
  };
  // Styles: reactive color transition on app color changes
  const styleColor = {
    backgroundColor: color
  };
  document.querySelector('body').style.backgroundColor = color;

  return (
    <>
    <div id='quote-box'>
      <blockquote
        id='text'
        style={styleFade}
      >
        <FontAwesomeIcon
          className='fa-icon-quote'
          icon={faQuoteLeft}
        />
        <span>{quote['quote']}</span>
      </blockquote>
      <span
        id='author'
        style={styleFade}
      >- {quote['author']}</span>
      <div
        className='buttons-box'
      >
        <a
          id='tweet-quote'
          title='Tweet this quote!'
          href={href}
          target='_blank'
          rel='noreferrer'
          style={styleColor}
        ><FontAwesomeIcon icon={faXTwitter} /></a>
        <button
          id='new-quote'
          title='Click for a new quote!'
          onClick={handleClick}
          style={styleColor}
        >New quote</button>
      </div>
    </div>
    </>
  );
}

export default App;
