function link() {
  var str = document.getElementById('jsContainer').childNodes[0].nodeValue;
  str = str.replace(/(https?:\/\/)*www\.([a-zA-Z0-9\-\.])+?\.[a-zA-Z0-9\-]+[\?]?([a-zA-Z0-9\-]+=[a-zA-Z0-9\-]+)*/g, function($){
    var a = document.createElement('a');
    if ($.slice(0,3) === 'www'){
      $ = 'http://' + $;
    }
    var str = '<a href=\'' + $ + '\' target=\'aaa\'>' + $ + '</a>';
    return str;
  });
  document.getElementById('jsContainer').innerHTML = str;
}
link();
