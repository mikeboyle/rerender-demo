import { useState } from 'react';
const Grandchild = ({ renderCount }) => {
  console.log('Grandchild rendered!');
  const [localRenderCount, setLocalRenderCount] = useState(0);

  const handleClick = () => setLocalRenderCount(localRenderCount + 1);

  return (
    <div className="grandchild">
      <h3>Grandchild</h3>
      <p>Number of renders: {renderCount + localRenderCount}</p>
      <button onClick={handleClick}>Rerender Grandchild</button>
    </div>
  );
};

export default Grandchild;
