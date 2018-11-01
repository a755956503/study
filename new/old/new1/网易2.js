function add(items) {
  if (!items) {
    items = [];
  }
  var tprice = 0;
  // var temp = '<tr><td>$name$</td><td>$price$</td><td><a href=\"javascript:void(0);\">删除</a></td></tr>';
  // var inner = '';
  var table = document.getElementById('jsTrolley');
  var tbody = table.getElementsByTagName('tbody')[0];
  var total = table.querySelector('td[colspan]');
  var old = [];
  var trArr = tbody.querySelectorAll('tr');
  for (var i =0;i < trArr.length; i++) {
    tdArr = trArr[i].querySelectorAll('td');
    var obj ={};
    obj['name'] = tdArr[0].innerText;
    obj['price'] = tdArr[1].innerText;
    old.push(obj);
  }
  items = old.concat(items);
  tbody.innerHTML = null;
  items.forEach(function(cv, i) {
    // inner += temp.replace(/\$.*?\$/g, function($1) {
    //   var obj = {
    //     $name$: cv.name,
    //     $price$: String(cv.price),
    //   };
    //   return obj[$1];
    // });
    // tprice += Number(cv.price);
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerText = cv.name;
    var tdPrice = document.createElement('td');
    tdPrice.innerText = cv.price;
    var tdDelete = document.createElement('td');
    var a = document.createElement('a');
    a.innerText = '删除'
    a.setAttribute('href','javascript:void(0);');
    a.onclick = bind;
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tdDelete.appendChild(a);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
    tprice += Number(cv.price);
  });
  window.items = items;
  // tbody.innerHTML = inner;
  total.innerText = tprice;
}

function bind() {
  var target = event.target;
  var items = window.items;
  var tprice = 0;
  var table = document.getElementById('jsTrolley');
  var tbody = table.getElementsByTagName('tbody')[0];
  var total = table.querySelector('td[colspan]');
  var aArr = tbody.querySelectorAll('tr td a');
  for (var i =0; i < aArr.length; i++) {
    if (aArr[i] === target) {
      items.splice(i, 1);
      break;
    }
  }
  tbody.innerHTML = null;
  items.forEach(function(cv, i) {
    // inner += temp.replace(/\$.*?\$/g, function($1) {
    //   var obj = {
    //     $name$: cv.name,
    //     $price$: String(cv.price),
    //   };
    //   return obj[$1];
    // });
    // tprice += Number(cv.price);
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerText = cv.name;
    var tdPrice = document.createElement('td');
    tdPrice.innerText = cv.price;
    var tdDelete = document.createElement('td');
    var a = document.createElement('a');
    a.innerText = '删除'
    a.setAttribute('href','javascript:void(0);');
    a.onclick = bind;
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tdDelete.appendChild(a);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
    tprice += Number(cv.price);
  });
  total.innerText = tprice;
  window.items = items;
}