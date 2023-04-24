import { useState } from 'react';
import PoolForm from './PoolForm';
import PoolHeader from './PoolHeader';
import '../styles/vault-item.css';

function PoolItem({ pool }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="vault-item-container" onClick={handleExpanded}>
      <PoolHeader pool={pool} />
      {expanded && <PoolForm pool={pool} />}
    </div>
  );
}

export default PoolItem;
