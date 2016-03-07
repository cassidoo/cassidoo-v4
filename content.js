function githubURL() {
  var url = 'https://api.github.com/repos/cassidoo/cassidoo-v4/contents/contents/press.txt';
  return function() {
    return url;
  };
}

function pullInfo() {
  fetch('contents/info.json').then(function(response) {
    return response.json();
  }).then(function(j) {
    console.log(j);
  });
}

function pullPress() {
  fetch('contents/press.json').then(function(response) {
    return response.json();
  }).then(function(j) {
    console.log(j);
  });
}
