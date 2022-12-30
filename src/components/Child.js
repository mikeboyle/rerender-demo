import { useState } from 'react';
const Child = ({ renderCount }) => {
  console.log('Child rendered!');
  const [localRenderCount, setLocalRenderCount] = useState(0);

  const handleClick = () => setLocalRenderCount(localRenderCount + 1);

  return (
    <section className="child">
      <h2>Child</h2>
      <p>Number of renders: {renderCount + localRenderCount}</p>
      <button onClick={handleClick}>Rerender Child</button>
    </section>
  );
};

export default Child;
