import React from 'react';
import ReactDOM from 'react-dom/client';

const spanTag = <span>This is a span tag</span>;

const tittleTag = (
    <h1>This is heading tag from variable
        {spanTag}
    </h1>
);

const HeaderComponent = () => (
    <div className='parent'>
        <div id="child1">
           {tittleTag}
            <h2>H2 from parent1</h2>
        </div>
        <div id="child2">
            <h1>H1 from parent2</h1>
            <h2>H2 from parent2</h2>
        </div>
    </div>
);

const ParentComponent = () => (
    <div className='container'>
        <HeaderComponent />
        {HeaderComponent()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ParentComponent />);