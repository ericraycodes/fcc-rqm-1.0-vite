// Generates a random number between zero to a certain positive maximum number.
const generateRandomNumber = (max) => Math.floor(Math.random() * max);


// Fetches a random quote+author from './public/quotes.json'.
const fetchRandomQuote = async () => {
    window.console.log('fetching a random quote + author...');
    return await fetch('./quotes.json').catch(error => console.log('fetch error', error))
        .then(response => response.json()).catch(error => console.log('json error', error))
        .then(data => {
            const quotes = data['quotes'];
            const randomQuote = quotes[generateRandomNumber(quotes.length)];
            window.console.log('fetched:', randomQuote);
            return randomQuote;
        }).catch(error => console.log('data error', error));
};


// Selects a random color.
const selectRandomColor = () => {
    // random color options.
    const colors = [
      '#711DB0', '#FFB534', '#88AB8E', '#1640D6', '#3081D0',
      '#994D1C', '#B06161', '#A25772', '#FF5B22', '#B0A695'
    ];
    return colors[generateRandomNumber(colors.length)];
};


export { fetchRandomQuote, selectRandomColor };