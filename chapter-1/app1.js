// Adding one heading to the root using JS
const heading = document.createElement('h1');
heading.innerHTML = 'Hello from JavaScript!!!';

const root = document.getElementById('root');
root.appendChild(heading);