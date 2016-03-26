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
  var info = {};

  pullInfo().then(function(r) {
    var x = r.data;
    info.title = x.title;
    info.company = x.companies.fulltime[0];
    info.fulltime = x.companies.fulltime.slice(1);
    info.intern = x.companies.intern;
    info.hobbies = x.hobbies;
  })
  .then(function() {
    intro(info);
  });
}

// first 5 press articles
function pressVars() {
  var recent = [];
  pullPress().then(function(r) {
  });
}

function intro(info) {
  var content = document.getElementById('content');
  content.innerHTML = html(`
    <div class="intro">
        Hi, My name is Cassidy Williams and I am a ${info.title}.
    </div>
  `);
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

// set up HTML templating
// based on: http://www.2ality.com/2015/01/template-strings-html.html
function html(literalSections, ...substs) {
  // use raw literal sections, don't interpret backslashes
  var raw = literalSections.split("\\");
  var result = '';

  substs.forEach((subst, i) => {
    // get literal section preceding the current substitution
    var lit = raw[i];

    // if substitution is an array (and not a string), turn it into a string
    if (Array.isArray(subst)) {
      subst = subst.join('');
    }

    // if substitution is preceded by a dollar sign, we escape special characters
    if (lit.endsWith('$')) {
      subst = $tmpl.html_escape(subst);
      lit = lit.slice(0, -1);
    }
    result += lit;
    result += subst;
  });

  result += raw[raw.length-1];
  return result;
}

