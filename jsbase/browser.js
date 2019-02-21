/** ajax */

function ajax(data) {
  var xmlHttpRequest = new XMLHttpRequest();
  try {
    xmlHttpRequest.onreadystatechange = function() {
      if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
        data.success && data.success(xmlHttpRequest.responseText)
      } else if (xmlHttpRequest.readyState === 4) {
        data.onerror(xmlHttpRequest.responseText);
      }
    }
    xmlHttpRequest.open(data.method, data.url, true);
    if (data.headers) {
      Object.keys(data.headers).forEach(function(key){
        xmlHttpRequest.setRequestHeader(key, data.headers[key])
      })
    }
    xmlHttpRequest.send(data.data);
  } catch (error) {
    xmlHttpRequest && xmlHttpRequest.abort();
  }
}