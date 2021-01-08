let currentQuoteIndex = 0;
const quotes = ['Fall seven times, stand up eight', 'There smites nothing so sharp, nor smelleth so sour as shame', 'An optimist is the human personification of spring'];

const quoteInput = document.getElementById('quote');
const quoteSpanText = document.getElementById('quote-text');
const startButton = document.getElementById('btn');
let words = [];

startButton.addEventListener('click', () => {
  const randomIndex = random();
  const quoteText = quotes[randomIndex];
  words = quoteText.split(' ');
  let quoteWords = words;
  quoteWords = quoteWords.map(function(quote) {
    return `<span>${quote}</span>`;
  });
  quoteWords = quoteWords.join(' ');
  quoteSpanText.innerHTML = quoteWords;
  const firstElement = document.querySelector('span').classList;
  firstElement.add('highlight');
  startButton.disabled = true;
  startButton.classList.add('disabled');
});

quoteInput.addEventListener('input', function() {
  const typedWord = quoteInput.value; 
  if(typedWord.trim() == words[currentQuoteIndex] && currentQuoteIndex < words.length - 1) {
    const currentSpan = quoteSpanText.children[currentQuoteIndex];
    const currentSpanClass = currentSpan.classList;
    currentSpanClass.remove('highlight');
    const nextSpan = quoteSpanText.children[++currentQuoteIndex];
    const nextSpanSpanClass = nextSpan.classList;
    nextSpanSpanClass.add('highlight');
    quoteInput.value = '';
  }else if(typedWord == words[currentQuoteIndex]) {
    const currentNode = document.getElementsByClassName('highlight')[0];
    const currentNodeClassList = currentNode.classList;
    currentNodeClassList.remove('highlight');
    startButton.disabled = false;
    startButton.classList.remove('disabled');
    quoteSpanText.innerText = '';
    quoteInput.value = '';
    words = [];
    currentQuoteIndex = 0;
    alert("Finished!");
  }
});

function random(){
  return Math.floor(Math.random() * 3);
}