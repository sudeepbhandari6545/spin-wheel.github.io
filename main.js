function magicwheel() {
  var x = 1024;
  var b = 9999;
  var dgre = Math.floor(Math.random() * (x - b)) + b;
  document.getElementById('spinner').style.transform =
    'rotate(' + dgre + 'deg)';
}
