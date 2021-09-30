"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Father = function () {
  function Father() {
    _classCallCheck(this, Father);

    this.a = 1;
    console.log(1);
  }

  _createClass(Father, [{
    key: "func1",
    value: function func1() {
      console.log(this.a);
    }
  }], [{
    key: "staticFun1",
    value: function staticFun1() {
      console.log(1);
    }
  }]);

  return Father;
}();

var Child = function (_Father) {
  _inherits(Child, _Father);

  function Child() {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));

    _this.b = 1;
    return _this;
  }

  _createClass(Child, [{
    key: "func2",
    value: function func2() {
      console.log(this.b);
    }
  }]);

  return Child;
}(Father);


// es6
class Father {
	constructor() {
    	this.a = 1;
      	console.log(1);
    }
  	func1() {
    	console.log(this.a);
    }
  	static staticFun1() {
    	console.log(1);
    }
}
class Child extends Father {
	constructor() {
      	super();
    	this.b = 1;
    }
  	func2() {
    	console.log(this.b);
    }
}

// 继承实现过程
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
// __proto__仅适用于Chrome和FireFox，在IE中不工作
// setPrototypeOf 兼容ie11及以上
Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;