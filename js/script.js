/******************************************
 *****************************************/

/***
 * `quotes` array
 ***/

var quotes = [
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. ",
    source: "Patrick McKenzie",
    citation: "Facebook",
    year: 2020,
  },
  {
    quote: "The best religion is its humanity.",
    source: "Unknown",
    citation: "MaybeME",
    year: 2021,
  },
  {
    quote:
      "Optimism is an occupational hazard of programming: feedback is the treatment",
    source: "Ken Beck",
    citation: "",
    year: 2018,
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    source: " Austin Freeman",
    citation: "",
    year: 2020,
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    citation: "",
    year: "",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "",
    year: 1988,
  },
  {
    quote:
      "When we strive to become better than we are, everything around us becomes better too.",
    source: "Paolo Coelho",
    citation: "",
    year: 1969,
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    source: "Herman Melville",
    citation: "",
    year: 1899,
  },
  {
    quote: "There is nothing impossible to him who will try.",
    source: "Alexander the Great",
    citation: "",
    year: 1888,
  },
];

const quoArray = () => {
  for (let i = 0; i < quotes.length; i++) {
    console.log(quotes[i].quote);
    console.log(quotes[i].source);
    console.log(quotes[i].citation);
    console.log(quotes[i].year);
  }
};

quoArray();
// let btn = document.getElementById("load-quote");
// btn.addEventListener('click',quoArray(),false);

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randomNumber];
};

/***
 * `printQuote` function
 ***/

//1.
const printQuote = () => {
  //test only
  let RandomQuote = getRandomQuote();
  console.log(RandomQuote);
  let quote = document.getElementsByClassName("quote")[0];
  let source = document.getElementsByClassName("source")[0];

  //check if the quote and citation properties exist
  if (RandomQuote.citation == undefined) {
    RandomQuote.citation = "";
  }

  //check if the quote and year properties exist
  if (RandomQuote.year == undefined) {
    RandomQuote.year = "";
  }
  //3.   ?
  let PtoHTML1 =
    "<p class='quote'>" +
    RandomQuote.quote +
    "<p class='source'>" +
    RandomQuote.source;
  document.getElementById("quote-box").innerHTML = PtoHTML1;
};
//4.

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
let btn = document.getElementById("load-quote");
// btn.addEventListener('click',getRandomQuote,false);
btn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    printQuote();
  },
  false
);
