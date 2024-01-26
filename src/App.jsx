import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function App() {

  // Stores the random quote.
  const [quote, setQuote] = useState({});
  // Stores true when #new-quote button is clicked.
  const [clicked, setClicked] = useState(false);
  // When this is boolean true, the displayed quote will have fade out.
  const [fade, setFade] = useState(false);
  // Stores the random color.
  const [color, setColor] = useState('gray');


  // Handle asynchronous random quote fetching at page load & user event button click.
  useEffect(() => {
    window.console.log('<App /> RENDERED');
    setFade(true);

    // The setTimeout() portion is used for timing the css fades with asynchronous fectching of quote.
    setTimeout(async () => {
      const fetchedQuote = await utils.fetchQuote();
      setQuote(fetchedQuote);
      setColor(utils.selectColor());
      setFade(false);
    }, 700);
    window.console.log('quote:', quote);

    // cleanup function
    return () => {
      window.console.log('<App /> UNMOUNT.\n<App /> CLEANUP');
      setClicked(false);
    };
  }, [clicked]);


  // Handle #new-quote click event
  const handleClick = () => {
    window.console.log('Button clicked');
    setClicked(true);
  };



  // Tweet path for tweet functionality
  const tweetPath = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freeCodeCamp&text=';
  const uri = tweetPath + '"' + quote['quote'] + '" - ' + quote['author'];
  const href = encodeURI(uri);
  window.console.log('tweet href:', href);

  // For inline-styles: fade on quote and author texts.
  const styleFade = {
    opacity : fade?'0%':'100%',
    color : color
  };
  // For inline-styles: app color changes.
  const styleColor = {
    backgroundColor: color
  };
  // For changing the app's background-color. The element is outside of React.
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


// This function generates a random number between zero to a certain positive maximum number.
const generateRandomNumber = (max) => Math.floor(Math.random() * max);

// An object that contains methods: for fetching random quotes, and selecting random colors.
const utils = {
    'fetchQuote' : async () => {
        window.console.log('\tfetching a random quote...');
        return await fetch('./quotes.json').catch(error => console.log('fetch error', error))
        .then(response => response.json()).catch(error => console.log('json error', error))
        .then(data => {
            const quotes = data['quotes'];
            const randomQuote = quotes[generateRandomNumber(quotes.length)];
            window.console.log('fetched:', randomQuote);
            return randomQuote;
        }).catch(error => console.log('data error', error));
    },
    'selectColor' : () => {
        // random color options.
        const colors = [
            '#711DB0', '#1640D6', '#3081D0', '#332941', '#164863',
            '#994D1C', '#B06161', '#A25772', '#FF5B22', '#43766C',
            '#820300', '#AF2655', '#CD5C08', '#26577C', '#B8621B'
        ];
        return colors[generateRandomNumber(colors.length)];
    }
};