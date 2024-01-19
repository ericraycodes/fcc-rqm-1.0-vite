// Generates a random number between zero to a certain oositive maximum number.
const randomNumber = (max) => Math.floor(Math.random() * max);


// Fetches a random quote+author from './public/quotes.json'.
const fetchRandomQuote = async () => {
    window.console.log('fetching a random quote + author...');
    return await fetch('./public/quotes.json').catch(error => console.log('fetch error', error))
        .then(response => response.json()).catch(error => console.log('json error', error))
        .then(data => {
            const quotes = data['quotes'];
            const randomQuote = quotes[randomNumber(quotes.length)];
            window.console.log('fetched:', randomQuote);
            return randomQuote;
        }).catch(error => console.log('data error', error));
};


export { fetchRandomQuote };