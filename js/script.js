var quotes = [
"That rug really tied the room together.",
"Obviously you're not a golfer.",
"Yeah, well, you know, that's just, like, your opinion, man.",
"It's like what Lenin said... you look for the person who will benefit, and, uh, uh...",
"Is this a... what day is this?",
"Well, they finally did it. They killed my fucking car.",
"Oh, the usual. I bowl. Drive around. The occasional acid flashback."
];

function addQuote(quoteText) {
  quotes.push(quoteText);
}

function getRandomQuote(){
  var size = quotes.length;
  var randIndex = Math.floor(Math.random() * size);
  return(quotes[randIndex]);
}

$('#getQuote').on('click', function() {
  $('#quoteField').html(getRandomQuote());
});

$('#addQuote').on('click', function(){
  if($('#quoteSource').val() != ''){
    addQuote($('#quoteSource').val());
    $('#quoteSource').val(""); 
  }
})
