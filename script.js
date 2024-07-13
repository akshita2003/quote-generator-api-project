const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author-text'); 
const quoteBtn = document.getElementById('quote-btn');

quoteBtn.addEventListener('click', getQuote);

function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex].text;
            const author = data[randomIndex].author; 
            quoteText.textContent = `"${quote}"`;
            authorText.textContent = `- ${author}`; 
        })
        .catch(error => {
            quoteText.textContent = 'Failed to fetch quote.';
            authorText.textContent = ''; 
            console.error('Error fetching quote:', error);
        });
}
