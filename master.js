var quoteText = "";
var quoteAuthor = "";

//function is ready on loading of the page
$(document).ready(function() {

//connecting with the foresmatic API and put the quote in the quote box
  function Quote(){
    var forismaticAPI = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
    $.getJSON(forismaticAPI, function(data) {
      quoteText = data.quoteText;
      quoteAuthor = data.quoteAuthor;
      lengthquote = quoteAuthor.length + quoteText.length;
      if (lengthquote>140 || quoteAuthor.length<2) {
        Quote();
      } else {
        $(".quote").html(quoteText+"<br><br>"+quoteAuthor);
      }

    });
  };

//Load new Quote on click
  $("#getquote").on("click", function(){
        Quote();
  });
//opens twitter page to post the quote in a new window on click
  $('#sendquote').on('click', function() {
        window.open("https://twitter.com/intent/tweet?text="+quoteText+" "+quoteAuthor);
 });

//initial quote on start
  Quote();
});
