function popupToggle() {
  [].forEach.call(document.getElementsByClassName('toggle'), function(x) {
    x.classList.toggle('blur');
  });
  infoVars();
}
