const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3"
  ];
  
  const quoteElement = document.getElementById("quote");
  let currentQuoteIndex = 0;
  
  function rotateQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }
  
  rotateQuote(); // Show the initial quote
  
  setInterval(rotateQuote, 5000); // Rotate the quote every 5 seconds
  