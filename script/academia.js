function msg() {
    $("#mensagem").addClass('ver');
    setTimeout(function () { $("#mensagem").removeClass('ver'); }, 2000);
};

$('footer-coluna li a').click(function(event) {
  event.preventDefault();
});


var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 1000)

