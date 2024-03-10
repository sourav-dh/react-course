// Adding Heading
const heading = React.createElement('h1', {className: 'my-heading'}, 'Hello from React!!!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// Adding a nesting HTML structure
const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1', key: 'c1'}, [
        React.createElement('h1', {key: 'c1-h1'}, 'This is H1 from Child1'),
        React.createElement('h2', {key: 'c1-h2'}, 'This is H2 from Child1'),
    ]),
    React.createElement('div', {id: 'child2', key: 'c2'}, [
        React.createElement('h1', {key: 'c2-h1'}, 'This is H1 from Child2'),
        React.createElement('h2', {key: 'c2-h2'}, 'This is H2 from Child2'),
    ])
]);
const nestRoot = ReactDOM.createRoot(document.getElementById('nest-root'));
nestRoot.render(parent);