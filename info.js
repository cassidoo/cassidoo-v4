function githubURL() {
  var url = 'https://api.github.com/repos/cassidoo/cassidoo-v4/contents/contents/press.txt';
  return function() {
    return url;
  };
}

function pullPress() {
  var gurl = githubURL();
  fetch(gurl())
    .then(function(r) {

    });
}
