var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "47446ed1089f401da7e62a82507b7c1f",
  'q': "politics"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(result.response.docs[0].headline.main);
  console.log(result.response.docs[2].headline.main);
  console.log(result.response.docs[5].headline.main);
  console.log(result.response.docs[7].headline.print_headline);


}).fail(function(err) {
  throw err;
});