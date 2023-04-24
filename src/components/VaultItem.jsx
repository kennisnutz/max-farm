import { useState } from 'react';
import VaultForm from './VaultForm';
import VaultHeader from './VaultHeader';
import '../styles/vault-item.css';

function VaultItem({ vault }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="vault-item-container" onClick={handleExpanded}>
      <VaultHeader vault={vault} />
      {expanded && <VaultForm vault={vault} />}
    </div>
  );
}

export default VaultItem;
