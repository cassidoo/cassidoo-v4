function popupToggle() {
  [].forEach.call(document.getElementsByClassName('container'), function(x) {
    if (!x.classList.contains('blur')) {
      generateContent();
    }
    x.classList.toggle('blur');
  });
}

function closePopup() {
  var aboutClass = document.getElementById('about').classList;
  aboutClass.toggle('shrink');
  window.setTimeout(function() {
    aboutClass.toggle('shrink');
    popupToggle();
  }, 500);
}
