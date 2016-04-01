function popupToggle() {
  [].forEach.call(document.getElementsByClassName('container'), function(x) {
    x.classList.toggle('blur');
  });
  infoVars();
}
