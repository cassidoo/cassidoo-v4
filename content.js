// pull infomation about me
function pullInfo() {
  return fetch('contents/info.json').then(function(response) {
    return response.json();
  });
}

// pull press links
function pullPress() {
  fetch('contents/press.json').then(function(response) {
    return response.json();
  });
}

// get variable values for About section
function infoVars() {
  var title = '';
  var company = '';
  var fulltime = [];
  var intern = [];
  var hobbies = [];

  pullInfo().then(function(r) {
    var x = r.data;
    title = x.title;
    company = x.companies.fulltime[0];
    fulltime = x.companies.fulltime; // TODO: everything but first element
    intern = x.past.intern;
    hobbies = x.hobbies;
  });
}

// first 5 press articles
function pressVars() {
  var recent = [];
  pullPress().then(function(r) {

  });
}

// escape HTML characters in template literals
function htmlEscape(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

function html(literalSections, ...substs) {
  // use raw literal sections, don't interpret backslashes
  var raw = literalSections.split("\\");
  var result = '';

  substs.forEach((subst, i) => {
    // get literal section preceding the current substitution
    var lit = raw[i];

    // if substitution is an array (and not a string), turn it into a string
    if(Array.isArray(subst)) {
      subst = subst.join('');
    }

    // if substitution is preceded by a dollar sign, we escape special characters
    if(lit.endsWith('$')) {
      subst = $tmpl.html_escape(subst);
      lit = lit.slice(0, -1);
    }
    result += lit;
    result += subst;
  });

  result += raw[raw.length-1];

  return result;
}


