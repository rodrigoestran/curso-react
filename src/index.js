import React from 'react';
import ReactDOM from 'react-dom';
// create a new component. This component
//should produce some html.
const App = () => {
    return <div>Hi!</div>;
}

//Take this component's generated  HTML and put it on the page(IN the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
