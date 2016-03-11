function pullInfo() {
  return fetch('contents/info.json').then(function(response) {
    return response.json();
  });
}

function pullPress() {
  fetch('contents/press.json').then(function(response) {
    return response.json();
  });
}

function greetingVars() {
  var title = '';
  var company = '';
  var fulltime = [];
  var intern = [];
  var hobbies = [];

  pullInfo().then(function(r) {
    var x = r.data;
    title = x.title;
    company = x.company;
    fulltime = x.past.fulltime;
    intern = x.past.intern;
    hobbies = x.hobbies;
  });
}

function pressVars() {
  var recent = [];
  pullPress().then(function(r) {

  });
}
