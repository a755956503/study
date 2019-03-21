// JSX语法
let app = (<div id='app'>Hello World!</div>);

// babel编译后：
let app = React.createElement('div', {id: 'app'}, 'Hello World!');