$(document).ready(function(){
  $.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;
    for(var i=0; i<redditArray.length; i++){
      var thumbnail = redditArray[i].data.thumbnail;
      var author = redditArray[i].data.author;
      var title = redditArray[i].data.title;
      var score = redditArray[i].data.score;
      var permalink = redditArray[i].data.permalink;
      $('section').append(
        '<a href="http://www.reddit.com'+permalink+'"><div class="post"><img class= "pics" src="'
        +thumbnail+
        '"/><h2>Title: '+ title +
        '</h2><h2>Author: '+ author +'</h2><h2>Score: '+ score +'</h2></div></a>');

        //$(".post").click(function() {
  //window.location = "http://homepage/"+permalink;
    }

  });

});
