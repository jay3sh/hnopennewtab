
(function () {
  var athings = document.getElementsByClassName('athing');
  for(var i=0; i<athings.length; i++) {
    var athing = athings[i];
    var atitle = athing.getElementsByClassName('title')[1];
    var aa = atitle.getElementsByTagName('a')[0];
    aa.setAttribute('target','_blank');
  }
})();
