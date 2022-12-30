import { useState } from 'react';
import Grandchild from './Grandchild';

const ChildTwo = ({ renderCount }) => {
  console.log('ChildTwo rendered!');
  const [localRenderCount, setLocalRenderCount] = useState(0);

  const handleClick = () => setLocalRenderCount(localRenderCount + 1);
  return (
    <section className="child">
      <h2>ChildTwo</h2>
      <p>Number of renders: {renderCount + localRenderCount}</p>
      <button onClick={handleClick}>Rerender ChildTwo</button>
      <Grandchild renderCount={renderCount + localRenderCount} />
    </section>
  );
};

export default ChildTwo;
