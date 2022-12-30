import { useState } from 'react';

import './App.css';
import Child from './components/Child';
import ChildTwo from './components/ChildTwo';

function App() {
  console.log('App rendered!');
  const [renderCount, setRenderCount] = useState(1);

  const handleClick = () => setRenderCount(renderCount + 1);

  return (
    <div className="App">
      <h1>App</h1>
      <p>Number of renders: {renderCount}</p>
      <button onClick={handleClick}>Rerender App</button>
      <div className="children">
        <Child renderCount={renderCount} />
        <ChildTwo renderCount={renderCount} />
      </div>
    </div>
  );
}

export default App;
