// pull infomation about me
function pullInfo() {
  return fetch('contents/info.json').then(function(response) {
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
    info.school = x.school;
    info.grad = x.grad;
    info.major = x.major;
    info.hobbies = x.hobbies;
  })
  .then(function() {
    intro(info);
  });
}

// pull press links
function pullPress() {
  return fetch('contents/press.json').then(function(response) {
    return response.json();
  });
}

// first 5 press articles
function pressVars() {
  var recent = [];

  pullPress().then(function(r) {
    for(var i = 0; i < 5; i++) {
      recent[i] = r.data[i];
    }
  })
  .then(function() {
    press(recent);
  });
}

function formListString(arr) {
  if (arr.length > 1) {
    return arr.slice(0, -2).join(', ') + ', and ' + arr.slice(-1);
  } else {
    return arr;
  }
}

// generate info section
function intro(info) {
  var content = document.getElementById('content');
  var fulltime = formListString(info.fulltime);
  var intern = formListString(info.intern);

  content.innerHTML = `Hi, my name is Cassidy Williams (if you couldn't figure that out already) and I am a ${info.title} at ${info.company}!

      I started my voyage into coding when I was an 8th grader in the suburbs of Chicago, and I've been loving it ever since. I'm primarily interested in front-end development, but hey, it's always fun to try other things too. You can see my projects on my <a href="http://github.com/cassidoo">GitHub profile</a>.

      I joined ${info.company} in August 2015, where I'm working on building developer evangelism in the organization from the ground up. I'm also doing some front-end engineering work, as their first female engineer! At the hackathons we've attended so far, we're consistently one of the top APIs used (if not the top) every single time, which is very exciting.

      Previously, I was at ${fulltime}, and before that, I graduated from ${info.school} in ${info.grad} with my degree in ${info.major}. While there, I interned at ${intern}. Since moving to NYC, I've had the honor of working with various organizations, such as <a href="http://hacker.fund/">Hacker Fund</a> as their Director of Outreach, and I've been included as one of <a href="http://www.glamour.com/inspired/2014/09/top-new-women-leaders-in-technology/33">Glamour Magazine's 35 Women Under 35 Who Are Changing the Tech Industry</a> and <a href="https://lists.linkedin.com/2015/next-wave/enterprise-tech/cassidy-williams">LinkedIn's top 10 Professionals 35 & Under in Enterprise Tech</a>. I've also had the pleasure of working with Microsoft on the <a href="http://www.bigdreammovement.com/">Big Dream documentary</a> and the U.S.A. Science and Engineering Festival with their <a href="http://scienceblogs.com/usasciencefestival/2014/09/24/cassidy-williams-an-emerging-computer-scientist-with-a-desire-to-inspire-more-women-in-stem/">Nifty Fifty program</a> to encourage more students to participate in STEM.

      In addition to ${info.hobbies[Math.floor(Math.random()*info.hobbies.length)]}, one of my favorite things to do is help people be successful, whether it means mentoring them at a hackathon, editing their resume, or giving a talk. Check out my <a href="http://github.com/cassidoo/getting-a-gig">Getting a Gig</a> guide or my <a href="http://cassidoo.github.io">blog</a> to learn more about that. If you want. You don't have to. I'm not your mother.

      If you have any questions about me or you just want to send me a joke, take a look at any of my profiles listed on this site.
      Thanks for reading this far. In exchange for your seemingly undying loyalty, here is a joke: Why are mountains so funny? Because they're hill areas.`;
}

// generate press section
function press(articles) {
  var press = document.getElementById('press');
  articles.forEach(function(x) {
    press.innerHTML += `<a href="${x.url}">${x.title}</a>`;
  });
}
