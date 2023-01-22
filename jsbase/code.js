function display(start, end) {
  let strArr = [];
  // let fragment = document.createDocumentFragment();
  for (let i = start; i <= end; i++) {
    let str = String.fromCodePoint(i);
    // let span = document.createElement('span');
    // span.setAttribute('style', "margin-left: 10px")
    // span.innerText = str;
    // fragment.appendChild(span);
    strArr.push(i.toString(16));
    strArr.push(str);
  }
  let div = document.querySelector('#text');
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('id', 'text');
    // Helvetica Neue
    // BlinkMacSystemFont
    div.style.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif,黑体,宋体';
    document.documentElement.appendChild(div);
  }
  // div.appendChild(fragment);
  div.innerHTML = strArr.join(' ')
}
display(0x20000, 0x2ffff)