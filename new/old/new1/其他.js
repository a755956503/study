function token(tokens) {
  var ans = 0;
  var mid = 0;
  for (var i = 0; i < tokens.length; ++i) {
    var cv = parseInt(tokens[i]);
    if (cv === 0) {
      ans++;
      mid = 0;
    } else {
      if ((cv ^ mid) !== 0) {
        mid = cv ^ mid;
      } else {
        mid = 0;
        ans++;
      }
    }
  }
}