import React, { useState } from 'react';
const ChildThree = React.memo(({ renderCount = 1 }) => {
  console.log('ChildThree rendered!');
  const [localRenderCount, setLocalRenderCount] = useState(0);

  const handleClick = () => setLocalRenderCount(localRenderCount + 1);

  return (
    <section className="child">
      <h2>ChildThree (Memoized!)</h2>
      <p>Number of renders: {renderCount + localRenderCount}</p>
      <button onClick={handleClick}>Rerender Child Three</button>
    </section>
  );
});

export default ChildThree;
