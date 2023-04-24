import { BsInfo } from 'react-icons/bs';
import '../styles/vault-header.css';

function VaultHeader({ vault }) {
  return (
    <div className="container" onClick={() => console.log('clicked')}>
      <div className="logo-container">
        <img src={vault.logo1} alt="logo1" className="logo1" />
        <img src={vault.logo2} alt="logo2" className="logo2" />
      </div>
      <div className="title-section">
        <h3>{vault.title}</h3>
        <p>Uses {vault.platform}</p>
      </div>
      <div className="vault-info">
        <div className="balance">
          <h3>{vault.balance}</h3>
          <p>Balance</p>
        </div>
        <div className="deposited">
          <h3>{vault.deposited}</h3>
          <p>Deposited</p>
        </div>
        <div className="apy">
          <h3>{vault.apy}%</h3>
          <div className="label">
            <span>APY</span>
            <span>{<BsInfo className="icon" />}</span>
          </div>
        </div>
        <div className="daily">
          <h3>{vault.daily}%</h3>
          <div className="label">
            <span>Daily</span>
            <span>{<BsInfo className="icon" />}</span>
          </div>
        </div>
        <div className="tvl">
          <h3>${vault.tvl}</h3>
          <div className="label">
            <span>TVL</span>
            <span>{<BsInfo className="icon" />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaultHeader;
