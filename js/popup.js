function popupToggle() {
  [].forEach.call(document.getElementsByClassName('container'), function(x) {
    if(!x.classList.contains('blur')) {
      generateContent();
    }
    x.classList.toggle('blur');
  });
}

function closePopup() {
  document.getElementById('about').classList.toggle('shrink');
  window.setTimeout(function() {
    document.getElementById('about').classList.toggle('shrink');
    popupToggle();
  }, 500);
}
