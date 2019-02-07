import React, { useState } from 'react';

const App2 = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div>
            <h1>Hooks Demo</h1>
            <p>You clicked {count} times</p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>Your name is: {name}</p>
            <input type="text" onChange={e => setName(e.target.value)} />
        </div>
    );
};

export default App2;
